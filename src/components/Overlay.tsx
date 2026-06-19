"use client";
import { motion, useTransform, MotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Hero section transitions: visible at start, fades out as user scrolls past 50%
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.95], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, 0.93]);
  const y = useTransform(scrollYProgress, [0, 0.95], [0, -40]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Viewport content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Main Hero Header */}
        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-4xl space-y-6 flex flex-col items-center"
        >
          {/* Subtle tag */}
          <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-zinc-400 uppercase bg-zinc-900/40 border border-zinc-800 px-3 py-1 rounded-full">
            Seeking Game Developer / Systems Roles
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white uppercase select-none font-display">
            AYSHA FIDHA P.
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium tracking-wide text-zinc-300 font-sans">
            Game Developer &amp; Systems Engineer
          </h2>
          
          <p className="text-sm md:text-base font-light leading-relaxed text-zinc-400 max-w-xl mx-auto font-sans">
            Building high-performance game engines, rendering pipelines, and gameplay systems. Extensive experience with C# game engine architecture, real-time graphics optimization, and open-source game engine development.
          </p>
        </motion.div>

        {/* Scroll indicator - only visible at the very top */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.15], [0, 20])
          }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500 font-mono text-[9px] tracking-[0.3em]"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
        </motion.div>

      </div>
    </div>
  );
}

