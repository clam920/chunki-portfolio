export const siteConfig = {
  name: "Chun Ki Lam",
  firstName: "Chun Ki",
  lastName: "Lam",
  title: "Full-Stack Software Engineer",
  email: "chunki.lam95@gmail.com",
  phone: "(604) 789 4482",
  location: "Vancouver, BC",
  openToWork: true,
  workPreference: "Open to full-time roles in Vancouver",
  roleTarget: "Full-Stack Engineer · AI/ML Engineer · Data Analyst · Backend Developer",
  github: "https://github.com/clam920",
  linkedin: "https://www.linkedin.com/in/chun-ki-lam-09131816b",
  // Used in Hero — punchy, one-liner
  bio: "Software developer based in Vancouver with hands-on experience building AI-powered applications, full-stack platforms, and backend APIs — ready to ship real work from day one.",
  // Used in About — story + project experience
  aboutBio: "I came to software engineering from a background in payroll and HR operations across Canada and Hong Kong — which gave me something most engineers don't have: a ground-level understanding of how technology decisions affect real businesses and the people running them. Since making the transition, I've built a financial sentiment analyzer powered by a fine-tuned HuggingFace Transformer, shipped production API microservices for a real client's AI career platform, and delivered a full-stack community platform for an industrial stakeholder. I bring both the technical depth and the business instinct to build software that actually matters.",
};

export const award = {
  title: "BCIT Computer Systems Academic Award",
  subtitle: "Predictive Analytics · Highest Average, Final Year",
  description: "Presented to the student who achieved the highest average in the final year of their program while maintaining a 100% course load.",
  issuer: "British Columbia Institute of Technology",
};

export type SkillCategory = "Languages" | "Frameworks" | "AI & ML" | "DevOps & Cloud" | "Databases";

// Top skills shown by default — keep this to 8–10 most relevant ones
export const topSkills = [
  "Python", "TypeScript", "React", "Node.js", "FastAPI",
  "PyTorch", "HuggingFace", "AWS", "PostgreSQL", "Docker",
];

// ─────────────────────────────────────────────────────────────
// Full skill list — shown when user expands "All Skills"
// Just add name + category, icon resolves automatically
// ─────────────────────────────────────────────────────────────
export const skills: { name: string; category: SkillCategory }[] = [
  // Languages
  { name: "Python",       category: "Languages" },
  { name: "TypeScript",   category: "Languages" },
  { name: "JavaScript",   category: "Languages" },
  { name: "Java",         category: "Languages" },
  { name: "C#",           category: "Languages" },
  { name: "PHP",          category: "Languages" },
  { name: "Dart",         category: "Languages" },
  // Frameworks
  { name: "React",        category: "Frameworks" },
  { name: "Next.js",      category: "Frameworks" },
  { name: "Node.js",      category: "Frameworks" },
  { name: "FastAPI",      category: "Frameworks" },
  { name: "Express",      category: "Frameworks" },
  { name: "Flutter",      category: "Frameworks" },
  // AI & ML
  { name: "PyTorch",      category: "AI & ML" },
  { name: "TensorFlow",   category: "AI & ML" },
  { name: "HuggingFace",  category: "AI & ML" },
  { name: "Scikit-Learn", category: "AI & ML" },
  { name: "Pandas",       category: "AI & ML" },
  { name: "PySpark",      category: "AI & ML" },
  { name: "LLM APIs",     category: "AI & ML" },
  // DevOps & Cloud
  { name: "AWS",          category: "DevOps & Cloud" },
  { name: "Docker",       category: "DevOps & Cloud" },
  { name: "Azure DevOps", category: "DevOps & Cloud" },
  { name: "Git",          category: "DevOps & Cloud" },
  { name: "JIRA",         category: "DevOps & Cloud" },
  // Databases
  { name: "PostgreSQL",   category: "Databases" },
  { name: "MySQL",        category: "Databases" },
  { name: "MongoDB",      category: "Databases" },
  { name: "Firebase",     category: "Databases" },
];

export type ProjectFilter = "All" | "AI & ML" | "Full-Stack" | "Backend";

