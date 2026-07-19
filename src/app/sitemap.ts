import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfoliodata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = portfolioData.seo.siteUrl.replace(/\/$/, "");
  const now = new Date();
  const visibleProjects = portfolioData.projects.filter((project) => !project.hidden);

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...visibleProjects.map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
