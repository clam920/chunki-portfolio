import { siteConfig } from "@/lib/data";
import TypingText from "@/app/components/TypingText";

export default function Hero() {
  return (
    <section id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{ background: "var(--bg-base)" }}>

      {/* ── AURORA ORBS ── */}

      {/* Orb 1 — large emerald, top-right */}
      <div className="aurora-orb-1 absolute pointer-events-none"
        style={{
          top: "-5%", right: "2%",
          width: "650px", height: "650px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-1) 0%, transparent 65%)",
          filter: "blur(32px)",
        }} />

      {/* Orb 2 — teal, bottom-left */}
      <div className="aurora-orb-2 absolute pointer-events-none"
        style={{
          bottom: "-8%", left: "-8%",
          width: "580px", height: "580px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-2) 0%, transparent 65%)",
          filter: "blur(36px)",
        }} />

      {/* Orb 3 — mid-left */}
      <div className="aurora-orb-3 absolute pointer-events-none"
        style={{
          top: "25%", left: "5%",
          width: "380px", height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-3) 0%, transparent 65%)",
          filter: "blur(28px)",
        }} />

      {/* Orb 4 — centre-right */}
      <div className="aurora-orb-4 absolute pointer-events-none"
        style={{
          top: "50%", right: "15%",
          width: "320px", height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-4) 0%, transparent 65%)",
          filter: "blur(24px)",
        }} />

      {/* Subtle dot pattern on top */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--text-body) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

      {/* Content */}
      <div className="relative max-w-3xl text-center z-10">

        {/* Open to work badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border"
          style={{
            background: "var(--accent-light)",
            borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
            color: "var(--accent-text)",
            backdropFilter: "blur(8px)",
          }}>
          <span className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
            style={{ background: "var(--accent)" }} />
          Open to Work · Vancouver, BC
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-tight"
          style={{ color: "var(--text-heading)" }}>
          {siteConfig.firstName}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
            {siteConfig.lastName}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: "var(--text-heading)", opacity: 0.8 }}>
          {siteConfig.title}
        </p>

        <p className="text-lg font-medium mb-8 min-h-[1.75rem]"
          style={{ color: "var(--accent)" }}>
          <TypingText phrases={[
            "Full-Stack Developer",
            "AI & ML Engineer",
            "Backend API Developer",
            "React & Next.js Developer",
          ]} />
        </p>

        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "var(--text-body)" }}>
          {siteConfig.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#about"
            className="px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-md hover:opacity-90"
            style={{ background: "linear-gradient(to right, var(--accent), #0d9488)" }}>
            About Me
          </a>
          <a href="#projects"
            className="px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-md hover:opacity-90"
            style={{ background: "linear-gradient(to right, var(--accent), #0d9488)" }}>
            View My Work
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold transition-all border hover:opacity-80"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--text-body)",
              background: "color-mix(in srgb, var(--bg-card) 80%, transparent)",
              backdropFilter: "blur(8px)",
            }}>
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--text-muted)" }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 animate-pulse"
          style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }} />
      </div>
    </section>
  );
}
