"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import React from "react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);



interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "kido",
    category: "FLUTTER ENGINE / DYNAMIC MINIMAX",
    description: "Developed a card-play puzzle game for Windows desktop based on Bridge mechanics. Integrated Bo Haglund's C++ Double Dummy Solver (dds.dll) via Dart FFI, substituting a custom alpha-beta minimax search. Computes optimal gameplay branches dynamically, analyzes player choices against perfect-play lines, and validates custom puzzle scenarios.",
    tags: ["Flutter", "Dart", "C++ DDS", "Dart FFI", "Minimax Search", "Windows Desktop"],
    demoUrl: "",
    repoUrl: "https://github.com/Aysha1313/kido",
  },
  {
    id: "02",
    title: "OpenSAGE Engine",
    category: "C# OPEN-SOURCE ENGINE ARCHITECTURE",
    description: "Contributed core optimizations and features to OpenSAGE, a modern C# open-source reconstruction of the SAGE game engine. Designed and ported pathfinding structures (PathfindCell, PathfindCellInfo), optimized the INI parser's string allocation model to dramatically reduce runtime memory overhead, and enhanced software cursor rendering and weapon subsystem interactions.",
    tags: ["C#", "Game Engine", "Pathfinding", "Memory Optimization", "Systems Programming"],
    demoUrl: "",
    repoUrl: "https://github.com/Aysha1313/OpenSAGE",
  },
];

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030303] text-white py-32 px-6 md:px-12 lg:px-24 z-20">
      {/* Structural layout decorations */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Selected Portfolio Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm text-sm font-light leading-relaxed">
            A small collection of digital experiences built at the intersection of creative frontend design and core web engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              className="group relative rounded-2xl p-8 glass-card overflow-hidden cursor-default flex flex-col justify-between min-h-[380px]"
            >
              {/* Radial gradient hover light */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(500px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 255, 255, 0.04), transparent 80%)`,
                }}
              />
              
              {/* Card top details */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-600 tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
                    {project.id}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-white group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card bottom details */}
              <div className="space-y-6 pt-8">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] font-mono bg-zinc-950 border border-zinc-800/60 rounded px-2.5 py-1 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] bg-zinc-900 w-full" />

                {/* Interaction links */}
                <div className="flex justify-between items-center text-sm font-mono">
                  <div className="flex gap-4">
                    <a 
                      href={project.repoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors py-1 group/link"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors py-1"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                    >
                      <span>Watch Demo</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
