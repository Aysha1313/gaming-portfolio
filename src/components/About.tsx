"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code2, Gamepad2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#030303] text-white py-32 px-6 md:px-12 lg:px-24 z-20 overflow-hidden font-sans"
    >
      {/* Decorative vertical lines and boundary */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-zinc-950/40 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-zinc-950/40 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Profile Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-card p-3">
              {/* Photo wrapper */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/aysha_photo.png"
                  alt="Aysha Fidha P"
                  fill
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Ambient Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-700 opacity-0 group-hover:opacity-10 blur transition duration-500 -z-10" />
            </div>
          </motion.div>

          {/* About Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Who I Am
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase font-display">
                ABOUT ME
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 font-light text-base leading-relaxed font-sans">
              <p>
                My name is <strong className="text-white font-medium">AYSHA FIDHA P</strong>. I am a dedicated{" "}
                <strong className="text-white font-medium">Game Developer and Systems Engineer</strong> currently pursuing my{" "}
                B.Tech in Computer Science and Engineering at <strong className="text-white font-medium">Model Engineering College</strong>.
              </p>
              
              <p>
                I specialize in building high-performance game engines, rendering pipelines, and gameplay systems. I have extensive experience with C# game engine architecture, real-time graphics optimization, multiplayer networking, and open-source game engine development.
              </p>
              
              <p>
                Driven by code excellence and performance optimization, I contribute to industry-standard game engines and complex game systems. I am actively seeking{" "}
                <strong className="text-white font-medium">game development roles</strong> where I can contribute to engine optimization, gameplay programming, or graphics systems.
              </p>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 space-y-2 flex flex-col justify-start">
                <GraduationCap className="text-zinc-400 w-6 h-6" />
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase font-display">Education</h4>
                <p className="text-[11px] text-zinc-500 leading-normal font-mono">B.Tech CSE Student @ Model Engineering College</p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 space-y-2 flex flex-col justify-start">
                <Gamepad2 className="text-zinc-400 w-6 h-6" />
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase font-display">Game Engines</h4>
                <p className="text-[11px] text-zinc-500 leading-normal font-mono">C# &amp; C++ engines, real-time graphics, and custom pipelines</p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 space-y-2 flex flex-col justify-start">
                <Code2 className="text-zinc-400 w-6 h-6" />
                <h4 className="text-sm font-semibold text-white tracking-wide uppercase font-display">Systems</h4>
                <p className="text-[11px] text-zinc-500 leading-normal font-mono">Data-Oriented Design (ECS), multiplayer networking, and optimization</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
