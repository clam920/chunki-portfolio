import { siteConfig } from "@/lib/data";
import FadeIn from "@/app/components/FadeIn";

import { MdSend } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 section-stripe"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border-strong)" }}>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-heading)" }}>Get In Touch</h2>
          <div className="w-12 h-1 rounded mb-6 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border"
            style={{ background: "var(--accent-light)", borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)", color: "var(--accent-text)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            {siteConfig.location} · {siteConfig.workPreference}
          </div>

          <p className="leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>
            I&apos;m actively looking for full-stack, backend, or AI/ML engineering roles.
            If you&apos;re hiring or just want to talk shop, my inbox is open.
          </p>

          <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
            Target roles:{" "}
            <span className="font-medium" style={{ color: "var(--accent)" }}>{siteConfig.roleTarget}</span>
          </p>

          <a href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-lg font-semibold text-lg transition-all shadow-lg mb-12 hover:opacity-90"
            style={{ background: "linear-gradient(to right, var(--accent), #0d9488)" }}>
            Say Hello <MdSend className="text-xl" />
          </a>

          <div className="flex justify-center gap-8 text-sm">
            {[
              { label: "GitHub",   href: siteConfig.github },
              { label: "LinkedIn", href: siteConfig.linkedin },
              { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: "var(--text-muted)" }}>
                {label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
