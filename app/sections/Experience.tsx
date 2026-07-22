import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Experience</h2>
        <div className="w-12 h-1 bg-blue-700 rounded mb-12" />

        <div className="flex flex-col gap-0">
          {experience.map((job, idx) => (
            <div key={job.role} className="relative pl-8">
              {/* Timeline line */}
              {idx < experience.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-slate-200" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-blue-700 bg-white" />

              <div className="pb-12">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-bold text-slate-900 text-lg">{job.role}</h3>
                  <span className="text-slate-500 text-sm">@ {job.company}</span>
                </div>
                <p className="text-blue-700 text-sm font-medium mb-4">{job.period}</p>
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                      <span className="text-blue-700 mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
