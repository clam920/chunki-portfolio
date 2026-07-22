import * as Si from "react-icons/si";

// Maps common skill names → react-icons/si key (verified against installed version).
// Skills not listed here simply render without an icon — that's fine.
// To add a new mapping: find the key at https://react-icons.github.io/react-icons/icons/si/
const ICON_MAP: Partial<Record<string, keyof typeof Si>> = {
  // Languages
  python:          "SiPython",
  typescript:      "SiTypescript",
  javascript:      "SiJavascript",
  java:            "SiOpenjdk",
  php:             "SiPhp",
  dart:            "SiDart",
  kotlin:          "SiKotlin",
  rust:            "SiRust",
  go:              "SiGo",
  swift:           "SiSwift",
  ruby:            "SiRuby",
  // Frameworks
  react:           "SiReact",
  "next.js":       "SiNextdotjs",
  nextjs:          "SiNextdotjs",
  "node.js":       "SiNodedotjs",
  nodejs:          "SiNodedotjs",
  fastapi:         "SiFastapi",
  express:         "SiExpress",
  flutter:         "SiFlutter",
  django:          "SiDjango",
  flask:           "SiFlask",
  vue:             "SiVuedotjs",
  angular:         "SiAngular",
  svelte:          "SiSvelte",
  tailwind:        "SiTailwindcss",
  "tailwind css":  "SiTailwindcss",
  // AI & ML
  pytorch:         "SiPytorch",
  tensorflow:      "SiTensorflow",
  huggingface:     "SiHuggingface",
  "scikit-learn":  "SiScikitlearn",
  scikitlearn:     "SiScikitlearn",
  pandas:          "SiPandas",
  numpy:           "SiNumpy",
  // DevOps & Cloud
  docker:          "SiDocker",
  kubernetes:      "SiKubernetes",
  git:             "SiGit",
  github:          "SiGithub",
  gitlab:          "SiGitlab",
  jira:            "SiJira",
  vercel:          "SiVercel",
  // Databases
  postgresql:      "SiPostgresql",
  mysql:           "SiMysql",
  mongodb:         "SiMongodb",
  firebase:        "SiFirebase",
  redis:           "SiRedis",
  supabase:        "SiSupabase",
  sqlite:          "SiSqlite",
};

/** Returns a react-icons/si component for the given skill name, or null if none found. */
export function getSkillIcon(name: string): React.ElementType | null {
  const key = ICON_MAP[name.toLowerCase()];
  if (!key) return null;
  const icon = Si[key] as React.ElementType | undefined;
  return icon ?? null;
}