export const projects: {
  title: string;
  description: string;
  what: string;
  interesting: string;
  result: string;
  tags: string[];
  filters: ProjectFilter[];
  github: string;
  demo: string;
  linkLabel: string;
  demoLabel: string;
  featured: boolean;
  accent: string;
}[] = [
  {
    title: "AI Financial Market Sentiment Analyzer",
    description: "A live financial dashboard that classifies market sentiment by fine-tuning a HuggingFace Transformer model on domain-specific data — the kind of end-to-end ML project that goes well beyond tutorial territory.",
    what: "Full-stack financial app that pulls live market data and surfaces AI-generated sentiment signals via an interactive dashboard.",
    interesting: "Fine-tuned a HuggingFace Transformer (PyTorch) for custom sentiment analysis, then orchestrated a dual-AI agentic pipeline with the Gemini API to generate contextual analytics — all served through a FastAPI backend.",
    result: "Deployed end-to-end on DigitalOcean with a fully managed MLOps pipeline, handling model serving and data reliability in production.",
    tags: ["Python", "PyTorch", "FastAPI", "HuggingFace", "Gemini API", "DigitalOcean"],
    filters: ["All", "AI & ML", "Full-Stack"],
    github: "https://github.com/clam920/QScript",
    demo: "",
    linkLabel: "GitHub",
    demoLabel: "Demo",
    featured: true,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Gigsup — AI Career Intelligence Platform",
    description: "Backend platform that uses ML to match job seekers with career pathways — built as a client project with real users and a production-grade API architecture.",
    what: "Python microservice backend for an AI-powered career intelligence product, built for a real client during a project practicum.",
    interesting: "Architected multi-step agentic workflows and trained Scikit-Learn classification models to analyse user profiles and surface targeted career pathway recommendations.",
    result: "Delivered a scalable API layer that the client could ship directly — not a demo, but production-ready code.",
    tags: ["Python", "Scikit-Learn", "FastAPI", "Machine Learning"],
    filters: ["All", "AI & ML", "Backend"],
    github: "",
    demo: "",
    linkLabel: "GitHub",
    demoLabel: "Demo",
    featured: true,
    accent: "from-teal-500 to-cyan-500",
  },
  {
    title: "MyLivingCity",
    description: "Full-stack community platform built for a real industrial client — a civic engagement app where residents can submit and track local improvement ideas.",
    what: "React + Node.js web platform that lets community members submit, vote on, and track local civic improvement proposals.",
    interesting: "Worked directly with the client stakeholder to scope features, then diagnosed and resolved deeply embedded data flow bugs across the full stack.",
    result: "Shipped a working platform to a real external client — collaborative, stakeholder-facing work rather than a solo side project.",
    tags: ["React", "Node.js", "TypeScript"],
    filters: ["All", "Full-Stack"],
    github: "https://github.com/MyLivingCity/my-living-city",
    demo: "",
    linkLabel: "GitHub",
    demoLabel: "Demo",
    featured: true,
    accent: "from-green-500 to-emerald-600",
  },
  {
    title: "Bin-ary",
    description: "Waste classification web app using a custom-trained TensorFlow CNN — point your camera at an item and it tells you which bin it goes in.",
    what: "Web app that classifies household waste into recycling categories using image recognition.",
    interesting: "Trained a custom TensorFlow CNN from scratch on waste image data, integrated it into a web frontend, and persisted classification history in MongoDB.",
    result: "Built in an Agile team over a single sprint — demonstrated ability to ship an ML-integrated product quickly under time constraints.",
    tags: ["TensorFlow", "MongoDB", "Python"],
    filters: ["All", "AI & ML", "Full-Stack"],
    github: "https://github.com/clam920/Binary",
    demo: "",
    linkLabel: "GitHub",
    demoLabel: "Demo",
    featured: false,
    accent: "from-teal-400 to-green-500",
  },
];

export const education = [
  {
    degree: "Computer Systems Technology (CGPA: 94%)",
    school: "British Columbia Institute of Technology",
    period: "Jan 2024 – May 2026",
    note: "Option: Predictive Analytics",
  },
  {
    degree: "Bachelor of Social Science in Psychology",
    school: "The Chinese University of Hong Kong",
    period: "Class of 2018",
    note: "",
  },
];
