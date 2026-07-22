"use client";

import { useState, useEffect, useRef } from "react";
import { skills, SkillCategory } from "@/lib/data";
import { getSkillIcon } from "@/lib/icons";
import FadeIn from "@/app/components/FadeIn";

const filters: ("All" | SkillCategory)[] = [
  "All", "Languages", "Frameworks", "AI & ML", "DevOps & Cloud", "Databases",
];

export default function Skills() {
  const [active, setActive] = useState<"All" | SkillCategory>("All");
  const [animKey, setAnimKey] = useState(0);

  const visible = active === "All" ? skills : skills.filter((s) => s.category === active);

  function handleFilter(f: "All" | SkillCategory) {
    setActive(f);
    setAnimKey((k) => k + 1);
  }

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded mb-8" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button key={f} onClick={() => handleFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-100"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-emerald-700"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div key={animKey} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {visible.map((skill, i) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <div key={skill.name} className="filter-enter group flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 35}ms` }}>
                {Icon && (
                  <Icon className="text-emerald-600 text-xl shrink-0 group-hover:scale-110 transition-transform" />
                )}
                <span className="text-slate-700 text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
