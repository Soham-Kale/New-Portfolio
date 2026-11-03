import type { Project } from "@/types";

/**
 * Featured projects. Add / edit entries here; each one gets a static page at
 * /projects/[slug]. Put images in /public/images/projects and reference them as
 * "/images/projects/<file>". Without images an art-directed generative cover is shown.
 *
 * Entries with `isSample: true` are PLACEHOLDERS (shown with a "Sample" badge).
 * Replace or delete them before publishing.
 */
export const projects: Project[] = [
  {
    // SOURCE: resume ("Barne Farms E-commerce Application") + live site.
    slug: "barne-farms",
    title: "Barne Farms",
    tagline: "Farm-fresh e-commerce, from catalog to checkout.",
    description:
      "An e-commerce application for Barne Farms built with React, TypeScript and Material UI, with Redux Toolkit managing cart, authentication and product filtering.",
    category: "E-commerce · Web App",
    year: "2024–25",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "Material UI", "Redux Toolkit", "Axios"],
    thumbnail: "/images/projects/barne-farms.webp",
    liveUrl: "https://barnefarms.com/",
    highlights: [
      "Global state for cart, user auth and product filtering with Redux Toolkit",
      "Secure backend API integration for auth, products and orders",
      "Product listing, dynamic filtering, cart and payment flow",
    ],
    details: [
      {
        heading: "Overview",
        body: "A storefront for farm-fresh produce. Customers browse a categorised catalog of fresh vegetables and fruits, filter products, build a cart and check out, with order history behind authentication.",
      },
      {
        heading: "What I built",
        body: "I developed the frontend in React and TypeScript with Material UI, managing global state for the cart, user authentication and product filtering with Redux Toolkit, and integrating secure backend APIs for authentication, product management and order processing.",
      },
      {
        heading: "Quality & performance",
        body: "Layouts were built responsive-first for consistent UI/UX across devices, with rendering optimised for faster load times.",
      },
    ],
    featured: true,
    isSample: false,
    accent: ["#7bd88f", "#2f6b4f"],
  },
  {
    // SOURCE: YouInSports role description provided by Soham + live site.
    slug: "youinsports",
    title: "YouInSports",
    tagline: "Chess intelligence inside a networking app for athletes.",
    description:
      "YouInSports is a platform where athletes build a sports CV, manage their journey and connect with coaches, sponsors and community. I built chess features for its React Native app: in-app engine analysis and data-driven opponent scouting.",
    category: "Mobile App · Sports Tech",
    year: "2025",
    role: "Associate Software Engineer",
    technologies: ["React Native", "JavaScript", "Stockfish Engine", "Python", "Web Scraping", "API Integration", "Android Development"],
    thumbnail: "/images/projects/youinsports.webp",
    liveUrl: "https://www.youinsports.ai/",
    highlights: [
      "Stockfish engine integrated into the React Native app for real-time move analysis and best-move suggestions",
      "Python scraping pipeline enriching 1,000+ player profiles from ChessResults.com",
      "Opponent scouting feature that increased user session engagement",
    ],
    details: [
      {
        heading: "Overview",
        body: "YouInSports is a global networking platform for sports professionals: athletes create a digital sports CV, track achievements and connect with coaches, sponsors and sport-specific communities. Chess is one of its largest communities.",
      },
      {
        heading: "Engine analysis",
        body: "I integrated the Stockfish chess engine into the React Native mobile app, enabling real-time move analysis, best-move suggestions and post-game insights, directly improving competitive gameplay quality for chess users on the platform.",
      },
      {
        heading: "Player data pipeline",
        body: "I built a web scraping pipeline in Python to ingest player profile data from ChessResults.com, enriching 1,000+ player profiles with performance history and opponent analytics.",
      },
      {
        heading: "Opponent scouting",
        body: "On top of that data I delivered an interactive opponent scouting feature that increased user session engagement by enabling data-driven preparation before a match.",
      },
    ],
    featured: true,
    isSample: false,
    accent: ["#3a8dde", "#1d3f6b"],
  },
  {
    // SOURCE: project README (Downloads/sanjivani-agarbatti) + live site.
    slug: "sanjivani-agarbatti",
    title: "Sanjivani Agarbatti",
    tagline: "A Marathi-first, 3D brand website for a family incense maker.",
    description:
      "Full-stack website for Sanjivani Incense Sticks & Agarbatti, Malewadi-Akluj: a live 3D incense scene, a fragrance explorer, a 41-product catalog, franchise plans and enquiry forms, in Marathi with an English toggle.",
    category: "Client Website · Full-stack",
    year: "2026",
    role: "Full-stack Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Node.js", "Express", "MongoDB"],
    thumbnail: "/images/projects/sanjivani-agarbatti.webp",
    liveUrl: "https://sanjivaniagarbatti.in/",
    highlights: [
      "Live 3D incense scene in the hero, with a fragrance explorer that recolours the smoke",
      "Marathi-first content with an English toggle remembered per browser",
      "Products and enquiries API on Express + MongoDB, with a WhatsApp fallback when the API is offline",
    ],
    details: [
      {
        heading: "Overview",
        body: "Sanjivani makes agarbatti, dhoop sticks, cup dhoop and puja essentials in Malewadi-Akluj, selling both wholesale and retail. The brief was a premium online presence that speaks to local customers in Marathi and brings in franchise and wholesale enquiries.",
      },
      {
        heading: "Design & experience",
        body: "A dark premium design with gold hairlines and a live 3D incense scene in the hero. A fragrance explorer recolours the smoke for each of the 11 fragrances, and the 41-product catalog, franchise plans and enquiry forms sit within the same visual system.",
      },
      {
        heading: "Engineering",
        body: "The frontend is Next.js (App Router) with TypeScript, Tailwind CSS, Framer Motion and Three.js. A Node.js + Express + MongoDB backend serves products and stores enquiries; when it is unavailable, products load from local data and forms offer to send the details on WhatsApp instead.",
      },
    ],
    featured: true,
    isSample: false,
    accent: ["#f5a04a", "#5a2a4a"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
