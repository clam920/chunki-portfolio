export const siteConfig = {
  name: "Chun Ki Lam",
  firstName: "Chun Ki",
  lastName: "Lam",
  title: "Full-Stack Software Engineer",
  email: "chunki.lam95@gmail.com",
  phone: "(604) 789 4482",
  location: "Vancouver, BC",
  github: "https://github.com/clam920",
  linkedin: "https://www.linkedin.com/in/chun-ki-lam-09131816b",
  bio: "Full-stack software engineer with experience in AI-powered applications, backend APIs, and cloud infrastructure. I build production-ready systems and enjoy working at the intersection of machine learning and software engineering.",
};

export type SkillCategory = "Languages" | "Frameworks" | "AI & ML" | "DevOps & Cloud" | "Databases";

// ─────────────────────────────────────────────────────────────
// ADD SKILLS HERE — just name + category, no icon lookup needed
// The icon is resolved automatically from the name.
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
  tags: string[];
  filters: ProjectFilter[];
  github: string;
  demo: string;
  featured: boolean;
  accent: string;
}[] = [
  {
    title: "AI Financial Market Sentiment Analyzer",
    description:
      "Full-stack financial app with a fine-tuned HuggingFace Transformer (PyTorch) for sentiment analysis. Features a dual-AI agentic pipeline via the Gemini API for contextual analytics, served through FastAPI and deployed on DigitalOcean.",
    tags: ["Python", "PyTorch", "FastAPI", "HuggingFace", "Gemini API", "DigitalOcean"],
    filters: ["All", "AI & ML", "Full-Stack"],
    github: "https://github.com/clam920/QScript",
    demo: "",
    featured: true,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Gigsup — AI Career Intelligence Platform",
    description:
      "Backend API microservices in Python for an AI-powered career platform. Built multi-step agentic workflows and trained Scikit-Learn models to deliver targeted career pathway recommendations.",
    tags: ["Python", "Scikit-Learn", "FastAPI", "Machine Learning"],
    filters: ["All", "AI & ML", "Backend"],
    github: "",
    demo: "",
    featured: true,
    accent: "from-teal-500 to-cyan-500",
  },
  {
    title: "MyLivingCity",
    description:
      "Full-stack community platform built with React and Node.js for an industrial client stakeholder. Resolved complex application defects and improved overall data flow.",
    tags: ["React", "Node.js", "TypeScript"],
    filters: ["All", "Full-Stack"],
    github: "https://github.com/MyLivingCity/my-living-city",
    demo: "",
    featured: true,
    accent: "from-green-500 to-emerald-600",
  },
  {
    title: "Bin-ary",
    description:
      "Web-based waste classification app built in an Agile team, integrating a custom TensorFlow CNN with MongoDB for image-based classification.",
    tags: ["TensorFlow", "MongoDB", "Python"],
    filters: ["All", "AI & ML", "Full-Stack"],
    github: "https://github.com/clam920/Binary",
    demo: "",
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
