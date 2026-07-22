import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
