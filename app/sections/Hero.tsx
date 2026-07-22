import { siteConfig } from "@/lib/data";
import TypingText from "@/app/components/TypingText";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Soft green-to-slate gradient — not pure black */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900" />

      {/* Soft orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }} />
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2.4s" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative max-w-3xl text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities · Vancouver, BC
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {siteConfig.firstName}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            {siteConfig.lastName}
          </span>
        </h1>

        {/* Typing animation */}
        <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6 min-h-[2rem]">
          <TypingText phrases={[
            "Full-Stack Software Engineer",
            "AI & ML Enthusiast",
            "Backend API Developer",
            "Open to Work in Vancouver",
          ]} />
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {siteConfig.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-900/40">
            View My Work
          </a>
          <a href="#contact"
            className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
            Get In Touch
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
