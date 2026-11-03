import type { Profile } from "@/types";

/**
 * SOURCE: Soham's resume (SohamKale_React_2_YOE_.pdf, July 2026).
 * LinkedIn (linkedin.com/in/soham-kale-dev) blocks automated reading, so every
 * fact below comes from the resume. Check it against LinkedIn and edit freely.
 *
 * Items marked `DRAFT COPY` are wording written from those facts — rewrite them
 * in your own voice. Nothing here claims experience that is not on the resume.
 */
export const profile: Profile = {
  name: "Soham Kale",
  firstName: "Soham",
  lastName: "Kale",
  initials: "SK",
  role: "Software Engineer",
  headline: "Full-Stack Developer",
  // DRAFT COPY
  heroHeadline: "Building fast, reliable web and mobile products.",
  // DRAFT COPY
  shortIntro:
    "Software engineer with 2+ years shipping production React, Next.js and React Native work for product teams and freelance clients, from e-commerce storefronts to real-time chess analysis.",
  location: "Pune, India",
  timeZone: "Asia/Kolkata",
  availability: {
    open: true,
    label: "Available for freelance projects",
    detail: "Also open to full-time frontend and React Native roles.",
  },
  currently: { role: "Founding Engineer", company: "TurtleIQ-Labs" },
  email: "sohamkale3014@gmail.com",
  resumeUrl: "/resume/Soham-Kale-Resume.pdf",
  about: {
    // DRAFT COPY
    heading: "Engineer by training, product-minded by habit.",
    // DRAFT COPY
    statement:
      "I turn product ideas into interfaces that feel effortless on the web and in your pocket, and I care about every millisecond in between.",
    journey: [
      "I studied Computer Science Engineering at Brahmdevdada Mane Institute of Technology, Solapur (2021–2025), and started shipping production code before graduating.",
      "In April 2024 I joined Code Implants Software Technologies as a Software Engineer Intern, building reusable React components, routing, authentication and form flows. In October 2024 I continued there as a Junior Software Engineer and built a farm-fresh e-commerce platform with React, TypeScript, Material UI and Redux Toolkit.",
      "From May 2025 to September 2026 I was a Software Engineer at YouInSports, working remotely with a team in Waterloo, Canada. I integrated the Stockfish chess engine into a React Native app and built a Python pipeline that enriches player profiles with performance history.",
      "In October 2026 I joined TurtleIQ-Labs in Pune as a Founding Engineer, building a fintech product that helps founders connect their multiple dashboards in one place.",
    ],
    // DRAFT COPY
    expertise: [
      "React and Next.js web applications",
      "Cross-platform mobile apps with React Native",
      "TypeScript, Redux Toolkit and REST API integration",
      "Node.js + Express backends with MongoDB",
    ],
    // DRAFT COPY
    approach: [
      {
        title: "Understand the problem first",
        body: "Clarify who the product is for, what success looks like and what constraints matter before writing code.",
      },
      {
        title: "Build in reusable pieces",
        body: "Well-typed components and predictable state, so the next feature is faster to ship than the last.",
      },
      {
        title: "Ship, measure, refine",
        body: "Responsive layouts and fast loads verified on real devices, then improved based on how people use it.",
      },
    ],
    interests: [
      "Cross-platform mobile with React Native & Expo",
      "Real-time, data-rich interfaces",
      "AI-assisted development workflows",
      "Design systems & UI engineering",
    ],
    collaboration:
      "I've worked on-site in Pune and remotely with a team in Canada, inside product teams and alongside cross-functional colleagues, from an early-stage founding role to established product companies.",
    stats: [
      { value: "2+", label: "Years building for production" },
      { value: "4", label: "Roles across 3 companies" },
      { value: "3", label: "Live products shipped" },
    ],
  },
};
