export type Language = "en" | "fr" | "ar";

export type Translation = Record<Language, string>;

export interface SocialLink {
  label: string;
  url: string;
  type: "github" | "linkedin" | "email" | "twitter" | "threads";
}

export interface SkillGroup {
  id: string;
  icon: "layout" | "server" | "mobile" | "database" | "web3" | "product";
  title: Translation;
  description: Translation;
  items: string[];
}

export interface Experience {
  id: number;
  hidden?: boolean;
  title: Translation;
  company: string;
  period: string;
  location?: Translation;
  description: Translation;
  highlights: Translation[];
  technologies: string[];
}

export interface ProjectScreenshot {
  src: string;
  alt: Translation;
  caption?: Translation;
}

export interface ProjectVideo {
  src: string;
  title: Translation;
  poster?: string;
  caption?: Translation;
}

export interface Project {
  id: number;
  slug: string;
  hidden?: boolean;
  title: Translation;
  shortDescription: Translation;
  overview: Translation;
  image?: string;
  visualLabel: string;
  status: Translation;
  technologies: string[];
  features: Translation[];
  challenge: Translation;
  outcome: Translation;
  coverImage?: ProjectScreenshot;
  screenshots?: ProjectScreenshot[];
  videos?: ProjectVideo[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SEOMetadata {
  siteUrl: string;
  siteName: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  twitterHandle: string;
  ogImage: string;
  locale: string;
  themeColor: string;
}
