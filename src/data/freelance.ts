import type { FreelanceProject } from "@/types";

/**
 * Freelance / client work. Put screenshots in /public/images/projects and list
 * them in `screenshots` (the first is the main preview; up to three are shown).
 * Entries with `isSample: true` render a visible "Sample" badge; keep real work only
 * on a site you share with clients.
 */
export const freelance: FreelanceProject[] = [
  {
    // SOURCE: project README (Downloads/sanjivani-agarbatti) + live site.
    id: "sanjivani-agarbatti",
    client: "Sanjivani Agarbatti",
    title: "Marathi-first brand website & product catalog",
    overview:
      "A premium online home for Sanjivani Incense Sticks & Agarbatti, a maker in Malewadi-Akluj selling wholesale and retail. The site presents 41 products across 11 fragrances in Marathi with an English toggle.",
    industry: "Incense & Puja Essentials",
    year: "2026",
    // DRAFT COPY
    challenge:
      "Give a local manufacturer a credible online presence that customers can read in Marathi, browse the full product range on, and use to start franchise and wholesale enquiries.",
    responsibilities: [
      "Full-stack design and development",
      "Live 3D incense hero and fragrance explorer",
      "Product catalog with category and fragrance filters",
      "Franchise plans and enquiry forms with a WhatsApp fallback",
      "Products & enquiries API on Express + MongoDB",
    ],
    deliverables: [
      "Live website at sanjivaniagarbatti.in",
      "41-product catalog across 11 fragrances",
      "Marathi / English content toggle",
      "Franchise and enquiry flows",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Node.js", "Express", "MongoDB"],
    screenshots: [
      "/images/projects/sanjivani-agarbatti.webp",
      "/images/projects/sanjivani-products.webp",
      "/images/projects/sanjivani-franchise.webp",
    ],
    liveUrl: "https://sanjivaniagarbatti.in/",
    isSample: false,
    accent: ["#f5a04a", "#5a2a4a"],
  },
];
