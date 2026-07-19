import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    icon: "layout",
    title: { en: "Frontend", fr: "Frontend", ar: "الواجهة الأمامية" },
    description: {
      en: "Modern, responsive interfaces and dashboards.",
      fr: "Interfaces modernes, responsives et tableaux de bord.",
      ar: "واجهات ولوحات تحكم حديثة ومتجاوبة.",
    },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    icon: "server",
    title: { en: "Backend", fr: "Backend", ar: "الخلفية" },
    description: {
      en: "APIs, authentication and product logic.",
      fr: "APIs, authentification et logique produit.",
      ar: "واجهات API، المصادقة ومنطق المنتج.",
    },
    items: ["Node.js", "Express", "REST APIs", "Auth"],
  },
  {
    id: "mobile",
    icon: "mobile",
    title: { en: "Mobile", fr: "Mobile", ar: "الموبايل" },
    description: {
      en: "Cross-platform mobile app development.",
      fr: "Developpement mobile cross-platform.",
      ar: "تطوير تطبيقات موبايل متعددة المنصات.",
    },
    items: ["React Native", "Expo"],
  },
  {
    id: "databases",
    icon: "database",
    title: { en: "Databases", fr: "Bases de donnees", ar: "قواعد البيانات" },
    description: {
      en: "Data modeling and application persistence.",
      fr: "Modelisation de donnees et persistance.",
      ar: "نمذجة البيانات وتخزين بيانات التطبيقات.",
    },
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "web3",
    icon: "web3",
    title: { en: "Web3", fr: "Web3", ar: "Web3" },
    description: {
      en: "Smart contract and blockchain workflows.",
      fr: "Smart contracts et workflows blockchain.",
      ar: "العقود الذكية ومسارات العمل بالبلوكشين.",
    },
    items: ["Solidity", "Web3.js", "wagmi", "IPFS", "Hashgraph"],
  },
  {
    id: "product",
    icon: "product",
    title: { en: "Product Delivery", fr: "Delivery produit", ar: "تسليم المنتجات" },
    description: {
      en: "From idea to useful MVP.",
      fr: "De l'idee au MVP utile.",
      ar: "من الفكرة إلى نسخة MVP مفيدة.",
    },
    items: ["SaaS MVPs", "E-commerce", "Dashboards", "Client Solutions"],
  },
];
