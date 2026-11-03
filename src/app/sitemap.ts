import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...projects
      .filter((project) => !project.isSample)
      .map((project) => ({
        url: `${site.url}/projects/${project.slug}/`,
        changeFrequency: "yearly" as const,
        priority: 0.7,
      })),
  ];
}
