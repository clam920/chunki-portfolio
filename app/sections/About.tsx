import { siteConfig, education, award } from "@/lib/data";
import FadeIn from "@/app/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 section-pattern"
      style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border-strong)" }}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-heading)" }}>About Me</h2>
          <div className="w-12 h-1 rounded mb-12 bg-gradient-to-r from-emerald-500 to-teal-500" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — story bio + resume */}
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-body)" }}>
              {siteConfig.aboutBio}
            </p>
            <p className="text-sm leading-relaxed mt-8 p-4 rounded-lg"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}>
              💬 Interested in working together?{" "}
              <a href="#contact"
                className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{ color: "var(--accent)" }}>
                Get in touch
              </a>{" "}
              and I&apos;ll send over my resume.
            </p>
          </FadeIn>

          {/* Right — Education + Award */}
          <FadeIn delay={200}>
            <h3 className="text-lg font-semibold mb-6" style={{ color: "var(--text-heading)" }}>Education</h3>
            <div className="flex flex-col gap-6 mb-6">
              {education.map((edu) => (
                <div key={edu.degree} className="pl-4 border-l-2" style={{ borderColor: "var(--accent)" }}>
                  <p className="font-semibold" style={{ color: "var(--text-heading)" }}>{edu.degree}</p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{edu.school}</p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent)" }}>{edu.period}</p>
                  {edu.note && <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{edu.note}</p>}
                </div>
              ))}
            </div>

            {/* Award card */}
            <div className="rounded-xl p-4 flex gap-3 items-start"
              style={{
                background: "var(--accent-light)",
                border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
              }}>
              <span className="text-2xl shrink-0 mt-0.5">🏆</span>
              <div>
                <p className="font-bold text-sm" style={{ color: "var(--accent-text)" }}>{award.title}</p>
                <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--accent)" }}>{award.subtitle}</p>
                <p className="text-xs leading-relaxed mt-1.5" style={{ color: "var(--text-body)" }}>{award.description}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>— {award.issuer}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
