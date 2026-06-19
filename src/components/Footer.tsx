"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to developer timezone (e.g. GMT+5:30)
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short",
        timeZone: "Asia/Kolkata",
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030303] text-white border-t border-zinc-900 py-24 px-6 md:px-12 lg:px-24 z-20 overflow-hidden font-sans">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-zinc-950 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-zinc-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Contact CTA */}
        <div className="space-y-6">
          <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none text-zinc-300">
            LET&apos;S CONSTRUCT <br />
            SOMETHING AMAZING
          </h2>
          <a
            href="mailto:ayshafidhap.mec@gmail.com"
            className="inline-block text-xl md:text-3xl font-light hover:text-zinc-400 transition-colors font-mono underline underline-offset-8 decoration-1 decoration-zinc-700 hover:decoration-white"
          >
            ayshafidhap.mec@gmail.com
          </a>
        </div>

        {/* Lower footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-zinc-900/60">
          
          {/* Info column */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
              STATUS
            </span>
            <p className="text-sm font-light text-zinc-400">
              Currently seeking game development roles where I can contribute to engine optimization, gameplay programming, or graphics systems.
            </p>
          </div>

          {/* Timezone column */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
              LOCAL TIME
            </span>
            <p className="text-sm font-mono text-zinc-300 tracking-wider">
              {time || "13:20:56 GMT+5:30"}
            </p>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
              CHANNELS
            </span>
            <div className="flex gap-4 animate-pulse">
              <a href="https://github.com/Aysha1313" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/aysha-fidha-p-a627b5291/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.instagram.com/ays.hhaf?igsh=OTJuYnFkZHZmamxv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="mailto:ayshafidhap.mec@gmail.com" className="text-zinc-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Back to top */}
          <div className="flex items-end justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-white transition-colors border border-zinc-800 rounded px-4 py-2 hover:border-zinc-500 uppercase"
            >
              Back to top
              <ArrowUp size={14} className="animate-bounce" />
            </button>
          </div>

        </div>

        {/* Bottom meta */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-mono pt-8 border-t border-zinc-950">
          <span>© 2026 AYSHA FIDHA P. ALL RIGHTS RESERVED.</span>
          <span className="mt-2 md:mt-0 tracking-wider">
            CRAFTED WITH NEXT.JS 14 • CANVAS RENDERER • FRAMER MOTION
          </span>
        </div>
      </div>
    </footer>
  );
}
