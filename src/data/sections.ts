import type { SEOMetadata, Translation } from "./types";

export const seo: SEOMetadata = {
  siteUrl: "https://www.ahmedsoumri.com",
  siteName: "Ahmed Soumri | Full Stack Developer",
  title: "Ahmed Soumri - Full Stack Developer | SaaS, Web, Mobile & Web3",
  description:
    "Ahmed Soumri is a Full Stack Developer building SaaS platforms, web and mobile apps, dashboards, e-commerce solutions, and Web3 integrations with React, Next.js, Node.js, TypeScript, React Native, Solidity, and Web3.js.",
  keywords: [
    "Ahmed Soumri",
    "Full Stack Developer",
    "SaaS Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "TypeScript",
    "Web3 Integration",
    "Smart Contracts",
    "Solidity",
    "Tunisia Developer",
    "Freelance Developer",
    "Portfolio",
  ],
  author: "Ahmed Soumri",
  twitterHandle: "@ahmedsoumri",
  ogImage: "/og-image.png",
  locale: "en_US",
  themeColor: "#6D5EF7",
};

export const hero = {
  greeting: {
    en: "Hello, I'm",
    fr: "Bonjour, je suis",
    ar: "مرحبا، أنا",
  } satisfies Translation,
  headline: {
    en: "Full Stack Developer building SaaS, web and mobile apps.",
    fr: "Developpeur Full Stack qui construit des SaaS, apps web et mobiles.",
    ar: "مطور Full Stack أبني منصات SaaS وتطبيقات ويب وموبايل.",
  } satisfies Translation,
  subtitle: {
    en: "I turn ideas into useful products with React, Next.js, Node.js, React Native and TypeScript, with Web3 integration when smart contracts or blockchain workflows create real value.",
    fr: "Je transforme les idees en produits utiles avec React, Next.js, Node.js, React Native et TypeScript, avec integration Web3 quand les smart contracts ou les workflows blockchain apportent une vraie valeur.",
    ar: "أحوّل الأفكار إلى منتجات مفيدة باستعمال React وNext.js وNode.js وReact Native وTypeScript، مع تكامل Web3 عندما تضيف العقود الذكية أو حلول البلوكشين قيمة حقيقية.",
  } satisfies Translation,
  primaryCta: {
    en: "View Projects",
    fr: "Voir les projets",
    ar: "عرض المشاريع",
  } satisfies Translation,
  secondaryCta: {
    en: "Download CV",
    fr: "Telecharger le CV",
    ar: "تحميل السيرة الذاتية",
  } satisfies Translation,
};

export const sectionTitles = {
  about: { en: "About Me", fr: "A propos", ar: "نبذة عني" } satisfies Translation,
  experience: { en: "Experience", fr: "Experience", ar: "الخبرات" } satisfies Translation,
  projects: { en: "Projects", fr: "Projets", ar: "المشاريع" } satisfies Translation,
  contact: { en: "Get in Touch", fr: "Contactez-moi", ar: "تواصل معي" } satisfies Translation,
};

export const contact = {
  intro: {
    en: "Have a project, freelance mission, SaaS idea, or strong opportunity? Send me a message and I will get back to you.",
    fr: "Vous avez un projet, une mission freelance, une idee SaaS ou une opportunite interessante ? Envoyez-moi un message et je vous repondrai.",
    ar: "لديك مشروع أو مهمة فريلانس أو فكرة SaaS أو فرصة قوية؟ أرسل لي رسالة وسأرد عليك.",
  } satisfies Translation,
  labels: {
    name: { en: "Name", fr: "Nom", ar: "الاسم" } satisfies Translation,
    email: { en: "Email", fr: "Email", ar: "البريد الإلكتروني" } satisfies Translation,
    subject: { en: "Subject", fr: "Sujet", ar: "الموضوع" } satisfies Translation,
    message: { en: "Message", fr: "Message", ar: "الرسالة" } satisfies Translation,
    send: { en: "Send Message", fr: "Envoyer", ar: "إرسال الرسالة" } satisfies Translation,
    socials: { en: "Connect on Socials", fr: "Me retrouver en ligne", ar: "تواصل معي عبر المنصات" } satisfies Translation,
  },
};

export const projectDetailsLabels = {
  back: { en: "Back to Projects", fr: "Retour aux projets", ar: "العودة إلى المشاريع" } satisfies Translation,
  overview: { en: "Overview", fr: "Apercu", ar: "نظرة عامة" } satisfies Translation,
  features: { en: "Key Features", fr: "Fonctionnalites cles", ar: "الميزات الأساسية" } satisfies Translation,
  challenge: { en: "Challenge", fr: "Defi", ar: "التحدي" } satisfies Translation,
  outcome: { en: "Outcome", fr: "Resultat", ar: "النتيجة" } satisfies Translation,
  repository: { en: "Code Repository", fr: "Depot du code", ar: "مستودع الكود" } satisfies Translation,
  live: { en: "Live Preview", fr: "Apercu live", ar: "معاينة مباشرة" } satisfies Translation,
  details: { en: "Details", fr: "Details", ar: "التفاصيل" } satisfies Translation,
  code: { en: "Code", fr: "Code", ar: "الكود" } satisfies Translation,
  livePreview: { en: "Live Preview", fr: "Apercu live", ar: "معاينة مباشرة" } satisfies Translation,
  screenshots: { en: "Screenshots", fr: "Captures d'ecran", ar: "لقطات الشاشة" } satisfies Translation,
  videos: { en: "Videos", fr: "Videos", ar: "فيديوهات" } satisfies Translation,
};

export const footer = {
  text: {
    en: "Full Stack Developer building SaaS, web, mobile and Web3-enabled solutions.",
    fr: "Developpeur Full Stack construisant des solutions SaaS, web, mobiles et Web3.",
    ar: "مطور Full Stack أبني حلول SaaS وويب وموبايل وحلول مدعومة بـ Web3.",
  } satisfies Translation,
};
