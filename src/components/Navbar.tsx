"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md py-4 border-b border-zinc-900"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Name Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-lg font-bold tracking-widest text-white hover:text-zinc-300 transition-colors uppercase font-display"
        >
          AYSHA FIDHA P.
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-zinc-400 hover:text-white transition-colors relative py-1 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="text-zinc-400 hover:text-white transition-colors relative py-1 group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="text-zinc-400 hover:text-white transition-colors relative py-1 group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-zinc-400 hover:text-white transition-colors relative py-1 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="hidden md:block">
          <a
            href="/AYSHA FIDHA P - Resume.pdf"
            download="AYSHA_FIDHA_P_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded bg-zinc-950/60 hover:bg-white hover:text-black hover:border-white text-zinc-300 text-xs font-mono tracking-wider transition-all duration-300 group uppercase"
          >
            <span>Resume</span>
            <ArrowDownToLine size={13} className="group-hover:translate-y-[1px] transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="/AYSHA FIDHA P - Resume.pdf"
            download="AYSHA_FIDHA_P_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-800 rounded bg-zinc-950/40 text-zinc-300 text-xs font-mono transition-all duration-300"
            aria-label="Download Resume"
          >
            <span>CV</span>
            <ArrowDownToLine size={12} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-900/60 rounded transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[65px] bg-[#050505]/95 border-b border-zinc-900 backdrop-blur-lg transition-all duration-500 overflow-hidden md:hidden z-30 ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4 text-sm font-mono">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-zinc-400 hover:text-white py-1 transition-colors"
          >
            &gt; About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="text-zinc-400 hover:text-white py-1 transition-colors"
          >
            &gt; Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="text-zinc-400 hover:text-white py-1 transition-colors"
          >
            &gt; Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-zinc-400 hover:text-white py-1 transition-colors"
          >
            &gt; Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
