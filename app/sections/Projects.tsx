"use client";

import { useState } from "react";
import { projects, ProjectFilter } from "@/lib/data";
import FadeIn from "@/app/components/FadeIn";

const filters: ProjectFilter[] = ["All", "AI & ML", "Full-Stack", "Backend"];

export default function Projects() {
  const [active, setActive] = useState<ProjectFilter>("All");
  const [animKey, setAnimKey] = useState(0);
  const [expanded, setExpanded] = useState<string | null>(null);

  const visible = projects.filter((p) => p.filters.includes(active));

  function handleFilter(f: ProjectFilter) {
    setActive(f);
    setAnimKey((k) => k + 1);
    setExpanded(null);
  }

  return (
    <section id="projects" className="relative py-24 px-6 section-pattern"
      style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border-strong)" }}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-heading)" }}>Projects</h2>
          <div className="w-12 h-1 rounded mb-8 bg-gradient-to-r from-emerald-500 to-teal-500" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button key={f} onClick={() => handleFilter(f)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={active === f ? {
                  background: "linear-gradient(to right, var(--accent), #0d9488)",
                  color: "white",
                  boxShadow: "0 2px 8px color-mix(in srgb, var(--accent) 30%, transparent)",
                } : {
                  background: "var(--bg-card)",
                  color: "var(--text-body)",
                  border: "1px solid var(--border-strong)",
                }}>
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div key={animKey} className="grid md:grid-cols-2 gap-6 items-start">
          {visible.map((project, i) => {
            const isOpen = expanded === project.title;
            return (
              <div key={project.title}
                className="filter-enter group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 self-start"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                  boxShadow: "0 2px 12px var(--shadow)",
                  animationDelay: `${i * 80}ms`,
                }}>
                <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg leading-snug pr-4" style={{ color: "var(--text-heading)" }}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="rounded-full px-3 py-1 text-xs font-semibold transition-colors hover:opacity-80"
                          style={{ background: "var(--accent-light)", color: "var(--accent-text)", border: "1px solid var(--border)" }}>
                          {project.linkLabel} ↗
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="rounded-full px-3 py-1 text-xs font-semibold transition-colors hover:opacity-80"
                          style={{ background: "var(--accent-light)", color: "var(--accent-text)", border: "1px solid var(--border)" }}>
                          {project.demoLabel} ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>
                    {project.description}
                  </p>

                  {isOpen && (
                    <div className="mb-4 flex flex-col gap-3 filter-enter">
                      {[
                        { label: "What it does",       text: project.what },
                        { label: "What's interesting", text: project.interesting },
                        { label: "Result",             text: project.result },
                      ].map(({ label, text }) => (
                        <div key={label} className="rounded-lg p-4"
                          style={{ background: "var(--bg-alt)", border: "1px solid var(--border-strong)" }}>
                          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--accent)" }}>{label}</p>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: "var(--accent-light)", color: "var(--accent-text)", border: "1px solid var(--border)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button onClick={() => setExpanded(isOpen ? null : project.title)}
                      aria-expanded={isOpen}
                      className="text-xs font-semibold transition-colors" style={{ color: "var(--accent)" }}>
                      {isOpen ? "▲ Show less" : "▼ See details"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="text-center py-16" style={{ color: "var(--text-muted)" }}>No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
