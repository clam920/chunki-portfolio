# Chun Ki Lam — Personal Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clam920/portfolio)

Live site: [your-domain.vercel.app](https://your-domain.vercel.app)

---

## About

Personal portfolio site built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Single-page layout with animated sections, filterable skills and projects, and a scroll progress indicator.

The portfolio is intentionally focused on **projects and skills** — work experience is kept on the resume (linked via the About section).

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Deployment | [Vercel](https://vercel.com/) |

## Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, bio, and links to projects, contact, and GitHub |
| **About** | Short bio, education, and a resume download link |
| **Skills** | Filterable skill cards with auto-matched icons (All / Languages / Frameworks / AI & ML / DevOps & Cloud / Databases) |
| **Projects** | Filterable project cards with accent colours (All / AI & ML / Full-Stack / Backend) |
| **Contact** | Email link, GitHub, and LinkedIn |

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── FadeIn.tsx        # Scroll-triggered fade-in animation wrapper
│   │   ├── Navbar.tsx        # Fixed navbar with scroll progress bar
│   │   └── Footer.tsx        # Footer
│   ├── sections/
│   │   ├── Hero.tsx          # Landing section
│   │   ├── About.tsx         # Bio, education, resume link
│   │   ├── Skills.tsx        # Filterable skills grid
│   │   ├── Projects.tsx      # Filterable project cards
│   │   └── Contact.tsx       # Contact links
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout + SEO metadata
│   └── page.tsx              # Assembles all sections
├── lib/
│   ├── data.ts               # ✏️  All content lives here — edit this file
│   └── icons.ts              # Auto skill icon resolver (no manual lookup needed)
├── public/
│   └── resume.pdf            # ← Drop your resume PDF here
├── .env.example              # Environment variable template
└── .gitignore
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/clam920/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Updating Content

**All content is in one file: [`lib/data.ts`](./lib/data.ts)**

### Personal info, bio, links

```ts
export const siteConfig = {
  firstName: "Chun Ki",
  lastName: "Lam",
  email: "...",
  github: "...",
  linkedin: "...",
  bio: "...",
};
```

### Adding a skill

Just add a name and category — no icon research needed. The icon is resolved automatically:

```ts
{ name: "Redis", category: "Databases" },
```

If an icon exists for that skill name in `react-icons/si`, it appears automatically. If not, the card renders without one. See [`lib/icons.ts`](./lib/icons.ts) for the full mapping.

### Adding a project

```ts
{
  title: "My New Project",
  description: "What it does and the interesting technical decisions behind it.",
  tags: ["Next.js", "Python", "AWS"],
  filters: ["All", "Full-Stack"],   // controls which filter tabs show this card
  github: "https://github.com/clam920/my-project",
  demo: "https://my-project.vercel.app",
  featured: true,                   // true = large card, false = smaller card
  accent: "from-blue-500 to-indigo-500",  // gradient colour for the top bar
},
```

Available `filters` values: `"All"`, `"AI & ML"`, `"Full-Stack"`, `"Backend"`.

### Resume

Drop your resume PDF into `/public/resume.pdf`. The About section links to it automatically.

## Deployment

Deploys automatically to Vercel on every push to `main`.

### First-time setup

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — no configuration needed
4. (Optional) Add a custom domain in Vercel project settings

### Updating the live site

```bash
git add .
git commit -m "add new project"
git push
# Vercel auto-deploys within ~30 seconds
```

## Environment Variables

See [`.env.example`](./.env.example). No environment variables are required to run or deploy the site. The file is there as a template if you add features like a contact form or analytics later.

> ⚠️ Never commit `.env.local` — it is listed in `.gitignore`.

## License

MIT — feel free to fork and adapt for your own portfolio.

---

*Built by [Chun Ki Lam](https://github.com/clam920)*
