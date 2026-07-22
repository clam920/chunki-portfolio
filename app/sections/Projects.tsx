"use client";

import { useState } from "react";
import { projects, ProjectFilter } from "@/lib/data";
import FadeIn from "@/app/components/FadeIn";

const filters: ProjectFilter[] = ["All", "AI & ML", "Full-Stack", "Backend"];

export default function Projects() {
  const [active, setActive] = useState<ProjectFilter>("All");

  const visible = projects.filter((p) => p.filters.includes(active));

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mb-8" />
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-200"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <div className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Accent gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg leading-snug pr-4">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 shrink-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-800 transition-colors text-sm font-medium">
                          GitHub ↗
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-700 transition-colors text-sm font-medium">
                          Demo ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-medium group-hover:border-blue-200 group-hover:text-blue-700 group-hover:bg-blue-50 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-400 py-16">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
