import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: {
      en: "Full Stack Developer",
      fr: "Developpeur Full Stack",
      ar: "مطور Full Stack",
    },
    company: "K2LIS",
    period: "Aug 2024 - Present",
    description: {
      en: "Developing and improving SaaS platforms and blockchain-enabled MVPs across frontend, backend, database and Web3 integration layers.",
      fr: "Developpement et amelioration de plateformes SaaS et de MVPs compatibles blockchain, du frontend au backend jusqu'a la base de donnees et l'integration Web3.",
      ar: "أطوّر وأحسّن منصات SaaS ونسخ MVP مدعومة بالبلوكشين عبر الواجهة الأمامية والخلفية وقواعد البيانات وتكامل Web3.",
    },
    highlights: [
      {
        en: "Redesigned and upgraded an existing SaaS application, improving user experience and overall platform performance.",
        fr: "Refonte et amelioration d'une application SaaS existante pour renforcer l'experience utilisateur et la performance.",
        ar: "أعدت تصميم وتحسين تطبيق SaaS موجود لرفع جودة تجربة المستخدم وأداء المنصة.",
      },
      {
        en: "Built MVPs for honey traceability, token transfer scheduling and construction management.",
        fr: "Creation de MVPs pour la tracabilite du miel, la planification de transferts de tokens et la gestion de construction.",
        ar: "بنيت نماذج MVP لتتبع العسل وجدولة تحويلات التوكنات وإدارة مشاريع البناء.",
      },
      {
        en: "Implemented smart contract interactions, wallet integration and blockchain-based business workflows.",
        fr: "Integration d'interactions avec smart contracts, wallets et workflows metier bases sur la blockchain.",
        ar: "نفذت تكامل العقود الذكية والمحافظ الرقمية ومسارات عمل مبنية على البلوكشين.",
      },
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "Solidity", "MongoDB", "PostgreSQL", "Docker", "Web3.js"],
  },
  {
    id: 2,
    title: {
      en: "Freelance Web Developer",
      fr: "Developpeur Web Freelance",
      ar: "مطور ويب مستقل",
    },
    company: "Freelance",
    period: "Oct 2023 - Present",
    location: {
      en: "Tunis, Tunisia",
      fr: "Tunis, Tunisie",
      ar: "تونس",
    },
    description: {
      en: "Building web applications, SaaS MVPs, e-commerce platforms, landing pages and business websites for clients and personal products.",
      fr: "Creation d'applications web, MVPs SaaS, plateformes e-commerce, landing pages et sites business pour clients et produits personnels.",
      ar: "أبني تطبيقات ويب وMVP لمنصات SaaS ومتاجر إلكترونية وصفحات هبوط ومواقع أعمال للعملاء والمشاريع الشخصية.",
    },
    highlights: [
      {
        en: "Turn business ideas into functional MVPs with clear user flows, dashboards and reusable components.",
        fr: "Transformer les idees business en MVPs fonctionnels avec parcours clairs, dashboards et composants reutilisables.",
        ar: "أحوّل أفكار الأعمال إلى MVP عملي مع مسارات مستخدم واضحة ولوحات تحكم ومكونات قابلة لإعادة الاستخدام.",
      },
      {
        en: "Delivered projects across career tools, e-commerce and restaurant ordering systems.",
        fr: "Livraison de projets dans les outils de carriere, l'e-commerce et les systemes de commande restaurant.",
        ar: "أنجزت مشاريع في أدوات التوظيف والتجارة الإلكترونية وأنظمة طلبات المطاعم.",
      },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL"],
  },
  {
    id: 3,
    title: {
      en: "Full Stack Developer Intern",
      fr: "Stagiaire Developpeur Full Stack",
      ar: "متدرب مطور Full Stack",
    },
    company: "K2LIS",
    period: "Jan 2024 - Jun 2024",
    description: {
      en: "Developed a decentralized document tokenization platform focused on document security, authenticity and accessibility.",
      fr: "Developpement d'une plateforme decentralisee de tokenisation de documents axee sur la securite, l'authenticite et l'accessibilite.",
      ar: "طورت منصة لا مركزية لتوكنة الوثائق بهدف تحسين الأمان والأصالة وسهولة الوصول.",
    },
    highlights: [
      {
        en: "Integrated Ethereum, Solidity, Web3, wagmi and RainbowKit for secure Web3 interactions.",
        fr: "Integration d'Ethereum, Solidity, Web3, wagmi et RainbowKit pour des interactions Web3 securisees.",
        ar: "دمجت Ethereum وSolidity وWeb3 وwagmi وRainbowKit لتجربة Web3 آمنة.",
      },
      {
        en: "Used MongoDB for application data and IPFS for decentralized file storage.",
        fr: "Utilisation de MongoDB pour les donnees applicatives et IPFS pour le stockage decentralise.",
        ar: "استعملت MongoDB لبيانات التطبيق وIPFS للتخزين اللامركزي للملفات.",
      },
    ],
    technologies: ["Next.js", "MongoDB", "IPFS", "Solidity", "Web3", "wagmi", "RainbowKit"],
  },
  {
    id: 4,
    title: {
      en: "Frontend Developer Intern",
      fr: "Stagiaire Developpeur Frontend",
      ar: "متدرب مطور واجهات",
    },
    company: "K2LIS",
    period: "Jan 2023 - Mar 2023",
    description: {
      en: "Redesigned a legacy SaaS landing page and built frontend MVP interfaces for Web3 product flows.",
      fr: "Refonte d'une landing page SaaS existante et creation d'interfaces frontend MVP pour des parcours produits Web3.",
      ar: "أعدت تصميم صفحة هبوط SaaS قديمة وبنيت واجهات MVP لمسارات منتجات Web3.",
    },
    highlights: [
      {
        en: "Worked on NFT marketplace interfaces and blockchain-based product screens.",
        fr: "Travail sur des interfaces de marketplace NFT et des ecrans produits bases sur la blockchain.",
        ar: "عملت على واجهات سوق NFT وشاشات منتجات مبنية على البلوكشين.",
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Web3.js"],
  },
  {
    id: 5,
    title: {
      en: "Frontend Developer Intern",
      fr: "Stagiaire Developpeur Frontend",
      ar: "متدرب مطور واجهات",
    },
    company: "BNA - Banque Nationale Agricole",
    period: "Jan 2022 - Feb 2022",
    location: {
      en: "Tunis, Tunisia",
      fr: "Tunis, Tunisie",
      ar: "تونس",
    },
    description: {
      en: "Redesigned a public-facing landing page for one of Tunisia's national banks.",
      fr: "Refonte d'une landing page publique pour l'une des banques nationales tunisiennes.",
      ar: "أعدت تصميم صفحة هبوط عامة لأحد البنوك الوطنية التونسية.",
    },
    highlights: [
      {
        en: "Delivered a modern responsive interface aligned with brand guidelines.",
        fr: "Livraison d'une interface moderne et responsive respectant l'identite de marque.",
        ar: "قدمت واجهة حديثة ومتجاوبة متوافقة مع الهوية البصرية.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
];
