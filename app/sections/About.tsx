import { siteConfig, education } from "@/lib/data";
import FadeIn from "@/app/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn delay={100}>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">{siteConfig.bio}</p>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m currently completing a{" "}
              <span className="font-semibold text-slate-800">Diploma in Computer Systems Technology</span>{" "}
              at BCIT (graduating May 2026) with a 94% GPA, specialising in Predictive Analytics.
              Before transitioning into software engineering, I spent several years in payroll and HR
              operations — giving me a practical understanding of how technology creates real-world
              impact for businesses and people.
            </p>
            <a href="/resume.pdf"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-sm hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md shadow-emerald-100">
              Download Resume ↓
            </a>
          </FadeIn>

          <FadeIn delay={200}>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Education</h3>
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div key={edu.degree} className="pl-4 border-l-2 border-emerald-500">
                  <p className="font-semibold text-slate-800">{edu.degree}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{edu.school}</p>
                  <p className="text-emerald-600 text-sm font-medium mt-0.5">{edu.period}</p>
                  {edu.note && <p className="text-slate-400 text-xs mt-1">{edu.note}</p>}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
