import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Chun Ki Lam — Full-Stack Software Engineer",
  description:
    "Portfolio of Chun Ki Lam, a full-stack software engineer specialising in AI-powered applications, backend APIs, and cloud infrastructure based in Vancouver, BC.",
  keywords: ["software engineer", "full stack", "Vancouver", "AI", "React", "Next.js", "Python"],
  authors: [{ name: "Chun Ki Lam" }],
  openGraph: {
    title: "Chun Ki Lam — Full-Stack Software Engineer",
    description: "Portfolio of Chun Ki Lam — full-stack engineer based in Vancouver, BC.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Prevents flash of wrong theme before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var stored = localStorage.getItem('theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (stored === 'dark' || (!stored && prefersDark)) {
                document.documentElement.classList.add('dark');
              }
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
