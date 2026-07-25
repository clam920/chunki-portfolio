"use client";

import { useState } from "react";
import { skills, topSkills, SkillCategory } from "@/lib/data";
import { getSkillIcon } from "@/lib/icons";
import FadeIn from "@/app/components/FadeIn";

const filters: ("All" | SkillCategory)[] = [
  "All", "Languages", "Frameworks", "AI & ML", "DevOps & Cloud", "Databases",
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<"All" | SkillCategory>("All");
  const [animKey, setAnimKey] = useState(0);

  function handleFilter(f: "All" | SkillCategory) {
    setActive(f);
    setShowAll(true);
    setAnimKey((k) => k + 1);
  }

  function handleToggleAll() {
    setShowAll((v) => !v);
    setActive("All");
    setAnimKey((k) => k + 1);
  }

  const displayed = showAll
    ? (active === "All" ? skills : skills.filter((s) => s.category === active))
    : skills.filter((s) => topSkills.includes(s.name));

  return (
    <section id="skills" className="relative py-24 px-6 section-stripe"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border-strong)" }}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-heading)" }}>Skills</h2>
          <div className="w-12 h-1 rounded mb-4 bg-gradient-to-r from-emerald-500 to-teal-500" />
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Core stack below —{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>Show all skills</span>{" "}
            to explore the full list by category.
          </p>
        </FadeIn>

        {showAll && (
          <FadeIn delay={60}>
            <div className="flex flex-wrap gap-2 mb-8">
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
        )}

        <div key={animKey} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
          {displayed.map((skill, i) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <div key={skill.name}
                className="filter-enter group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 cursor-default hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                  boxShadow: "0 1px 4px var(--shadow)",
                  animationDelay: `${i * 35}ms`,
                }}>
                {Icon && (
                  <Icon className="text-xl shrink-0 group-hover:scale-110 transition-transform"
                    style={{ color: "var(--accent)" }} />
                )}
                <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>{skill.name}</span>
              </div>
            );
          })}
        </div>

        <FadeIn delay={200}>
          <button onClick={handleToggleAll}
            className="text-sm font-semibold underline underline-offset-4 transition-colors"
            style={{ color: "var(--accent)" }}>
            {showAll ? "▲ Show fewer skills" : `▼ Show all ${skills.length} skills`}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
