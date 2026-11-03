/**
 * Content models for every portfolio section.
 * All content lives in `src/data/*` and is typed against these interfaces,
 * so components never hardcode professional information.
 */

/** Year-month string, e.g. "2025-05". */
export type YearMonth = `${number}-${string}`;

/** Two-stop accent used for generative covers and highlights. */
export type Accent = readonly [string, string];

export type SocialKind = "linkedin" | "github" | "email" | "resume" | "x" | "website";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
  /** Short handle shown next to the label, e.g. "@Soham-Kale". */
  handle: string;
}

export interface Principle {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  /** Designation shown in the hero. */
  role: string;
  /** One-line professional headline (used for SEO + hero eyebrow). */
  headline: string;
  /** H1 in the hero: what you do, in one line. */
  heroHeadline: string;
  shortIntro: string;
  location: string;
  /** IANA zone used for the live clock in the footer. */
  timeZone: string;
  availability: { open: boolean; label: string; detail: string };
  currently: { role: string; company: string };
  email: string;
  resumeUrl: string;
  about: {
    heading: string;
    statement: string;
    journey: string[];
    expertise: string[];
    approach: Principle[];
    interests: string[];
    collaboration: string;
    stats: Stat[];
  };
}

export interface ExperienceRole {
  title: string;
  employmentType: string;
  start: YearMonth;
  /** `null` means "Present". */
  end: YearMonth | null;
  /** One-line description of the role, shown above the bullets. */
  summary?: string;
  responsibilities: string[];
  contributions: string[];
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  location: string;
  workMode: "Remote" | "On-site" | "Hybrid";
  /** Roles at this company, most recent first. */
  roles: ExperienceRole[];
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  role: string;
  technologies: string[];
  /** Path under /public. When omitted a generative cover is rendered. */
  thumbnail?: string;
  /** Large hero image for the detail page. Falls back to `thumbnail`. */
  preview?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  details: ProjectSection[];
  featured: boolean;
  /** Sample entries render a visible "Sample" badge and must be replaced. */
  isSample: boolean;
  accent: Accent;
}

export interface FreelanceProject {
  id: string;
  client: string;
  title: string;
  overview: string;
  industry: string;
  year: string;
  /** Problem the client needed solved. */
  challenge: string;
  responsibilities: string[];
  deliverables: string[];
  technologies: string[];
  /** Paths under /public. When empty a framed generative preview is rendered. */
  screenshots: string[];
  liveUrl?: string;
  isSample: boolean;
  accent: Accent;
}

/** Icon keys resolved to components in `src/lib/icons.tsx`. */
export type SkillIcon =
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "python"
  | "redux"
  | "reactrouter"
  | "expo"
  | "tailwind"
  | "mui"
  | "chartjs"
  | "github"
  | "gitlab"
  | "postman"
  | "vercel"
  | "claude"
  | "cursor"
  | "nodejs"
  | "express"
  | "mongodb"
  | "postgresql"
  | "redis"
  | "framer"
  | "threejs"
  | "git"
  | "android"
  | "api"
  | "spark"
  | "generic";

export interface Skill {
  name: string;
  icon: SkillIcon;
  /** Factual note on where/how it was used. No proficiency scores. */
  note?: string;
  usedAt?: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  /** Empty categories are kept in data but hidden in the UI. */
  skills: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  start: string;
  end: string;
  grade?: string;
  isPlaceholder?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export type ServiceIcon = "globe" | "layers" | "atom" | "nextjs" | "mobile" | "refresh" | "responsive";

export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
  icon: ServiceIcon;
  /** Featured services get a wider card. */
  featured?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  index: string;
}
