import { siteConfig } from "@/lib/data";
import FadeIn from "@/app/components/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-800">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded mb-6 mx-auto" />
          <p className="text-slate-300 leading-relaxed mb-10">
            I&apos;m currently open to new opportunities. Whether you have a role in mind,
            a project to collaborate on, or just want to say hi — my inbox is open.
          </p>

          <a href={`mailto:${siteConfig.email}`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-900/30 mb-12">
            Say Hello ✉️
          </a>

          <div className="flex justify-center gap-8 text-slate-400 text-sm">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors font-medium">GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors font-medium">LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`}
              className="hover:text-emerald-400 transition-colors font-medium">Email</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
