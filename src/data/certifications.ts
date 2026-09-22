import type { Certification } from "./types";

export const certifications: Certification[] = [
  // Add certificate PDFs under public/certificates/ and set pdfUrl, for example:
  // pdfUrl: "/certificates/hashgraph-developer-course.pdf"
  {
    id: 1,
    title: {
      en: "Hashgraph Developer Course",
      fr: "Hashgraph Developer Course",
      ar: "دورة مطور Hashgraph",
    },
    issuer: "The Hashgraph Association",
    date: "Aug 2024",
    category: "web3",
  },
  {
    id: 2,
    title: {
      en: "IT Specialist - Artificial Intelligence",
      fr: "IT Specialist - Intelligence Artificielle",
      ar: "IT Specialist - الذكاء الاصطناعي",
    },
    issuer: "Pearson",
    date: "Jan 2026",
    category: "ai",
  },
  {
    id: 3,
    title: {
      en: "IT Specialist - Data Analytics",
      fr: "IT Specialist - Data Analytics",
      ar: "IT Specialist - تحليل البيانات",
    },
    issuer: "Pearson",
    date: "Jan 2026",
    category: "data",
  },
  {
    id: 4,
    title: {
      en: "Linux Essentials",
      fr: "Linux Essentials",
      ar: "أساسيات Linux",
    },
    issuer: "Cisco",
    date: "Jun 2025",
    category: "systems",
  },
  {
    id: 5,
    title: {
      en: "TypeScript for JavaScript Developers",
      fr: "TypeScript for JavaScript Developers",
      ar: "TypeScript لمطوري JavaScript",
    },
    issuer: "LinkedIn",
    date: "Nov 2024",
    category: "typescript",
  },
  {
    id: 6,
    title: {
      en: "DevOps Foundations",
      fr: "DevOps Foundations",
      ar: "أساسيات DevOps",
    },
    issuer: "LinkedIn",
    date: "Dec 2024",
    category: "devops",
  },
];
