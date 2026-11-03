import type { Certification, Education } from "@/types";

// SOURCE: resume (July 2026).
export const education: Education[] = [
  {
    institution: "Brahmdevdada Mane Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    location: "Solapur, India",
    start: "2021",
    end: "2025",
    grade: "GPA 8.50",
  },
];

/**
 * PLACEHOLDERS: certifications could not be read from LinkedIn.
 * Replace with real entries (set `isPlaceholder: false` or remove the flag).
 */
export const certifications: Certification[] = [
  { name: "Certification name", issuer: "Issuing organisation", date: "Year", isPlaceholder: true },
  { name: "Professional course", issuer: "Platform / institution", date: "Year", isPlaceholder: true },
];
