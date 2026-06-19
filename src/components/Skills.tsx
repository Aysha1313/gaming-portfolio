"use client";

import { motion } from "framer-motion";
import { Gamepad2, Cpu, Layout, Database } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Game Engines & Frameworks",
    icon: Gamepad2,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: [
      "Unity",
      "Unreal Engine",
      "Godot",
      "Custom C# Engines",
      "DirectX & OpenGL",
      "WebGL & WebGPU",
      "Real-Time Rendering",
    ],
  },
  {
    title: "Systems Programming",
    icon: Cpu,
    color: "from-green-500/20 to-emerald-500/20",
    skills: [
      "C++",
      "C# (C-Sharp)",
      "Rust",
      "Memory Management",
      "Multi-threading",
      "Data-Oriented Design",
      "ECS Architecture",
    ],
  },
  {
    title: "Graphics & Gameplay",
    icon: Layout,
    color: "from-purple-500/20 to-pink-500/20",
    skills: [
      "HLSL / GLSL Shaders",
      "URP & HDRP Pipelines",
      "Real-Time Physics",
      "Linear Algebra",
      "Gameplay Programming",
      "Minimax Search",
      "Alpha-Beta Pruning",
    ],
  },
  {
    title: "Tools & Tech Stack",
    icon: Database,
    color: "from-orange-500/20 to-amber-500/20",
    skills: [
      "Git & GitHub",
      "CMake",
      "Unity Netcode",
      "Mirror (Multiplayer)",
      "RenderDoc (Profiling)",
      "Visual Studio",
      "Docker & Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#030303] text-white py-32 px-6 md:px-12 lg:px-24 z-20"
    >
      {/* Visual boundary line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-zinc-950/40 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-zinc-950/40 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <span className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase font-display">
            SKILLS &amp; TECH STACK
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm font-light leading-relaxed font-sans">
            A scannable overview of my technical toolkit, structured by specialization, and designed for enterprise-level scaling.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/20 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 overflow-hidden min-h-[380px]"
              >
                {/* Glowing Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none -z-10`} />

                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold tracking-wide uppercase text-white font-display">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono bg-zinc-950/80 border border-zinc-900 group-hover:border-zinc-800/80 rounded-md px-3 py-1.5 text-zinc-400 group-hover:text-zinc-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative baseline */}
                <div className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
