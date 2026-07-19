import { profile } from "./profile";
import { seo, hero, sectionTitles, contact, projectDetailsLabels, footer } from "./sections";
import { experiences } from "./experience";
import { projects } from "./projects";
import { skillGroups } from "./skills";

export * from "./types";
export * from "./profile";
export * from "./navigation";
export * from "./sections";
export * from "./experience";
export * from "./projects";
export * from "./skills";

export const portfolioData = {
  seo,
  profile,
  personalInfo: profile,
  hero,
  sections: sectionTitles,
  contact,
  footer,
  projectDetailsLabels,
  experiences,
  projects,
  skillGroups,
};
