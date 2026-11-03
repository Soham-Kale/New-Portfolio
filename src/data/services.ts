import type { Service } from "@/types";

// DRAFT COPY: service descriptions; edit to match how you scope and price work.
export const services: Service[] = [
  {
    id: "website",
    title: "Website Development",
    description:
      "Fast, search-friendly websites for businesses and personal brands, designed around what you want visitors to do next.",
    includes: ["Custom design", "SEO & performance basics", "Deployment & handover"],
    icon: "globe",
    featured: true,
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Frontend, API and database delivered together, so features ship end to end.",
    includes: ["Node.js + Express APIs", "MongoDB data models", "Auth & forms"],
    icon: "layers",
  },
  {
    id: "react",
    title: "React.js Development",
    description: "Component-driven web apps with predictable state and clean, typed code.",
    includes: ["TypeScript", "Redux Toolkit", "REST API integration"],
    icon: "atom",
  },
  {
    id: "nextjs",
    title: "Next.js Development",
    description: "Server-rendered and static sites that load quickly and rank well.",
    includes: ["App Router", "Static export", "Metadata & sitemaps"],
    icon: "nextjs",
  },
  {
    id: "react-native",
    title: "React Native Development",
    description: "Cross-platform mobile apps for Android and iOS from a single codebase.",
    includes: ["Expo", "Native modules", "API integration"],
    icon: "mobile",
  },
  {
    id: "redesign",
    title: "Website Redesign & Optimization",
    description: "Modernise an existing site: clearer structure, better visuals and faster loading.",
    includes: ["UI refresh", "Core Web Vitals", "Accessibility fixes"],
    icon: "refresh",
  },
  {
    id: "responsive",
    title: "Responsive UI Development",
    description: "Pixel-careful interfaces that feel right on every screen, from 360px phones to wide desktops.",
    includes: ["Mobile-first layouts", "Design-to-code", "Cross-browser testing"],
    icon: "responsive",
  },
];
