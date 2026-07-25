"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";
import { useTheme } from "@/app/components/ThemeProvider";

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
  const { theme, toggle } = useTheme();

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
      scrolled
        ? "bg-[var(--bg-base)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
        : "bg-[var(--bg-base)]/80 backdrop-blur-sm"
    }`}>
      {/* Scroll progress */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-100"
        style={{ width: `${progress}%` }} />

      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg tracking-tight text-[var(--text-heading)] hover:text-[var(--accent)] transition-colors">
          {siteConfig.firstName}{" "}
          <span style={{ color: "var(--accent)" }}>{siteConfig.lastName}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-[var(--text-body)] hover:text-[var(--accent)] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle switch */}
          <button onClick={toggle} aria-label="Toggle theme"
            className="relative flex items-center transition-all duration-300 shrink-0"
            style={{
              width: "52px", height: "28px",
              borderRadius: "999px",
              background: theme === "dark" ? "var(--accent)" : "var(--border-strong)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.15)",
            }}>
            {/* Sliding knob */}
            <span className="absolute flex items-center justify-center transition-all duration-300 text-xs"
              style={{
                width: "22px", height: "22px",
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                left: theme === "dark" ? "27px" : "3px",
              }}>
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme"
            className="relative flex items-center transition-all duration-300 shrink-0"
            style={{
              width: "44px", height: "24px",
              borderRadius: "999px",
              background: theme === "dark" ? "var(--accent)" : "var(--border-strong)",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.15)",
            }}>
            <span className="absolute flex items-center justify-center transition-all duration-300 text-[10px]"
              style={{
                width: "18px", height: "18px",
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                left: theme === "dark" ? "23px" : "3px",
              }}>
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>
          <button className="text-[var(--text-heading)]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--bg-base)]/95 backdrop-blur-md border-t border-[var(--border)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[var(--text-body)] hover:text-[var(--accent)] transition-colors font-medium"
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
