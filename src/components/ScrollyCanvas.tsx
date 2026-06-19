"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  onProgress: (progress: number) => void;
  onComplete: () => void;
}

const TOTAL_FRAMES = 150;

export default function ScrollyCanvas({ onProgress, onComplete }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);
  const currentFrameRef = useRef(0);

  // Pad frame index (e.g. 0 -> "000", 149 -> "149")
  const pad = (num: number) => String(num).padStart(3, "0");
  const getFramePath = (index: number) => `/sequence/frame_${pad(index)}_delay-0.066s.png`;

  // Draw image helper
  const drawImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to window size if they don't match
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;

    // Compute object-fit: cover sizing
    const scale = Math.max(canvas.width / imgWidth, canvas.height / imgHeight);
    const x = (canvas.width - imgWidth * scale) / 2;
    const y = (canvas.height - imgHeight * scale) / 2;

    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
  };

  // Preload image sequence using concurrent sequential batch queueing
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = [];
    let isCancelled = false;

    const INITIAL_REQUIRED_FRAMES = 3; // Speed up visual lock screen
    const CONCURRENCY = 6;
    let nextIndex = 0;

    const handleCompleteLoad = () => {
      imagesRef.current = preloadedImages;
      setIsReady(true);
      onComplete();
      // Draw first frame
      const firstImg = preloadedImages[0];
      if (firstImg) {
        setTimeout(() => drawImage(firstImg), 100);
      }
    };

    const loadNext = () => {
      if (isCancelled || nextIndex >= TOTAL_FRAMES) return;

      const currentIndex = nextIndex++;
      const img = new Image();
      preloadedImages[currentIndex] = img;

      img.onload = () => {
        if (isCancelled) return;
        loadedCount++;
        
        // Calculate progress percentage relative to first required frames
        const percent = Math.min((loadedCount / INITIAL_REQUIRED_FRAMES) * 100, 100);
        onProgress(percent);

        if (loadedCount === INITIAL_REQUIRED_FRAMES) {
          handleCompleteLoad();
        }

        // Keep loading background sequence
        loadNext();
      };

      img.onerror = (e) => {
        if (isCancelled) return;
        console.error(`Failed to load frame: ${currentIndex}`, e);
        loadedCount++;
        
        const percent = Math.min((loadedCount / INITIAL_REQUIRED_FRAMES) * 100, 100);
        onProgress(percent);

        if (loadedCount === INITIAL_REQUIRED_FRAMES) {
          handleCompleteLoad();
        }

        loadNext();
      };

      img.src = getFramePath(currentIndex);
    };

    // Spin up concurrency slots
    for (let i = 0; i < CONCURRENCY; i++) {
      loadNext();
    }

    // Clean up
    return () => {
      isCancelled = true;
      preloadedImages.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Map scroll progress to frame index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Redraw frame on scroll change with fallback search for nearest loaded frame
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isReady || imagesRef.current.length === 0) return;
    const roundedIndex = Math.round(latest);
    
    if (roundedIndex === currentFrameRef.current) return;
    currentFrameRef.current = roundedIndex;

    const img = imagesRef.current[roundedIndex];
    
    // If exact frame is fully loaded, draw it immediately
    if (img && (img.complete || img.naturalWidth > 0)) {
      requestAnimationFrame(() => drawImage(img));
    } else {
      // Find nearest loaded frame index to prevent flashing / blank screens
      let nearestImg = null;
      
      // Search backwards first
      for (let i = roundedIndex - 1; i >= 0; i--) {
        const tempImg = imagesRef.current[i];
        if (tempImg && (tempImg.complete || tempImg.naturalWidth > 0)) {
          nearestImg = tempImg;
          break;
        }
      }
      
      // If not found, search forwards
      if (!nearestImg) {
        for (let i = roundedIndex + 1; i < TOTAL_FRAMES; i++) {
          const tempImg = imagesRef.current[i];
          if (tempImg && (tempImg.complete || tempImg.naturalWidth > 0)) {
            nearestImg = tempImg;
            break;
          }
        }
      }

      if (nearestImg) {
        requestAnimationFrame(() => drawImage(nearestImg));
      }
    }
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!isReady || imagesRef.current.length === 0) return;
      const currentImg = imagesRef.current[currentFrameRef.current];
      if (currentImg) {
        drawImage(currentImg);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady]);

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-[#030303]">
      {/* Sticky screen container */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block bg-black"
        />

        {/* Sleek overlays to increase contrast and premium aesthetic */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#030303] pointer-events-none" />
        
        {/* Decorative interface lines */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-[10px] text-zinc-500 font-mono tracking-widest pointer-events-none mix-blend-difference">
          <span />
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            LIVE SCRUB ACTIVE
          </span>
        </div>

        {/* Render text overlay linked directly to the local scroll progress */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
