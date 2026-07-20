import type { Translation, SocialLink } from "./types";

export const profile = {
  name: "Ahmed Soumri",
  location: "Tunis, Tunisia",
  email: "ahmedsoumri01@gmail.com",
  phone: "+216 95941469",
  brand: "Ahmed Soumri",
  title: {
    en: "Full Stack Developer | SaaS, Web & Mobile Apps | Web3 Integration",
    fr: "Developpeur Full Stack | SaaS, Web & Mobile | Integration Web3",
    ar: "مطور Full Stack | SaaS وتطبيقات ويب وموبايل | تكامل Web3",
  } satisfies Translation,
  description: {
    en: "I build practical digital products: SaaS platforms, dashboards, e-commerce apps, mobile apps, and business MVPs. My advantage is that I can also work with smart contracts, tokenization, traceability, and Web3 integrations when they create real value.",
    fr: "Je construis des produits digitaux utiles : plateformes SaaS, tableaux de bord, e-commerce, applications mobiles et MVPs business. Mon avantage est de pouvoir aussi travailler avec les smart contracts, la tokenisation, la tracabilite et les integrations Web3 quand elles apportent une vraie valeur.",
    ar: "أبني منتجات رقمية عملية مثل منصات SaaS ولوحات التحكم ومتاجر إلكترونية وتطبيقات موبايل ونسخ MVP للأعمال. ميزتي أنني أستطيع أيضا العمل على العقود الذكية والتوكنة والتتبع وتكامل Web3 عندما يضيف ذلك قيمة حقيقية.",
  } satisfies Translation,
  cv: {
    en: "/cv/Ahmed_Soumri_CV_EN.docx",
    fr: "/cv/Ahmed_Soumri_CV_FR.docx",
  },
  links: {
    portfolio: "https://www.ahmedsoumri.com",
    github: "https://github.com/ahmedsoumri",
    linkedin: "https://linkedin.com/in/ahmed-soumri",
    twitter: "https://x.com/ahmedsoumri",
    threads: "https://threads.net/@ahmedsoumri",
  },
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: profile.links.github, type: "github" },
  { label: "LinkedIn", url: profile.links.linkedin, type: "linkedin" },
  { label: "Email", url: `mailto:${profile.email}`, type: "email" },
];
