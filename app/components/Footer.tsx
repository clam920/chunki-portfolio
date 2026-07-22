import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-slate-950 border-t border-white/5 text-center">
      <p className="text-slate-500 text-sm">
        Built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors">Next.js</a>
        {" "}&amp; Tailwind CSS · Designed &amp; developed by{" "}
        <span className="text-white font-medium">{siteConfig.name}</span>
      </p>
    </footer>
  );
}
