import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfoliodata";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = portfolioData.seo.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
