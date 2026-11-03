import type { SkillCategory } from "@/types";

/**
 * Sourced from the resume's "Technical Skills" section, the experience bullets and
 * the stacks of the projects in projects.ts / freelance.ts. No proficiency levels by
 * design. Categories with no skills are hidden in the UI. Icon keys: see `SkillIcon`.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Development",
    description: "Interfaces for the web",
    skills: [
      { name: "React", icon: "react", note: "Primary UI library across every role." },
      { name: "Next.js", icon: "nextjs", note: "Fintech product at TurtleIQ-Labs, the Sanjivani Agarbatti site and this portfolio." },
      { name: "TypeScript", icon: "typescript", note: "Typed React applications." },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Material UI", icon: "mui", note: "Barne Farms storefront." },
      { name: "Framer Motion", icon: "framer" },
      { name: "Three.js", icon: "threejs", note: "3D incense scene on the Sanjivani site." },
      { name: "Chart.js", icon: "chartjs" },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    description: "APIs & services",
    skills: [
      { name: "Node.js", icon: "nodejs", note: "Products and enquiries API for Sanjivani Agarbatti." },
      { name: "Express", icon: "express" },
      { name: "REST APIs", icon: "api", note: "Axios interceptors and JWT-protected routes." },
      { name: "Python", icon: "python", note: "Web scraping pipeline at YouInSports." },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Development",
    description: "Native apps from one codebase",
    skills: [
      { name: "React Native", icon: "react", note: "YouInSports chess app with Stockfish integration." },
      { name: "Expo", icon: "expo" },
      { name: "NativeWind", icon: "tailwind" },
      { name: "Android", icon: "android" },
    ],
  },
  {
    id: "state",
    label: "State Management",
    description: "Predictable data flow",
    skills: [
      { name: "Redux Toolkit", icon: "redux", note: "Cart, auth and product filtering at Code Implants." },
      { name: "React Router", icon: "reactrouter" },
      { name: "Axios", icon: "api", note: "Interceptors that attach JWT tokens on protected routes." },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Data storage",
    skills: [{ name: "MongoDB", icon: "mongodb", note: "Mongoose models for products and enquiries." }],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    description: "Workflow & delivery",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
      { name: "Claude Code", icon: "claude" },
      { name: "Cursor", icon: "cursor" },
    ],
  },
];

export const visibleSkillCategories = skillCategories.filter((category) => category.skills.length > 0);
