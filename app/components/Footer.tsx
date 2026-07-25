import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-6 px-6 text-center" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Built with{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"
          className="font-medium transition-colors hover:opacity-80" style={{ color: "var(--accent)" }}>
          Next.js
        </a>
        {" "}&amp; Tailwind CSS · Designed &amp; developed by{" "}
        <span className="font-medium" style={{ color: "var(--text-body)" }}>{siteConfig.name}</span>
      </p>
    </footer>
  );
}
