"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-slate-800/60 backdrop-blur-sm"
    }`}>
      {/* Scroll progress — green */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-100"
        style={{ width: `${progress}%` }} />

      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className={`font-bold text-lg tracking-tight transition-colors ${
          scrolled ? "text-slate-900 hover:text-emerald-700" : "text-white hover:text-emerald-300"
        }`}>
          {siteConfig.firstName}{" "}
          <span className={scrolled ? "text-emerald-600" : "text-emerald-400"}>{siteConfig.lastName}</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm font-medium transition-colors ${
                scrolled ? "text-slate-600 hover:text-emerald-700" : "text-slate-200 hover:text-white"
              }`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={`md:hidden transition-colors ${scrolled ? "text-slate-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-700 hover:text-emerald-700 transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
