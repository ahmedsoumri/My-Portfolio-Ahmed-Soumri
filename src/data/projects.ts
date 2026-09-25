import type { Project } from "./types";

// To add media later, put files under public/projects/<project-slug>/ and add:
// screenshots: [{ src: "/projects/careercraft/dashboard.png", alt: { en: "...", fr: "...", ar: "..." } }]
// videos: [{ src: "/projects/careercraft/demo.mp4", title: { en: "...", fr: "...", ar: "..." }, poster: "/projects/careercraft/poster.png" }]
export const projects: Project[] = [
  {
    id: 1,
    slug: "careercraft",
    title: {
      en: "CareerCraft",
      fr: "CareerCraft",
      ar: "CareerCraft",
    },
    shortDescription: {
      en: "AI-powered career assistant that matches CVs with job offers, generates cover letters and runs simulated interviews.",
      fr: "Assistant carriere avec IA qui compare les CV aux offres, genere des lettres de motivation et lance des entretiens simules.",
      ar: "منصة مهنية بالذكاء الاصطناعي تطابق السيرة الذاتية مع عروض العمل وتولد رسائل تحفيزية وتحاكي مقابلات العمل.",
    },
    overview: {
      en: "CareerCraft is a full-stack AI career assistant built around one job-search workflow: upload and review a CV, save job offers, analyze CV-to-offer fit, generate tailored cover letters, track applications on a Kanban board and practice contextual interview sessions.",
      fr: "CareerCraft est un assistant carriere full-stack avec IA construit autour d'un workflow de recherche d'emploi : uploader et reviser un CV, enregistrer des offres, analyser l'adequation CV-offre, generer des lettres de motivation, suivre les candidatures en Kanban et pratiquer des entretiens contextuels.",
      ar: "CareerCraft منصة Full Stack لمساعدة الباحثين عن العمل بالذكاء الاصطناعي: رفع ومراجعة السيرة الذاتية، حفظ عروض العمل، تحليل تطابق السيرة مع العرض، توليد رسالة تحفيزية، متابعة الطلبات عبر Kanban، والتدرب على مقابلات سياقية.",
    },
    visualLabel: "AI Career Platform",
    status: { en: "MVP built", fr: "MVP realise", ar: "MVP منجز" },
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Tailwind CSS", "AI"],
    features: [
      {
        en: "CV upload pipeline with PDF validation, AI parsing, parsed-data review and edit flow.",
        fr: "Pipeline d'upload CV avec validation PDF, parsing IA, revue et edition des donnees extraites.",
        ar: "مسار رفع السيرة الذاتية مع التحقق من PDF والتحليل بالذكاء الاصطناعي ومراجعة وتعديل البيانات المستخرجة.",
      },
      {
        en: "AI match analysis that scores how well a CV fits a saved job offer and keeps result history.",
        fr: "Analyse IA qui mesure l'adequation entre un CV et une offre enregistree, avec historique des resultats.",
        ar: "تحليل تطابق بالذكاء الاصطناعي يقيس مدى ملاءمة السيرة الذاتية لعرض عمل محفوظ مع حفظ سجل النتائج.",
      },
      {
        en: "Tailored cover letter generation with editing and version history.",
        fr: "Generation de lettres de motivation personnalisees avec edition et historique des versions.",
        ar: "توليد رسائل تحفيزية مخصصة مع إمكانية التعديل وحفظ تاريخ النسخ.",
      },
      {
        en: "Contextual mock interview sessions grounded in the selected application, CV and latest match analysis.",
        fr: "Entretiens simules contextuels bases sur la candidature selectionnee, le CV et la derniere analyse de matching.",
        ar: "مقابلات عمل تجريبية مبنية على الطلب المختار والسيرة الذاتية وآخر تحليل تطابق.",
      },
      {
        en: "Application tracker with drag-and-drop Kanban board, filters, details and quick actions.",
        fr: "Suivi des candidatures avec tableau Kanban drag-and-drop, filtres, details et actions rapides.",
        ar: "متابعة طلبات العمل عبر لوحة Kanban بالسحب والإفلات مع فلاتر وتفاصيل وإجراءات سريعة.",
      },
    ],
    challenge: {
      en: "The main challenge was connecting several AI actions into one practical workflow. CV parsing, job data, match scoring, cover letters and interview practice needed to share context so the product felt like a career workspace, not separate AI tools.",
      fr: "Le defi principal etait de connecter plusieurs actions IA dans un workflow utile. Parsing CV, donnees d'offre, scoring, lettres de motivation et entretien simule devaient partager le meme contexte pour donner une vraie experience carriere.",
      ar: "كان التحدي هو ربط عدة وظائف ذكاء اصطناعي في مسار عملي واحد. تحليل السيرة، بيانات العرض، نتيجة التطابق، الرسائل التحفيزية، والتدرب على المقابلات يجب أن تتشارك نفس السياق حتى تبدو المنصة كمساحة مهنية واحدة.",
    },
    outcome: {
      en: "The MVP includes authentication, profile management, CV and job management, AI matching, cover letters, mock interviews, application tracking, analytics and deployment documentation.",
      fr: "Le MVP inclut authentification, profil, gestion des CV et offres, matching IA, lettres de motivation, entretiens simules, suivi des candidatures, analytics et documentation de deploiement.",
      ar: "يشمل الـ MVP تسجيل الدخول وإدارة الملف الشخصي والسير الذاتية والعروض وMatching بالذكاء الاصطناعي ورسائل تحفيزية ومقابلات تجريبية وتتبع الطلبات وتحليلات ووثائق نشر.",
    },
    coverImage: {
      src: "/projects/careercraft/carrercraft-landing-page.png",
      alt: {
        en: "CareerCraft marketing homepage introducing the AI career assistant.",
        fr: "Page d'accueil marketing de CareerCraft presentant l'assistant carriere IA.",
        ar: "الصفحة التسويقية الرئيسية لمنصة CareerCraft المدعومة بالذكاء الاصطناعي.",
      },
    },
    screenshots: [
      {
        src: "/projects/careercraft/carrercraft-landing-page.png",
        alt: {
          en: "CareerCraft marketing homepage introducing the AI career assistant.",
          fr: "Page d'accueil marketing de CareerCraft presentant l'assistant carriere IA.",
          ar: "الصفحة التسويقية الرئيسية لمنصة CareerCraft المدعومة بالذكاء الاصطناعي.",
        },
        caption: {
          en: "Marketing homepage pitching the AI career workflow to job seekers.",
          fr: "Page marketing qui presente le workflow carriere IA aux chercheurs d'emploi.",
          ar: "الصفحة التسويقية التي تعرض مسار العمل بالذكاء الاصطناعي للباحثين عن عمل.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-login.png",
        alt: {
          en: "CareerCraft login screen.",
          fr: "Ecran de connexion CareerCraft.",
          ar: "شاشة تسجيل الدخول إلى CareerCraft.",
        },
        caption: {
          en: "Authentication screen for candidates and administrators.",
          fr: "Ecran d'authentification pour candidats et administrateurs.",
          ar: "شاشة مصادقة للمرشحين والمسؤولين.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-register.png",
        alt: {
          en: "CareerCraft sign-up screen for new candidates.",
          fr: "Ecran d'inscription CareerCraft pour les nouveaux candidats.",
          ar: "شاشة إنشاء حساب جديد للمرشحين في CareerCraft.",
        },
        caption: {
          en: "Self-serve registration to start building a career profile.",
          fr: "Inscription en libre-service pour demarrer un profil carriere.",
          ar: "تسجيل ذاتي لبدء إنشاء ملف مهني.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-profile.png",
        alt: {
          en: "Candidate profile management screen.",
          fr: "Ecran de gestion du profil candidat.",
          ar: "شاشة إدارة الملف الشخصي للمرشح.",
        },
        caption: {
          en: "Candidate profile with personal details and account settings.",
          fr: "Profil candidat avec informations personnelles et parametres du compte.",
          ar: "ملف المرشح مع البيانات الشخصية وإعدادات الحساب.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-upload-cv.png",
        alt: {
          en: "CV upload screen with PDF validation.",
          fr: "Ecran d'upload de CV avec validation PDF.",
          ar: "شاشة رفع السيرة الذاتية مع التحقق من ملف PDF.",
        },
        caption: {
          en: "CV upload pipeline that validates the PDF before AI parsing.",
          fr: "Pipeline d'upload qui valide le PDF avant le parsing IA.",
          ar: "مسار رفع يتحقق من ملف PDF قبل تحليله بالذكاء الاصطناعي.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-my-cvs.png",
        alt: {
          en: "Candidate CV library screen.",
          fr: "Ecran de bibliotheque de CV du candidat.",
          ar: "شاشة مكتبة السير الذاتية للمرشح.",
        },
        caption: {
          en: "Saved CVs with parsed data ready for review and edits.",
          fr: "CV enregistres avec donnees extraites pretes a etre revisees.",
          ar: "سير ذاتية محفوظة مع بيانات مستخرجة جاهزة للمراجعة والتعديل.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-my-jobs.png",
        alt: {
          en: "Candidate saved job offers screen.",
          fr: "Ecran des offres d'emploi enregistrees.",
          ar: "شاشة عروض العمل المحفوظة للمرشح.",
        },
        caption: {
          en: "Saved job offers tracked for matching, cover letters and applications.",
          fr: "Offres enregistrees pour le matching, les lettres et les candidatures.",
          ar: "عروض عمل محفوظة تُستخدم للمطابقة والرسائل التحفيزية والطلبات.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-create-job.png",
        alt: {
          en: "Screen for adding a new job offer.",
          fr: "Ecran d'ajout d'une nouvelle offre d'emploi.",
          ar: "شاشة إضافة عرض عمل جديد.",
        },
        caption: {
          en: "Manual job offer entry used as the base for AI matching.",
          fr: "Saisie manuelle d'une offre utilisee comme base pour le matching IA.",
          ar: "إدخال يدوي لعرض العمل يُستخدم كأساس للمطابقة بالذكاء الاصطناعي.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-ia-matching.png",
        alt: {
          en: "AI match analysis screen scoring CV fit against a job offer.",
          fr: "Ecran d'analyse IA du matching entre CV et offre.",
          ar: "شاشة تحليل التطابق بالذكاء الاصطناعي بين السيرة والعرض.",
        },
        caption: {
          en: "AI match analysis with a fit score and history of past results.",
          fr: "Analyse de matching IA avec score d'adequation et historique des resultats.",
          ar: "تحليل تطابق بالذكاء الاصطناعي مع درجة الملاءمة وسجل النتائج السابقة.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-cover-letters.png",
        alt: {
          en: "AI-generated cover letters screen with edit and version history.",
          fr: "Ecran des lettres de motivation generees avec edition et historique.",
          ar: "شاشة الرسائل التحفيزية المولدة بالذكاء الاصطناعي مع التعديل وسجل النسخ.",
        },
        caption: {
          en: "Tailored cover letters generated per job offer, with editing and version history.",
          fr: "Lettres de motivation personnalisees par offre, avec edition et historique des versions.",
          ar: "رسائل تحفيزية مخصصة لكل عرض عمل مع إمكانية التعديل وحفظ سجل النسخ.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-mock-interviews.png",
        alt: {
          en: "Contextual mock interview screen.",
          fr: "Ecran d'entretien simule contextuel.",
          ar: "شاشة مقابلة عمل تجريبية سياقية.",
        },
        caption: {
          en: "Mock interview practice grounded in the selected application and CV.",
          fr: "Entretien simule base sur la candidature et le CV selectionnes.",
          ar: "مقابلة تجريبية مبنية على الطلب والسيرة الذاتية المختارَين.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-applications-managemnt.png",
        alt: {
          en: "Application tracker with a drag-and-drop Kanban board.",
          fr: "Suivi des candidatures avec tableau Kanban drag-and-drop.",
          ar: "متابعة الطلبات عبر لوحة Kanban بالسحب والإفلات.",
        },
        caption: {
          en: "Kanban board tracking every application stage with filters and quick actions.",
          fr: "Tableau Kanban qui suit chaque etape de candidature avec filtres et actions rapides.",
          ar: "لوحة Kanban تتابع كل مرحلة من مراحل الطلب مع فلاتر وإجراءات سريعة.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-candidate-analytic.png",
        alt: {
          en: "Candidate analytics dashboard.",
          fr: "Dashboard analytics du candidat.",
          ar: "لوحة تحليلات المرشح.",
        },
        caption: {
          en: "Candidate-facing analytics summarizing matches, applications and progress.",
          fr: "Analytics candidat resumant les matchings, candidatures et progression.",
          ar: "تحليلات موجهة للمرشح تلخص المطابقات والطلبات والتقدم المحرز.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-admin-dashboard.png",
        alt: {
          en: "Admin dashboard with platform-wide metrics.",
          fr: "Dashboard admin avec indicateurs globaux de la plateforme.",
          ar: "لوحة تحكم الإدارة مع مؤشرات عامة للمنصة.",
        },
        caption: {
          en: "Admin overview of platform usage, users and activity.",
          fr: "Vue d'ensemble admin de l'usage de la plateforme, des utilisateurs et de l'activite.",
          ar: "نظرة إدارية عامة على استخدام المنصة والمستخدمين والنشاط.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-admin-user-managemnt.png",
        alt: {
          en: "Admin user management screen.",
          fr: "Ecran admin de gestion des utilisateurs.",
          ar: "شاشة إدارة المستخدمين للإدارة.",
        },
        caption: {
          en: "Admin controls for managing candidate accounts and access.",
          fr: "Controles admin pour gerer les comptes candidats et leurs acces.",
          ar: "أدوات إدارية لإدارة حسابات المرشحين وصلاحياتهم.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-admin-ia-usage.png",
        alt: {
          en: "Admin screen tracking AI usage across the platform.",
          fr: "Ecran admin de suivi de l'usage IA sur la plateforme.",
          ar: "شاشة إدارية لمتابعة استخدام الذكاء الاصطناعي على المنصة.",
        },
        caption: {
          en: "AI usage monitoring to track matching, cover-letter and interview requests.",
          fr: "Suivi de l'usage IA pour le matching, les lettres et les entretiens.",
          ar: "متابعة استخدام الذكاء الاصطناعي لطلبات المطابقة والرسائل والمقابلات.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-admin-setting.png",
        alt: {
          en: "Admin platform settings screen.",
          fr: "Ecran des parametres plateforme admin.",
          ar: "شاشة إعدادات المنصة للإدارة.",
        },
        caption: {
          en: "Platform-wide configuration and settings for administrators.",
          fr: "Configuration et parametres globaux de la plateforme pour les administrateurs.",
          ar: "إعدادات وضبط عامة للمنصة خاصة بالمسؤولين.",
        },
      },
      {
        src: "/projects/careercraft/carrercraft-not-found-page.png",
        alt: {
          en: "Custom 404 not-found page.",
          fr: "Page 404 personnalisee.",
          ar: "صفحة 404 مخصصة لغير الموجود.",
        },
        caption: {
          en: "Custom not-found page keeping navigation consistent with the rest of the app.",
          fr: "Page 404 personnalisee qui garde une navigation coherente avec le reste de l'app.",
          ar: "صفحة 404 مخصصة تحافظ على تناسق التنقل مع بقية التطبيق.",
        },
      },
    ],
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
    projectType: "mobile",
    title: {
      en: "YallaOrder",
      fr: "YallaOrder",
      ar: "YallaOrder",
    },
    shortDescription: {
      en: "Expo mobile app for cafes and restaurants where customers scan a table QR code, browse the menu and order from their table.",
      fr: "Application mobile Expo pour cafes et restaurants : le client scanne le QR de la table, consulte le menu et commande depuis sa place.",
      ar: "تطبيق موبايل Expo للمقاهي والمطاعم يسمح للزبون بمسح QR الطاولة وتصفح القائمة والطلب من مكانه.",
    },
    overview: {
      en: "YallaOrder is a multi-role QR ordering platform for dine-in service. Managers create tables, QR codes, menu categories, products, promo codes and staff accounts; guests scan a table QR code, order from the mobile app, and track the order while waiters manage live service status.",
      fr: "YallaOrder est une plateforme mobile de commande par QR pour le service sur place. Les managers creent les tables, QR codes, categories, produits, codes promo et comptes staff; les clients scannent le QR de la table, commandent depuis l'application et suivent la commande pendant que les serveurs gerent les statuts en direct.",
      ar: "YallaOrder منصة طلبات عبر QR للخدمة داخل المطاعم والمقاهي. المدير ينشئ الطاولات وأكواد QR والفئات والمنتجات والكوبونات وحسابات الفريق، والزبون يمسح QR الطاولة ويطلب من التطبيق ويتابع حالة الطلب بينما يتابع النادل الطلبات المباشرة.",
    },
    visualLabel: "Mobile QR Ordering App",
    status: { en: "Project built", fr: "Projet realise", ar: "مشروع منجز" },
    technologies: ["Expo", "React Native", "TypeScript", "Express", "Prisma", "MongoDB", "JWT", "Zod"],
    features: [
      {
        en: "Customer and guest flow with QR scan, manual table entry, live menu, product details, cart, promo codes and order tracking.",
        fr: "Parcours client/visiteur avec scan QR, saisie manuelle de table, menu live, details produit, panier, codes promo et suivi de commande.",
        ar: "مسار للزبون والضيف يشمل مسح QR أو إدخال رقم الطاولة، قائمة مباشرة، تفاصيل المنتج، السلة، الكوبونات وتتبع الطلب.",
      },
      {
        en: "Manager workspace for dashboard metrics, menu categories, products, tables, QR code generation, orders and promo codes.",
        fr: "Espace manager pour dashboard, categories, produits, tables, generation QR, commandes et codes promo.",
        ar: "مساحة مدير لإحصائيات المطعم، الفئات، المنتجات، الطاولات، توليد QR، الطلبات والكوبونات.",
      },
      {
        en: "Waiter workflow with live orders, status filters, ready board, table queue and order detail screens.",
        fr: "Workflow serveur avec commandes live, filtres par statut, ready board, file par table et details commande.",
        ar: "مسار للنادل يشمل الطلبات المباشرة، فلاتر الحالة، لوحة الطلبات الجاهزة، قائمة الطاولات وتفاصيل الطلب.",
      },
      {
        en: "Role-based access for guest customers, authenticated customers, waiters, managers and super admins.",
        fr: "Acces par role pour clients invites, clients connectes, serveurs, managers et super admins.",
        ar: "صلاحيات حسب الدور للضيف والزبون المسجل والنادل والمدير والمشرف العام.",
      },
      {
        en: "Rewards and promo logic with welcome spin, percentage/fixed discounts, usage limits and combined discount pricing.",
        fr: "Logique de recompenses et promos avec welcome spin, remises fixes/pourcentage, limites d'utilisation et calcul combine.",
        ar: "منطق مكافآت وكوبونات يشمل هدية ترحيب وخصومات نسبة أو قيمة ثابتة وحدود استخدام وحساب خصومات مركبة.",
      },
    ],
    challenge: {
      en: "The challenge was designing one mobile app that feels simple for a guest scanning a table, while still supporting operational roles for waiters, managers and super admins with reliable order status, pricing, promo and QR flows.",
      fr: "Le defi etait de concevoir une seule app mobile simple pour le client qui scanne une table, tout en supportant les roles operationnels des serveurs, managers et super admins avec statuts, prix, promos et QR fiables.",
      ar: "كان التحدي بناء تطبيق موبايل واحد بسيط للزبون الذي يمسح QR الطاولة، وفي نفس الوقت يدعم أدوار النادل والمدير والمشرف مع حالات الطلب والتسعير والكوبونات وQR بشكل موثوق.",
    },
    outcome: {
      en: "The project became a complete mobile ordering MVP with real screenshots, seeded demo data, backend health checks, daily logs, dynamic Expo API host detection and a strong base for restaurant ordering or POS-connected products.",
      fr: "Le projet est devenu un MVP mobile complet avec captures reelles, donnees demo, health checks backend, logs journaliers, detection dynamique de l'API Expo et une base solide pour un produit restaurant ou connecte POS.",
      ar: "أصبح المشروع MVP موبايل كامل مع صور حقيقية وبيانات تجريبية وHealth checks وLogs يومية واكتشاف تلقائي لعنوان API في Expo وقاعدة قوية لمنتج طلبات مطاعم أو تكامل POS.",
    },
    coverImage: {
      src: "/projects/yallaorder/qr-scan.jpg",
      alt: {
        en: "YallaOrder QR scan screen for table ordering.",
        fr: "Ecran de scan QR YallaOrder pour commande a table.",
        ar: "شاشة مسح QR في YallaOrder للطلب من الطاولة.",
      },
    },
    screenshots: [
      {
        src: "/projects/yallaorder/qr-scan.jpg",
        alt: {
          en: "QR scan and table entry screen.",
          fr: "Ecran scan QR et saisie de table.",
          ar: "شاشة مسح QR وإدخال الطاولة.",
        },
        caption: {
          en: "Customer entry flow with QR scan and manual table code fallback.",
          fr: "Entree client avec scan QR et saisie manuelle du code table.",
          ar: "دخول الزبون عبر QR أو إدخال رقم الطاولة يدويا.",
        },
      },
      {
        src: "/projects/yallaorder/menu-customer.jpg",
        alt: {
          en: "Customer menu screen.",
          fr: "Ecran menu client.",
          ar: "شاشة قائمة الطعام للزبون.",
        },
        caption: {
          en: "Live menu preview for the selected table.",
          fr: "Apercu du menu live pour la table selectionnee.",
          ar: "عرض القائمة المباشرة للطاولة المختارة.",
        },
      },
      {
        src: "/projects/yallaorder/cart-customer.jpg",
        alt: {
          en: "Customer cart screen.",
          fr: "Ecran panier client.",
          ar: "شاشة سلة الزبون.",
        },
        caption: {
          en: "Cart review with product images, quantities, notes and total.",
          fr: "Panier avec images, quantites, notes et total.",
          ar: "مراجعة السلة مع الصور والكميات والملاحظات والمجموع.",
        },
      },
      {
        src: "/projects/yallaorder/order-tracking.jpg",
        alt: {
          en: "Customer order tracking screen.",
          fr: "Ecran de suivi commande client.",
          ar: "شاشة تتبع الطلب للزبون.",
        },
        caption: {
          en: "Guest checkout keeps the customer on live order tracking.",
          fr: "Le checkout invite garde le client sur le suivi live.",
          ar: "بعد طلب الضيف يبقى الزبون في شاشة تتبع مباشرة.",
        },
      },
      {
        src: "/projects/yallaorder/waiter-live-orders.jpg",
        alt: {
          en: "Waiter live orders screen.",
          fr: "Ecran commandes live serveur.",
          ar: "شاشة الطلبات المباشرة للنادل.",
        },
        caption: {
          en: "Waiter workflow for active orders, table context and status updates.",
          fr: "Workflow serveur pour commandes actives, contexte table et statuts.",
          ar: "مسار النادل للطلبات النشطة ومعلومات الطاولة وتحديث الحالات.",
        },
      },
      {
        src: "/projects/yallaorder/manager-dashboard.jpg",
        alt: {
          en: "Manager dashboard screen.",
          fr: "Dashboard manager.",
          ar: "لوحة المدير.",
        },
        caption: {
          en: "Manager dashboard with revenue, orders, live queue and discounts.",
          fr: "Dashboard manager avec revenus, commandes, file live et remises.",
          ar: "لوحة المدير للإيرادات والطلبات والقائمة المباشرة والخصومات.",
        },
      },
      {
        src: "/projects/yallaorder/manage-tables.jpg",
        alt: {
          en: "Manager table management screen.",
          fr: "Gestion des tables manager.",
          ar: "إدارة الطاولات للمدير.",
        },
        caption: {
          en: "Table management with seats, QR shortcut and table actions.",
          fr: "Gestion des tables avec places, raccourci QR et actions.",
          ar: "إدارة الطاولات مع عدد المقاعد واختصار QR والإجراءات.",
        },
      },
      {
        src: "/projects/yallaorder/table-qr-code.jpg",
        alt: {
          en: "Generated table QR code screen.",
          fr: "Ecran QR code de table genere.",
          ar: "شاشة QR مولد للطاولة.",
        },
        caption: {
          en: "Generated table QR code ready for printing or sharing.",
          fr: "QR code de table pret a imprimer ou partager.",
          ar: "QR للطاولة جاهز للطباعة أو المشاركة.",
        },
      },
    ],
  },
  {
    id: 5,
    slug: "sity-tn",
    title: {
      en: "sity.tn",
      fr: "sity.tn",
      ar: "sity.tn",
    },
    shortDescription: {
      en: "E-commerce SaaS for Tunisian merchants to launch storefronts, manage catalogs and handle cash-on-delivery operations.",
      fr: "SaaS e-commerce pour les commercants tunisiens afin de lancer une boutique, gerer le catalogue et traiter les commandes en paiement a la livraison.",
      ar: "منصة SaaS للتجارة الإلكترونية في تونس تساعد التجار على إطلاق متاجرهم وإدارة المنتجات وطلبات الدفع عند الاستلام.",
    },
    overview: {
      en: "sity.tn is a multi-tenant e-commerce SaaS built for Tunisian merchants. It combines a public storefront, merchant dashboard, admin platform, cash-on-delivery workflows, subscriptions, analytics, notifications and a mobile merchant workspace into one product.",
      fr: "sity.tn est une plateforme SaaS e-commerce multi-boutique concue pour les commercants tunisiens. Elle regroupe une vitrine publique, un dashboard marchand, une plateforme admin, les workflows de paiement a la livraison, les abonnements, l'analytics, les notifications et un espace mobile marchand.",
      ar: "sity.tn منصة تجارة إلكترونية متعددة المتاجر موجهة للتجار في تونس. تجمع بين واجهة متجر عامة ولوحة تحكم للتاجر ولوحة إدارة وطلبات الدفع عند الاستلام والاشتراكات والتحليلات والإشعارات وتطبيق تاجر على الهاتف.",
    },
    visualLabel: "Tunisia E-commerce SaaS",
    status: { en: "MVP deployed", fr: "MVP deploye", ar: "MVP منشور" },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Expo",
    ],
    liveUrl: "https://sity.tn/",
    features: [
      {
        en: "Merchant dashboard for shop setup, storefront branding, categories, products, variants, banners, coupons and orders.",
        fr: "Dashboard marchand pour configurer la boutique, l'identite visuelle, les categories, produits, variantes, bannieres, coupons et commandes.",
        ar: "لوحة تاجر لإعداد المتجر والهوية البصرية والفئات والمنتجات والمتغيرات واللافتات والكوبونات والطلبات.",
      },
      {
        en: "Public storefront at /store/[slug] and wildcard shop subdomains, with catalog, product pages, cart, checkout and order tracking.",
        fr: "Vitrine publique sur /store/[slug] et sous-domaines de boutiques, avec catalogue, fiches produit, panier, checkout et suivi de commande.",
        ar: "واجهة متجر عامة عبر /store/[slug] ونطاقات فرعية للمتاجر مع كتالوج وصفحات منتجات وسلة وCheckout وتتبع الطلب.",
      },
      {
        en: "Cash-on-delivery operations with confirmation queues, WhatsApp links, status history, exports, checkout recovery and customer intelligence.",
        fr: "Operations COD avec file de confirmation, liens WhatsApp, historique des statuts, exports, recuperation checkout et intelligence client.",
        ar: "إدارة الدفع عند الاستلام مع قائمة تأكيد وروابط WhatsApp وتاريخ الحالات والتصدير واسترجاع الطلبات غير المكتملة ومعلومات العملاء.",
      },
      {
        en: "Admin workspace for users, shops, plans, manual payment proofs, feature controls, audit logs and platform KPIs.",
        fr: "Espace admin pour utilisateurs, boutiques, plans, preuves de paiement manuel, controles de fonctionnalites, audit logs et KPIs plateforme.",
        ar: "مساحة إدارة للمستخدمين والمتاجر والخطط وإثباتات الدفع اليدوي والتحكم في الميزات وسجلات التدقيق ومؤشرات المنصة.",
      },
      {
        en: "Merchant mobile app foundation with login, KPIs, products, categories, orders, notifications and settings.",
        fr: "Base d'application mobile marchand avec connexion, KPIs, produits, categories, commandes, notifications et parametres.",
        ar: "قاعدة تطبيق هاتف للتاجر تشمل تسجيل الدخول والمؤشرات والمنتجات والفئات والطلبات والإشعارات والإعدادات.",
      },
    ],
    challenge: {
      en: "The challenge was turning a broad commerce idea into a coherent SaaS product for the Tunisian market: multi-tenant shops, plan limits, COD operations, Arabic/French/English support, storefront SEO and production deployment all had to work together.",
      fr: "Le defi etait de transformer une idee e-commerce large en produit SaaS coherent pour le marche tunisien : boutiques multi-tenant, limites par plan, operations COD, support arabe/francais/anglais, SEO storefront et deploiement production devaient fonctionner ensemble.",
      ar: "كان التحدي هو تحويل فكرة تجارة إلكترونية واسعة إلى منتج SaaS متماسك للسوق التونسية، مع متاجر متعددة، حدود حسب الخطة، عمليات الدفع عند الاستلام، دعم العربية والفرنسية والإنجليزية، SEO للمتاجر ونشر إنتاجي.",
    },
    outcome: {
      en: "The MVP now has a production-ready foundation: deployed web and API services, merchant and admin flows, Tunisia-focused COD workflows, shared validation schemas, and a roadmap for payment gateways, delivery rules and deeper automation.",
      fr: "Le MVP possede maintenant une base prete pour la production : services web et API deployes, parcours marchand et admin, workflows COD adaptes a la Tunisie, schemas de validation partages et roadmap pour paiements, livraison et automatisation.",
      ar: "أصبح للـ MVP أساس جاهز للإنتاج: خدمات Web وAPI منشورة، مسارات للتاجر والإدارة، عمليات COD مناسبة لتونس، مخططات تحقق مشتركة، وخارطة طريق للدفع والتوصيل والأتمتة.",
    },
    coverImage: {
      src: "/projects/sity-tn/sass-landing-page.png",
      alt: {
        en: "sity.tn marketing homepage introducing the e-commerce SaaS.",
        fr: "Page d'accueil marketing de sity.tn presentant le SaaS e-commerce.",
        ar: "الصفحة التسويقية الرئيسية لمنصة sity.tn.",
      },
    },
    screenshots: [
      {
        src: "/projects/sity-tn/sass-landing-page.png",
        alt: {
          en: "sity.tn marketing homepage introducing the e-commerce SaaS.",
          fr: "Page d'accueil marketing de sity.tn presentant le SaaS e-commerce.",
          ar: "الصفحة التسويقية الرئيسية لمنصة sity.tn.",
        },
        caption: {
          en: "Marketing homepage pitching the platform to Tunisian merchants.",
          fr: "Page marketing qui presente la plateforme aux commercants tunisiens.",
          ar: "الصفحة التسويقية التي تعرض المنصة للتجار في تونس.",
        },
      },
      {
        src: "/projects/sity-tn/login-page.png",
        alt: {
          en: "Merchant login screen for the sity.tn dashboard.",
          fr: "Ecran de connexion marchand pour le dashboard sity.tn.",
          ar: "شاشة تسجيل دخول التاجر إلى لوحة sity.tn.",
        },
        caption: {
          en: "Merchant login with email/password and Google sign-in.",
          fr: "Connexion marchand par email/mot de passe ou avec Google.",
          ar: "تسجيل دخول التاجر عبر البريد وكلمة المرور أو عبر جوجل.",
        },
      },
      {
        src: "/projects/sity-tn/register-page.png",
        alt: {
          en: "Merchant sign-up flow to create a new sity.tn store.",
          fr: "Parcours d'inscription marchand pour creer une boutique sity.tn.",
          ar: "خطوات إنشاء حساب تاجر جديد في sity.tn.",
        },
        caption: {
          en: "Self-serve sign-up to start a free store in minutes.",
          fr: "Inscription en libre-service pour lancer une boutique gratuite en quelques minutes.",
          ar: "تسجيل ذاتي لإطلاق متجر مجاني في دقائق.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-dashboard.png",
        alt: {
          en: "Merchant dashboard with revenue, orders and fulfillment KPIs.",
          fr: "Dashboard marchand avec revenus, commandes et KPIs de livraison.",
          ar: "لوحة تحكم التاجر مع الإيرادات والطلبات ومؤشرات التوصيل.",
        },
        caption: {
          en: "Merchant dashboard: revenue trend, order status and delivery rate at a glance.",
          fr: "Dashboard marchand : tendance des revenus, statut des commandes et taux de livraison en un coup d'oeil.",
          ar: "لوحة التاجر: اتجاه الإيرادات وحالة الطلبات ومعدل التوصيل في لمحة واحدة.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-storebuilder.png",
        alt: {
          en: "Storefront builder for shop identity, branding, theme and contact info.",
          fr: "Storefront Builder pour l'identite, la marque, le theme et les contacts de la boutique.",
          ar: "أداة بناء المتجر لإعداد الهوية والعلامة والثيم وبيانات التواصل.",
        },
        caption: {
          en: "Step-by-step storefront builder with a live preview of the shop.",
          fr: "Storefront Builder guide etape par etape avec un apercu live de la boutique.",
          ar: "أداة بناء المتجر خطوة بخطوة مع معاينة مباشرة للمتجر.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-product-managemnt.png",
        alt: {
          en: "Product catalog management with stock, pricing and visibility controls.",
          fr: "Gestion du catalogue produits avec stock, prix et visibilite.",
          ar: "إدارة كتالوج المنتجات مع المخزون والأسعار والظهور.",
        },
        caption: {
          en: "Product management: pricing, stock, status and featured toggles.",
          fr: "Gestion des produits : prix, stock, statut et mise en avant.",
          ar: "إدارة المنتجات: الأسعار والمخزون والحالة والتمييز.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-categorie-management.png",
        alt: {
          en: "Category management for organizing the storefront catalog.",
          fr: "Gestion des categories pour organiser le catalogue storefront.",
          ar: "إدارة الفئات لتنظيم كتالوج المتجر.",
        },
        caption: {
          en: "Category management to keep the storefront catalog easy to browse.",
          fr: "Gestion des categories pour garder un catalogue storefront facile a parcourir.",
          ar: "إدارة الفئات لتسهيل تصفح كتالوج المتجر.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-order-managament.png",
        alt: {
          en: "Cash-on-delivery order queue with confirm and cancel actions.",
          fr: "File de commandes paiement a la livraison avec actions confirmer/annuler.",
          ar: "قائمة طلبات الدفع عند الاستلام مع إجراءات التأكيد والإلغاء.",
        },
        caption: {
          en: "COD order operations: confirm, cancel, call and export from one queue.",
          fr: "Operations COD : confirmer, annuler, appeler et exporter depuis une seule file.",
          ar: "عمليات الدفع عند الاستلام: تأكيد وإلغاء واتصال وتصدير من قائمة واحدة.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-subscription-plan.png",
        alt: {
          en: "Merchant subscription page with current plan and usage limits.",
          fr: "Page d'abonnement marchand avec plan actuel et limites d'utilisation.",
          ar: "صفحة اشتراك التاجر مع الخطة الحالية وحدود الاستخدام.",
        },
        caption: {
          en: "Subscription and plan usage tracking for the merchant's shop.",
          fr: "Suivi de l'abonnement et de l'utilisation du plan pour la boutique.",
          ar: "متابعة الاشتراك واستخدام الخطة الخاصة بمتجر التاجر.",
        },
      },
      {
        src: "/projects/sity-tn/merchant-team-management.png",
        alt: {
          en: "Team management page for inviting staff and managers with roles.",
          fr: "Page de gestion d'equipe pour inviter du personnel avec des roles.",
          ar: "صفحة إدارة الفريق لدعوة الموظفين وتحديد الأدوار.",
        },
        caption: {
          en: "Team management with role-based access for staff and managers.",
          fr: "Gestion d'equipe avec acces base sur les roles pour le personnel.",
          ar: "إدارة الفريق مع صلاحيات حسب الدور لكل موظف.",
        },
      },
      {
        src: "/projects/sity-tn/storefront-landingpage.png",
        alt: {
          en: "Live public storefront homepage for a merchant shop on sity.tn.",
          fr: "Page d'accueil publique en live d'une boutique marchande sur sity.tn.",
          ar: "الصفحة الرئيسية العامة المباشرة لمتجر تاجر على sity.tn.",
        },
        caption: {
          en: "Public storefront homepage generated for a live merchant shop.",
          fr: "Page d'accueil storefront publique generee pour une boutique marchande live.",
          ar: "الصفحة الرئيسية العامة التي تُنشأ لمتجر تاجر مباشر.",
        },
      },
      {
        src: "/projects/sity-tn/storefront-all-products.png",
        alt: {
          en: "Storefront catalog page with category filters and product grid.",
          fr: "Page catalogue storefront avec filtres par categorie et grille produits.",
          ar: "صفحة كتالوج المتجر مع فلاتر الفئات وشبكة المنتجات.",
        },
        caption: {
          en: "Storefront catalog with category filters, sorting and quick order.",
          fr: "Catalogue storefront avec filtres par categorie, tri et commande rapide.",
          ar: "كتالوج المتجر مع فلاتر الفئات والفرز والطلب السريع.",
        },
      },
      {
        src: "/projects/sity-tn/storefront-product-details.png",
        alt: {
          en: "Storefront product detail page with variants and stock status.",
          fr: "Page produit storefront avec variantes et statut de stock.",
          ar: "صفحة تفاصيل المنتج مع المتغيرات وحالة المخزون.",
        },
        caption: {
          en: "Product detail page with variant selection and stock availability.",
          fr: "Page produit avec selection de variantes et disponibilite du stock.",
          ar: "صفحة تفاصيل المنتج مع اختيار المتغيرات وتوفر المخزون.",
        },
      },
      {
        src: "/projects/sity-tn/storefront-checkout.png",
        alt: {
          en: "Cash-on-delivery checkout with contact and delivery address form.",
          fr: "Checkout paiement a la livraison avec formulaire contact et adresse.",
          ar: "صفحة الدفع عند الاستلام مع نموذج التواصل وعنوان التوصيل.",
        },
        caption: {
          en: "Cash-on-delivery checkout with order summary and upsell add-on.",
          fr: "Checkout COD avec resume de commande et produit complementaire.",
          ar: "صفحة الدفع عند الاستلام مع ملخص الطلب ومنتج إضافي مقترح.",
        },
      },
      {
        src: "/projects/sity-tn/storefront-track-order.png",
        alt: {
          en: "Order tracking page showing status timeline for a customer order.",
          fr: "Page de suivi de commande avec la timeline de statut.",
          ar: "صفحة تتبع الطلب مع مخطط زمني لحالة الطلب.",
        },
        caption: {
          en: "Customer order tracking by reference and phone, with status timeline.",
          fr: "Suivi de commande client par reference et telephone, avec timeline de statut.",
          ar: "تتبع طلب العميل عبر الرقم المرجعي والهاتف مع مخطط زمني للحالة.",
        },
      },
      {
        src: "/projects/sity-tn/admin-dashboard.png",
        alt: {
          en: "Platform admin overview with shop health and attention queue.",
          fr: "Vue d'ensemble admin plateforme avec sante des boutiques et file d'attention.",
          ar: "نظرة عامة للإدارة مع صحة المتاجر وقائمة الأولويات.",
        },
        caption: {
          en: "Admin overview: shop health, pending payments, trials and COD volume.",
          fr: "Vue admin : sante des boutiques, paiements en attente, essais et volume COD.",
          ar: "نظرة الإدارة: صحة المتاجر والمدفوعات المعلقة والتجارب وحجم طلبات COD.",
        },
      },
      {
        src: "/projects/sity-tn/admin-shop-managemnt.png",
        alt: {
          en: "Admin shops list with owner, commerce activity and status controls.",
          fr: "Liste admin des boutiques avec proprietaire, activite et statut.",
          ar: "قائمة إدارة المتاجر مع المالك والنشاط التجاري والحالة.",
        },
        caption: {
          en: "Admin shop directory with ownership, activity and status controls.",
          fr: "Repertoire admin des boutiques avec propriete, activite et controle de statut.",
          ar: "دليل إدارة المتاجر مع الملكية والنشاط والتحكم في الحالة.",
        },
      },
      {
        src: "/projects/sity-tn/admin-user-managemnt.png",
        alt: {
          en: "Admin user management with verification and activation controls.",
          fr: "Gestion admin des utilisateurs avec verification et activation.",
          ar: "إدارة المستخدمين من لوحة الإدارة مع التحقق والتفعيل.",
        },
        caption: {
          en: "Platform-wide user management with roles, plans and activation status.",
          fr: "Gestion des utilisateurs sur toute la plateforme avec roles, plans et statut.",
          ar: "إدارة المستخدمين على مستوى المنصة مع الأدوار والخطط وحالة التفعيل.",
        },
      },
      {
        src: "/projects/sity-tn/admin-plan-managemnt.png",
        alt: {
          en: "Admin plan catalog with pricing, trial windows and feature counts.",
          fr: "Catalogue admin des plans avec prix, periode d'essai et fonctionnalites.",
          ar: "كتالوج إدارة الخطط مع الأسعار وفترة التجربة وعدد الميزات.",
        },
        caption: {
          en: "Plan catalog controlling pricing, trials and feature limits per tier.",
          fr: "Catalogue des plans qui pilote prix, essais et limites de fonctionnalites.",
          ar: "كتالوج الخطط الذي يتحكم في الأسعار والتجارب وحدود الميزات لكل باقة.",
        },
      },
      {
        src: "/projects/sity-tn/admin-global-feature-flag.png",
        alt: {
          en: "Global platform controls for maintenance mode and feature flags.",
          fr: "Controles globaux plateforme pour le mode maintenance et les feature flags.",
          ar: "أدوات التحكم العامة للمنصة لوضع الصيانة وميزات التفعيل.",
        },
        caption: {
          en: "Platform-wide switches: maintenance mode, registration and shop creation.",
          fr: "Interrupteurs globaux : mode maintenance, inscriptions et creation de boutiques.",
          ar: "مفاتيح تحكم عامة: وضع الصيانة والتسجيل وإنشاء المتاجر.",
        },
      },
      {
        src: "/projects/sity-tn/admin-auditlogs.png",
        alt: {
          en: "Admin audit log listing platform actions with actor and target.",
          fr: "Journal d'audit admin listant les actions plateforme avec acteur et cible.",
          ar: "سجل تدقيق الإدارة يعرض إجراءات المنصة مع الفاعل والهدف.",
        },
        caption: {
          en: "Audit log tracking every admin action with actor, target and timestamp.",
          fr: "Journal d'audit qui trace chaque action admin avec acteur, cible et horodatage.",
          ar: "سجل تدقيق يوثق كل إجراء إداري مع الفاعل والهدف والتوقيت.",
        },
      },
    ],
  },
  {
    id: 6,
    slug: "telegram-ecommerce-monitor",
    title: {
      en: "Telegram Ecommerce Monitor",
      fr: "Telegram Ecommerce Monitor",
      ar: "Telegram Ecommerce Monitor",
    },
    shortDescription: {
      en: "Data automation dashboard for authorized Telegram ecommerce channels, extracting products, media and prices into a searchable catalog.",
      fr: "Dashboard d'automatisation de donnees pour canaux e-commerce Telegram autorises, avec extraction produits, medias et prix dans un catalogue searchable.",
      ar: "لوحة أتمتة بيانات لقنوات Telegram التجارية المصرح بها، تستخرج المنتجات والوسائط والأسعار إلى كتالوج قابل للبحث.",
    },
    overview: {
      en: "Telegram Ecommerce Monitor is a full-stack data tool for monitoring ecommerce product posts from authorized Telegram channels. It combines Telegram MTProto authentication, channel syncing, queued scraping jobs, realtime progress, product extraction, media handling, search, filtering, export and price comparison.",
      fr: "Telegram Ecommerce Monitor est un outil full-stack de donnees pour suivre les publications produits de canaux Telegram autorises. Il combine authentification MTProto, synchronisation des canaux, jobs de scraping en queue, progression temps reel, extraction produits, gestion media, recherche, filtres, export et comparaison de prix.",
      ar: "Telegram Ecommerce Monitor أداة Full Stack لمراقبة منشورات المنتجات من قنوات Telegram المصرح بها. تجمع بين مصادقة MTProto ومزامنة القنوات ووظائف استخراج في الخلفية وتتبع فوري واستخراج المنتجات والوسائط والبحث والتصفية والتصدير ومقارنة الأسعار.",
    },
    visualLabel: "Data Automation Dashboard",
    status: { en: "Project built", fr: "Projet realise", ar: "مشروع منجز" },
    technologies: ["Next.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "BullMQ", "MinIO", "Socket.IO"],
    features: [
      {
        en: "Telegram MTProto login with phone verification, session handling and channel synchronization.",
        fr: "Connexion Telegram MTProto avec verification telephone, gestion de session et synchronisation des canaux.",
        ar: "تسجيل دخول Telegram MTProto عبر التحقق بالهاتف مع إدارة الجلسة ومزامنة القنوات.",
      },
      {
        en: "Background scraping workers powered by BullMQ and Redis with realtime job progress over WebSockets.",
        fr: "Workers de scraping en arriere-plan avec BullMQ/Redis et progression temps reel via WebSockets.",
        ar: "Workers لاستخراج البيانات في الخلفية باستخدام BullMQ وRedis مع تقدم فوري عبر WebSockets.",
      },
      {
        en: "Product extraction from Telegram messages using rule-based parsing with optional Gemini AI cleanup.",
        fr: "Extraction produits depuis les messages Telegram via parsing par regles, avec nettoyage Gemini AI optionnel.",
        ar: "استخراج المنتجات من رسائل Telegram عبر قواعد Parsing مع تنظيف اختياري باستخدام Gemini AI.",
      },
      {
        en: "Media download and storage flow for photos, videos and documents using local storage or MinIO/S3.",
        fr: "Telechargement et stockage des photos, videos et documents via stockage local ou MinIO/S3.",
        ar: "تنزيل وتخزين الصور والفيديوهات والملفات عبر التخزين المحلي أو MinIO/S3.",
      },
      {
        en: "Searchable product catalog with filters, review status, CSV/JSON export and price comparison across channels.",
        fr: "Catalogue produit searchable avec filtres, statut de revue, export CSV/JSON et comparaison des prix entre canaux.",
        ar: "كتالوج منتجات قابل للبحث مع فلاتر وحالة مراجعة وتصدير CSV/JSON ومقارنة أسعار بين القنوات.",
      },
    ],
    challenge: {
      en: "The challenge was making Telegram collection reliable and reviewable: long-running jobs, media downloads, noisy message formats, rate limits, realtime updates and safe catalog cleanup all had to work together without losing the original source data.",
      fr: "Le defi etait de rendre la collecte Telegram fiable et revisable : jobs longs, telechargement media, formats de messages variables, rate limits, mises a jour temps reel et nettoyage catalogue devaient fonctionner sans perdre la donnee source.",
      ar: "كان التحدي هو جعل جمع بيانات Telegram موثوقا وقابلا للمراجعة: وظائف طويلة، تنزيل وسائط، صيغ رسائل غير منتظمة، حدود طلبات، تحديثات فورية، وتنظيف الكتالوج بدون فقدان البيانات الأصلية.",
    },
    outcome: {
      en: "The project became a strong backend/data automation showcase with a dashboard, queue worker, realtime status, product review workflow, media pipeline and Dockerized infrastructure for Postgres, Redis and MinIO.",
      fr: "Le projet est devenu une bonne preuve de competences backend/data automation avec dashboard, queue worker, statut temps reel, workflow de revue produit, pipeline media et infrastructure Docker Postgres, Redis et MinIO.",
      ar: "أصبح المشروع دليلا قويا على مهارات Backend وData Automation عبر Dashboard وQueue Worker وحالة فورية ومراجعة منتجات ومسار وسائط وبنية Docker مع Postgres وRedis وMinIO.",
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
