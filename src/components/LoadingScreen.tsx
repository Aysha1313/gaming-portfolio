"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  progress: number;
  isComplete: boolean;
}

export default function LoadingScreen({ progress, isComplete }: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isComplete) {
      // Allow fade out animation to finish before unmounting
      const timer = setTimeout(() => setShouldRender(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303] text-white select-none"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-start font-mono">
            {/* Creative details */}
            <div className="flex items-center space-x-2 text-zinc-500 text-xs mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>System: Ready</span>
              <span>•</span>
              <span>Sequence: 150 Frames</span>
            </div>

            {/* Title / Status */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-medium text-zinc-200 tracking-wider mb-2"
            >
              PRELOADING CORE INTERACTION
            </motion.h1>
            
            <p className="text-xs text-zinc-500 tracking-wide mb-6 uppercase">
              Buffering image frames for fluid scrolly scrub...
            </p>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-zinc-900 overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-white origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>

            {/* Progress metrics */}
            <div className="w-full flex justify-between items-baseline text-xs text-zinc-400">
              <span className="animate-pulse">LOADING_ENGINE_COORDINATES</span>
              <motion.span className="text-xl font-semibold text-white tracking-widest font-sans">
                {Math.round(progress)}%
              </motion.span>
            </div>
            
            {/* Terminal log logs */}
            <div className="mt-8 text-[10px] text-zinc-600 space-y-1 h-12 overflow-hidden w-full">
              {progress > 10 && <p>&gt; ESTABLISHING SCROLL TRIGGER ANCHORS</p>}
              {progress > 35 && <p>&gt; RENDERING INTERACTIVE CANVAS FRAMEBUFFER</p>}
              {progress > 70 && <p>&gt; INITIALIZING FRAMER MOTION TRANSFORMS</p>}
              {progress > 95 && <p>&gt; COMPLETED PRELOAD. PREPARING PORTFOLIO...</p>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
