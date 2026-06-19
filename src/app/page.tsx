"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lock scrolling until preloading is complete
    if (!isLoaded) {
      lenis.stop();
    } else {
      lenis.start();
      // Reset scroll position to top on reload to sync canvas
      window.scrollTo(0, 0);
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoaded]);

  return (
    <main className="relative w-full bg-[#030303]">
      {/* Frosted Sticky Navigation Bar */}
      <Navbar />

      {/* High-end buffering preloader */}
      <LoadingScreen progress={progress} isComplete={isLoaded} />
      
      {/* Sticky HTML5 Canvas image scroller (occupies 150vh, scroll-out transition) */}
      <div id="hero">
        <ScrollyCanvas
          onProgress={setProgress}
          onComplete={() => setIsLoaded(true)}
        />
      </div>
      
      {/* About Me Section */}
      <About />
      
      {/* Scannable Skills/Tech Stack Grid */}
      <Skills />
      
      {/* Works grid section */}
      <div id="projects">
        <Projects />
      </div>
      
      {/* Footer details */}
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}

