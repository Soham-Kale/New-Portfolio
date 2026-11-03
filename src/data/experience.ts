import type { Experience } from "@/types";

/**
 * SOURCE: resume (July 2026). Responsibilities are the resume bullets;
 * contributions restate outcomes already named in those bullets.
 * Technologies are only those named in the matching bullets — add more freely.
 */
export const experience: Experience[] = [
  {
    id: "youinsports",
    company: "YouInSports",
    location: "Remote",
    workMode: "Remote",
    roles: [
      {
        // Resume reads "Associate Software Engineering"; confirm exact title on LinkedIn.
        title: "Associate Software Engineer",
        employmentType: "Full-time",
        start: "2025-05",
        end: null,
        responsibilities: [
          "Integrated the Stockfish chess engine into a React Native mobile app, enabling real-time move analysis, best-move suggestions and post-game insights.",
          "Built a web scraping pipeline in Python to ingest player profile data from ChessResults.com.",
          "Delivered an interactive opponent scouting feature for data-driven pre-match preparation.",
        ],
        contributions: [
          "Enriched 1,000+ player profiles with performance history and opponent analytics",
          "Shipped in-app engine analysis that improved competitive gameplay quality",
          "Opponent scouting increased user session engagement",
        ],
        technologies: ["React Native", "Stockfish", "Python", "Web Scraping"],
      },
    ],
  },
  {
    id: "code-implants",
    company: "Code Implants Software Technologies Pvt. Ltd",
    location: "Remote",
    workMode: "Remote",
    roles: [
      {
        title: "Junior Software Engineer",
        employmentType: "Full-time",
        start: "2024-10",
        end: "2025-05",
        responsibilities: [
          "Built a farm-fresh e-commerce platform with React, TypeScript and Material UI, using Redux Toolkit for state management.",
          "Implemented a product catalog with category-based filtering, cart management with live totals, and a secure JWT-based checkout and order-history flow.",
          "Managed application state and REST API integration with Redux Toolkit and Axios, configuring interceptors to attach JWT tokens on protected routes.",
          "Optimised rendering and built responsive layouts for a consistent UX across mobile, tablet and desktop.",
        ],
        contributions: [
          "E-commerce platform serving 1,000 active users",
          "End-to-end checkout with JWT-protected order history",
        ],
        technologies: ["React", "TypeScript", "Material UI", "Redux Toolkit", "Axios", "JWT"],
      },
      {
        title: "Software Engineer Intern",
        employmentType: "Internship",
        start: "2024-04",
        end: "2024-09",
        responsibilities: [
          "Built reusable React components, improving maintainability and reducing development time for new features.",
          "Implemented navigation with React Router and user feedback with React-Toastify.",
          "Handled authentication, data retrieval and form handling for a robust, efficient data flow.",
          "Collaborated with cross-functional teams to deliver features, fix bugs and improve UI/UX.",
        ],
        contributions: ["Reusable component library that sped up new feature work"],
        technologies: ["React", "React Router", "React-Toastify", "JavaScript"],
      },
    ],
  },
];
