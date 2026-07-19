import type { Project } from "./types";

// To add media later, put files under public/projects/<project-slug>/ and add:
// screenshots: [{ src: "/projects/careercraft/dashboard.png", alt: { en: "...", fr: "...", ar: "..." } }]
// videos: [{ src: "/projects/careercraft/demo.mp4", title: { en: "...", fr: "...", ar: "..." }, poster: "/projects/careercraft/poster.png" }]
export const projects: Project[] = [
  {
    id: 1,
    slug: "careercraft",
    hidden: true,
    title: {
      en: "CareerCraft",
      fr: "CareerCraft",
      ar: "CareerCraft",
    },
    shortDescription: {
      en: "AI-powered career platform MVP focused on CV improvement, career guidance and job-readiness tools.",
      fr: "MVP de plateforme carriere avec IA pour ameliorer les CV, guider les utilisateurs et preparer les candidatures.",
      ar: "منصة مهنية مدعومة بالذكاء الاصطناعي لتحسين السيرة الذاتية والتوجيه المهني والتحضير للفرص.",
    },
    overview: {
      en: "CareerCraft helps users improve their career materials and prepare for opportunities through AI-assisted guidance. The MVP is focused on practical flows: CV review, career direction and job-readiness support.",
      fr: "CareerCraft aide les utilisateurs a ameliorer leurs supports de candidature et a se preparer aux opportunites grace a une assistance IA. Le MVP se concentre sur des parcours pratiques : revue de CV, orientation carriere et preparation.",
      ar: "تساعد CareerCraft المستخدمين على تحسين ملفاتهم المهنية والاستعداد للفرص عبر إرشاد مدعوم بالذكاء الاصطناعي. يركز الـ MVP على تحسين السيرة الذاتية والتوجيه المهني والتحضير للعمل.",
    },
    visualLabel: "AI Career Platform",
    status: { en: "MVP in progress", fr: "MVP en cours", ar: "MVP قيد التطوير" },
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "AI"],
    features: [
      {
        en: "AI-assisted career and CV improvement flows.",
        fr: "Parcours IA pour l'amelioration de carriere et de CV.",
        ar: "مسارات مدعومة بالذكاء الاصطناعي لتحسين المسار المهني والسيرة الذاتية.",
      },
      {
        en: "User-focused interface for turning career data into actionable next steps.",
        fr: "Interface orientee utilisateur pour transformer les donnees carriere en actions concretes.",
        ar: "واجهة تساعد المستخدم على تحويل بياناته المهنية إلى خطوات عملية.",
      },
      {
        en: "Built as a SaaS MVP that can evolve into a subscription product.",
        fr: "Construit comme MVP SaaS pouvant evoluer vers un produit par abonnement.",
        ar: "مبني كـ MVP لمنصة SaaS قابلة للتطور إلى منتج باشتراك.",
      },
    ],
    challenge: {
      en: "The main challenge is keeping AI guidance useful and structured instead of generic. The product needs clear workflows that help users make decisions, not only generate text.",
      fr: "Le defi principal est de rendre l'assistance IA utile et structuree, pas generique. Le produit doit aider les utilisateurs a prendre des decisions, pas seulement generer du texte.",
      ar: "التحدي الرئيسي هو جعل توجيه الذكاء الاصطناعي مفيدا ومنظما وليس عاما فقط. المنتج يجب أن يساعد المستخدم على اتخاذ قرارات وليس مجرد توليد نصوص.",
    },
    outcome: {
      en: "The MVP is around 80% ready and will be prepared for deployment after the portfolio and brand foundation are updated.",
      fr: "Le MVP est environ 80% pret et sera prepare pour le deploiement apres la mise a jour du portfolio et de la base de marque.",
      ar: "الـ MVP جاهز تقريبا بنسبة 80% وسيتم تجهيزه للنشر بعد تحديث البورتفوليو والأساس الشخصي.",
    },
  },
  {
    id: 2,
    slug: "smr-store",
    hidden: true,
    title: {
      en: "SMR Store",
      fr: "SMR Store",
      ar: "SMR Store",
    },
    shortDescription: {
      en: "MERN e-commerce platform with product browsing, cart flows, authentication and admin-oriented functionality.",
      fr: "Plateforme e-commerce MERN avec catalogue, panier, authentification et fonctionnalites orientees administration.",
      ar: "منصة تجارة إلكترونية MERN مع عرض المنتجات وسلة الشراء والمصادقة وميزات إدارية.",
    },
    overview: {
      en: "SMR Store is an e-commerce project built to practice and demonstrate full-stack commerce workflows, from product browsing to cart interactions and admin management.",
      fr: "SMR Store est un projet e-commerce cree pour pratiquer et demontrer des workflows full-stack de commerce, du catalogue au panier et a l'administration.",
      ar: "SMR Store مشروع تجارة إلكترونية لإظهار مسارات عمل Full Stack من تصفح المنتجات إلى السلة والإدارة.",
    },
    visualLabel: "E-commerce Platform",
    status: { en: "Project built", fr: "Projet realise", ar: "مشروع منجز" },
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      {
        en: "Product browsing and commerce-oriented user flows.",
        fr: "Catalogue produits et parcours utilisateur e-commerce.",
        ar: "تصفح المنتجات ومسارات مستخدم خاصة بالتجارة الإلكترونية.",
      },
      {
        en: "Authentication and admin-oriented structure.",
        fr: "Authentification et structure orientee administration.",
        ar: "مصادقة وهيكلة موجهة للإدارة.",
      },
      {
        en: "Reusable full-stack structure for future e-commerce work.",
        fr: "Structure full-stack reutilisable pour de futurs projets e-commerce.",
        ar: "هيكلة Full Stack قابلة لإعادة الاستخدام لمشاريع تجارة إلكترونية لاحقة.",
      },
    ],
    challenge: {
      en: "The challenge was structuring the app so the storefront and admin features can grow without becoming messy.",
      fr: "Le defi etait de structurer l'application pour faire evoluer la boutique et l'administration sans complexite inutile.",
      ar: "كان التحدي في تنظيم التطبيق حتى تتطور واجهة المتجر ولوحة الإدارة بدون تعقيد.",
    },
    outcome: {
      en: "The project became a reusable e-commerce reference for future client or SaaS commerce work.",
      fr: "Le projet est devenu une reference e-commerce reutilisable pour de futurs travaux clients ou SaaS.",
      ar: "أصبح المشروع مرجعا قابلا لإعادة الاستخدام لأعمال التجارة الإلكترونية للعملاء أو SaaS.",
    },
  },
  {
    id: 3,
    slug: "yalla-order",
    hidden: true,
    title: {
      en: "Yalla Order",
      fr: "Yalla Order",
      ar: "Yalla Order",
    },
    shortDescription: {
      en: "Restaurant QR ordering system that lets customers browse menus and place orders from their table.",
      fr: "Systeme de commande restaurant par QR code permettant aux clients de consulter le menu et commander depuis leur table.",
      ar: "نظام طلبات مطاعم عبر QR يسمح للزبائن بتصفح القائمة وطلب الطعام من الطاولة.",
    },
    overview: {
      en: "Yalla Order is designed for restaurants and cafes that need a simple digital ordering flow. Customers scan a QR code, browse the menu and send their order from the table.",
      fr: "Yalla Order est concu pour les restaurants et cafes qui ont besoin d'un parcours de commande digital simple. Le client scanne un QR code, consulte le menu et envoie sa commande.",
      ar: "Yalla Order موجه للمطاعم والمقاهي التي تحتاج مسار طلب رقمي بسيط. يمسح الزبون رمز QR، يتصفح القائمة ويرسل الطلب من الطاولة.",
    },
    visualLabel: "QR Ordering System",
    status: { en: "Project built", fr: "Projet realise", ar: "مشروع منجز" },
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    features: [
      {
        en: "QR-based table ordering flow.",
        fr: "Parcours de commande par table via QR code.",
        ar: "مسار طلب من الطاولة عبر QR.",
      },
      {
        en: "Digital menu experience for restaurants and cafes.",
        fr: "Experience menu digital pour restaurants et cafes.",
        ar: "تجربة قائمة رقمية للمطاعم والمقاهي.",
      },
      {
        en: "Foundation for a future restaurant SaaS or POS-connected product.",
        fr: "Base pour un futur SaaS restaurant ou produit connecte au POS.",
        ar: "أساس لمنتج SaaS للمطاعم أو نظام مرتبط بالـ POS مستقبلا.",
      },
    ],
    challenge: {
      en: "The challenge was making the order flow simple enough for customers while keeping the product extensible for restaurants.",
      fr: "Le defi etait de rendre le parcours de commande simple pour le client tout en gardant le produit extensible pour les restaurants.",
      ar: "كان التحدي جعل مسار الطلب بسيطا للزبون وقابلا للتوسع بالنسبة للمطعم.",
    },
    outcome: {
      en: "The project is a strong base for restaurant digital solutions, including ordering, dashboards and future POS integration.",
      fr: "Le projet constitue une bonne base pour des solutions digitales restaurant : commande, dashboards et integration POS future.",
      ar: "يمثل المشروع قاعدة قوية لحلول المطاعم الرقمية مثل الطلبات ولوحات التحكم وتكامل POS لاحقا.",
    },
  },
  {
    id: 4,
    slug: "portfolio",
    title: {
      en: "Personal Portfolio",
      fr: "Portfolio personnel",
      ar: "البورتفوليو الشخصي",
    },
    shortDescription: {
      en: "Multilingual personal brand website with dark/light theme, project case studies and CV access.",
      fr: "Site de marque personnelle multilingue avec themes clair/sombre, projets et acces au CV.",
      ar: "موقع شخصي متعدد اللغات مع الوضع الفاتح والداكن وعرض المشاريع وتحميل السيرة الذاتية.",
    },
    overview: {
      en: "This portfolio is the public foundation for my professional brand, combining experience, projects, contact paths and future SaaS/product updates.",
      fr: "Ce portfolio est la base publique de ma marque professionnelle, regroupant experience, projets, contact et futures mises a jour SaaS/produits.",
      ar: "هذا البورتفوليو هو الأساس العام لهويتي المهنية، يجمع الخبرة والمشاريع وطرق التواصل وتحديثات المنتجات المستقبلية.",
    },
    visualLabel: "Brand Platform",
    status: { en: "In progress", fr: "En cours", ar: "قيد التطوير" },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    githubUrl: "https://github.com/ahmedsoumri/My-Portfolio-Ahmed-Soumri",
    liveUrl: "https://www.ahmedsoumri.com/",
    features: [
      {
        en: "Multilingual content structure for English, French and Arabic.",
        fr: "Structure multilingue pour anglais, francais et arabe.",
        ar: "هيكلة محتوى متعددة اللغات للإنجليزية والفرنسية والعربية.",
      },
      {
        en: "Dark and light theme with animated sections.",
        fr: "Themes clair et sombre avec sections animees.",
        ar: "وضع فاتح وداكن مع أقسام متحركة.",
      },
      {
        en: "Centralized content data for easier future updates.",
        fr: "Donnees centralisees pour faciliter les futures mises a jour.",
        ar: "بيانات مركزية لتسهيل التحديثات مستقبلا.",
      },
    ],
    challenge: {
      en: "The challenge is making the site feel personal and credible while staying easy to maintain without a backend.",
      fr: "Le defi est de rendre le site personnel et credible tout en restant facile a maintenir sans backend.",
      ar: "التحدي هو جعل الموقع شخصيا وموثوقا وسهل الصيانة بدون Backend.",
    },
    outcome: {
      en: "The portfolio is being rebuilt as the central hub for opportunities, freelance work and future SaaS products.",
      fr: "Le portfolio est reconstruit comme hub central pour les opportunites, le freelance et les futurs produits SaaS.",
      ar: "يتم إعادة بناء البورتفوليو ليكون المركز الأساسي للفرص والعمل الحر ومنتجات SaaS المستقبلية.",
    },
    coverImage: {
      src: "/projects/portfolio/portfolio_home_screenshot.png",
      alt: {
        en: "Desktop homepage view of Ahmed Soumri's portfolio.",
        fr: "Vue desktop de la page d'accueil du portfolio Ahmed Soumri.",
        ar: "Desktop homepage view of Ahmed Soumri's portfolio.",
      },
    },
    screenshots: [
      {
        src: "/projects/portfolio/portfolio_home_screenshot.png",
        alt: {
          en: "Desktop homepage view of Ahmed Soumri's portfolio.",
          fr: "Vue desktop de la page d'accueil du portfolio Ahmed Soumri.",
          ar: "Desktop homepage view of Ahmed Soumri's portfolio.",
        },
        caption: {
          en: "Homepage layout with personal positioning, navigation, theme support and project access.",
          fr: "Page d'accueil avec positionnement personnel, navigation, theme clair/sombre et acces aux projets.",
          ar: "Homepage layout with personal positioning, navigation, theme support and project access.",
        },
      },
      {
        src: "/projects/portfolio/portfolio_project_details_desktop_screenshot.png",
        alt: {
          en: "Desktop project details page from Ahmed Soumri's portfolio.",
          fr: "Vue desktop d'une page de details projet du portfolio Ahmed Soumri.",
          ar: "Desktop project details page from Ahmed Soumri's portfolio.",
        },
        caption: {
          en: "Project case-study page with overview, features, challenge, outcome and media sections.",
          fr: "Page detail projet avec apercu, fonctionnalites, defi, resultat et sections media.",
          ar: "Project case-study page with overview, features, challenge, outcome and media sections.",
        },
      },
      {
        src: "/projects/portfolio/portfolio_home_mobile_screenshot.png",
        alt: {
          en: "Mobile homepage view of Ahmed Soumri's portfolio.",
          fr: "Vue mobile de la page d'accueil du portfolio Ahmed Soumri.",
          ar: "Mobile homepage view of Ahmed Soumri's portfolio.",
        },
        caption: {
          en: "Responsive mobile experience for the portfolio homepage.",
          fr: "Experience mobile responsive pour la page d'accueil du portfolio.",
          ar: "Responsive mobile experience for the portfolio homepage.",
        },
      },
    ],
  },
];
