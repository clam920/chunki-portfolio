export const siteConfig = {
  name: "Chun Ki Lam",
  firstName: "Chun Ki",
  lastName: "Lam",
  title: "Full-Stack Software Engineer",
  email: "chunki.lam95@gmail.com",
  phone: "(604) 789 4482",
  location: "Vancouver, BC",
  openToWork: true,
  workPreference: "Open to new opportunities",
  roleTarget: "Full-Stack Engineer · AI/ML Engineer · Data Analyst · Backend Developer",
  github: "https://github.com/clam920",
  linkedin: "https://www.linkedin.com/in/chun-ki-lam-09131816b",
  // Used in Hero — punchy, one-liner
  bio: "Vancouver-based Full-Stack & AI Engineer blending extensive enterprise operations experience with deep technical expertise in machine learning pipelines, scalable backend architecture, and data analytics.",
  // Used in About — story + project experience
  aboutBio: "I came to software engineering after spending five years managing enterprise payroll and HR operations. That experience gave me a unique perspective: a ground-level understanding of how technology decisions actually impact businesses and the people running them. Since pivoting to tech and completing my engineering Co-op, my focus has been on bridging the gap between technical architecture and real-world utility. I thrive on diving into complex problems, writing clean code, and building practical, user-centered solutions that genuinely make an impact.",
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
  { name: "C",            category: "Languages" },
  { name: "C#",           category: "Languages" },
  { name: "PHP",          category: "Languages" },
  { name: "Dart",         category: "Languages" },
  { name: "Kotlin",       category: "Languages" },
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

export type ProjectFilter = "All" | "AI & ML" | "Full-Stack" | "Backend" | "Data Analytics";

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
  isReport?: boolean;
}[] = [
  {
    title: "QScript — AI Stock Research & Note-Taking App",
    description: "A Flutter-based mobile application that equips investors with live market data, company news, and AI-assisted sentiment analysis in a single workflow.",
    what: "Cross-platform mobile app featuring a personal watchlist, real-time quotes, and an integrated research library backed by local SQLite storage.",
    interesting: "Integrated a custom AI pipeline directly into the mobile experience, chaining a fine-tuned FinBERT model for sentiment classification with the Gemini API to generate deep contextual reasoning on financial news.",
    result: "Successfully published the completed functional mobile application to a portfolio repository, showcasing robust state management and seamless third-party financial API integrations.",
    tags: ["Flutter", "Dart", "FinBERT", "NLP","Gemini API", "SQLite", "REST APIs"],
    filters: ["All", "Full-Stack", "AI & ML"],
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
    result: "Delivered a fully functional platform to an industrial client, demonstrating strong stakeholder management, Agile development practices, and complex defect resolution.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
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
    interesting: "Engineered and trained a custom TensorFlow CNN from scratch on visual waste data, integrating the inference engine into a responsive web frontend backed by MongoDB.",
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

  // ── REPORTS ─────────────────────────────────────────
  {
    title: "Credit Classification Model",
    description: "Logistic Regression classifier for credit risk prediction — optimised through feature selection, feature engineering, and SMOTE oversampling to handle class imbalance in the target variable.",
    what: "Built a Logistic Regression model to classify credit risk on an imbalanced dataset, performing full EDA including distribution analysis, correlation heatmaps, and target balance checks.",
    interesting: "Applied SMOTE to oversample the minority class in the target variable, then used feature selection and feature engineering to improve model signal — a realistic approach to the class imbalance problem common in real-world credit data.",
    result: "Delivered a documented classification pipeline with before/after SMOTE comparison and evaluation across accuracy, precision, recall, and F1-score.",
    tags: ["Python", "Scikit-Learn", "Logistic Regression", "SMOTE", "Feature Engineering", "Pandas"],
    filters: ["All", "AI & ML", "Data Analytics"],
    github: "",
    demo: "https://docs.google.com/document/d/1H2UCSl7UzGDXL-yziT-Qr_9ylgvyFOPY/edit?usp=sharing",
    linkLabel: "",
    demoLabel: "View Report",
    featured: false,
    accent: "from-emerald-600 to-teal-700",
    isReport: true,
  },
  {
    title: "Bankruptcy Prediction Model",
    description: "ANN-based bankruptcy classifier built with Skorch and PyTorch — bringing deep learning into a high-stakes financial risk prediction problem.",
    what: "Implemented an Artificial Neural Network using Skorch (a Scikit-Learn wrapper for PyTorch) to predict company bankruptcy from financial indicators.",
    interesting: "Used Skorch to bridge PyTorch's flexibility with Scikit-Learn's pipeline API — enabling clean model training, cross-validation, and hyperparameter tuning on a neural network in a familiar ML workflow.",
    result: "Demonstrated the ability to apply deep learning tooling (PyTorch/Skorch) to a structured tabular problem, going beyond standard Scikit-Learn classifiers.",
    tags: ["Python", "PyTorch", "Skorch", "ANN", "Classification", "Pandas"],
    filters: ["All", "AI & ML", "Data Analytics"],
    github: "",
    demo: "https://docs.google.com/document/d/1Y4mArSnSySMJXCWxzZSivkL4TpE-ghs1/edit?usp=sharing",
    linkLabel: "",
    demoLabel: "View Report",
    featured: true,
    accent: "from-teal-600 to-cyan-600",
    isReport: true,
  },
  {
    title: "Airbnb Price Prediction Model",
    description: "Linear Regression model for Airbnb price prediction — focused on extracting signal through iterative feature selection and feature engineering rather than model complexity.",
    what: "Built a Linear Regression model to predict nightly Airbnb listing prices, with full EDA covering continuous and discrete variable distributions, correlation analysis, and outlier treatment.",
    interesting: "The core challenge was improving a simple baseline model through systematic feature selection and feature engineering — demonstrating that thoughtful data preparation often matters more than choosing a fancier algorithm.",
    result: "Produced a clean regression pipeline with documented feature decisions, residual analysis, and model evaluation grounded in practical pricing context.",
    tags: ["Python", "Scikit-Learn", "Linear Regression", "Feature Engineering", "EDA", "Pandas"],
    filters: ["All", "AI & ML", "Data Analytics"],
    github: "",
    demo: "https://docs.google.com/document/d/1nAixfTRJ6NxZKWrNUD-AHPCAhSdl_QVZ/edit?usp=sharing",
    linkLabel: "",
    demoLabel: "View Report",
    featured: false,
    accent: "from-green-600 to-emerald-700",
    isReport: true,
  },
  {
    title: "Weather Temperature Forecast Model",
    description: "Compared Time Series models vs Regression models for temperature forecasting at two horizons — next hour and next 24 hours.",
    what: "Built and compared two modelling approaches to forecast temperature: a Time Series model (suited to sequential data) and a Regression model (treating each timestep independently), evaluated at both 1-hour and 24-hour prediction horizons.",
    interesting: "The dual-horizon setup surfaced how model performance degrades differently over time — short-horizon forecasts favoured different approaches than longer-horizon ones, highlighting real trade-offs between Time Series and Regression methods.",
    result: "Delivered a structured comparison of Time Series vs Regression forecasting with documented methodology and evaluation results across both prediction horizons.",
    tags: ["Python", "Scikit-Learn", "Time Series", "Regression", "Forecasting", "Pandas"],
    filters: ["All", "AI & ML", "Data Analytics"],
    github: "",
    demo: "https://docs.google.com/document/d/1fWnbr_QWa8zBuv4CdC8l72Rjsi4O_U-U/edit?usp=sharing",
    linkLabel: "",
    demoLabel: "View Report",
    featured: false,
    accent: "from-teal-500 to-green-600",
    isReport: true,
  },
  {
    title: "Battery Health Prediction Model",
    description: "Ensemble regression methods for battery health prediction — systematically comparing Bagging, Boosting, and Stacking to find the best approach for degradation forecasting.",
    what: "Applied multiple Ensemble regression techniques (Bagging, Boosting, Stacking) to predict battery health from cycle and sensor data, with full EDA covering feature distributions and feature-target relationships.",
    interesting: "The focus was on practising and comparing different Ensemble strategies — Bagging reduces variance, Boosting reduces bias, and Stacking combines both — giving a hands-on understanding of when each method works best.",
    result: "Produced a comparative Ensemble model evaluation with documented results across methods, applicable to predictive maintenance and battery management systems.",
    tags: ["Python", "Scikit-Learn", "Ensemble Methods", "Bagging", "Boosting", "Stacking", "Pandas"],
    filters: ["All", "AI & ML", "Data Analytics"],
    github: "",
    demo: "https://docs.google.com/document/d/16jO8I7A3-LZM9IxBx4juRk4gDxrqH2Eh/edit?usp=sharing",
    linkLabel: "",
    demoLabel: "View Report",
    featured: false,
    accent: "from-cyan-600 to-teal-600",
    isReport: true,
  },
];

export const experience: Array<{
  role: string;
  company: string;
  period: string;
  bullets: string[];
}> = [];

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
