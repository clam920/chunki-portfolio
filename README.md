# Chun Ki Lam — Personal Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clam920/portfolio)

Live site: [your-domain.vercel.app](https://your-domain.vercel.app) <!-- update after deployment -->

---

## About

Personal portfolio site built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features a clean single-page layout with sections for projects, work experience, skills, and contact.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Fonts | Inter (Google Fonts) |
| Deployment | [Vercel](https://vercel.com/) |

## Project Structure

```
portfolio/
├── app/
│   ├── components/       # Reusable UI components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, About, Skills, Projects, Experience, Contact)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Home page
├── lib/
│   └── data.ts           # ✏️  All portfolio content lives here — edit this file
├── public/
│   └── resume.pdf        # Add your resume PDF here
├── .env.example          # Environment variable template
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

### 3. Set up environment variables

```bash
cp .env.example .env.local
# Edit .env.local with your values (if needed)
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation

**All content is in one file: [`lib/data.ts`](./lib/data.ts)**

Edit that file to update:
- Your name, bio, email, GitHub, LinkedIn
- Skills list
- Projects (title, description, tags, links)
- Work experience
- Education

No other files need to change for content updates.

**To add your resume:** drop a `resume.pdf` file into the `/public` folder.

## Deployment

This site deploys automatically to Vercel on every push to `main`.

### First-time setup

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — no configuration needed
4. Add your custom domain (optional) in Vercel project settings

### After that

```bash
git add .
git commit -m "update projects section"
git push
# Vercel auto-deploys within ~30 seconds
```

## Environment Variables

See [`.env.example`](./.env.example) for available variables.

> ⚠️ Never commit `.env.local` or any file containing real API keys. It is listed in `.gitignore`.

## License

MIT — feel free to fork and adapt for your own portfolio.

---

*Built by [Chun Ki Lam](https://github.com/clam920)*
