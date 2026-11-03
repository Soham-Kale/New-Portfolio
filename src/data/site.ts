import type { NavItem } from "@/types";

export const site = {
  /**
   * Public URL used for canonical links, sitemap and Open Graph.
   * Set NEXT_PUBLIC_SITE_URL at build time once the domain is known.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://soham-kale.vercel.app").replace(/\/$/, ""),
  title: "Soham Kale — Software Engineer · React, Next.js & React Native",
  description:
    "Soham Kale is a software engineer building fast, reliable web and mobile products with React, Next.js and React Native. Available for freelance projects.",
  locale: "en_IN",
};

export const navItems: NavItem[] = [
  { id: "work", label: "Work", index: "01" },
  { id: "clients", label: "Clients", index: "02" },
  { id: "services", label: "Services", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
  { id: "about", label: "About", index: "05" },
];
