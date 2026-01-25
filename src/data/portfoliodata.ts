// Portfolio Data - Update this file to change your portfolio content
// Supports multiple languages: English (en), French (fr), Arabic (ar)

export type Language = 'en' | 'fr' | 'ar';

export interface Translation {
  en: string;
  fr: string;
  ar: string;
}

export interface Project {
  id: number;
  title: Translation;
  description: Translation;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: number;
  title: Translation;
  company: string;
  period: string;
  description: Translation;
  technologies: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: Translation;
    description: Translation;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    threads: string;
  };
  hero: {
    greeting: Translation;
    welcomeMessage: Translation;
    subtitle: Translation;
    cta: Translation;
  };
  sections: {
    about: Translation;
    experience: Translation;
    projects: Translation;
    contact: Translation;
  };
  experiences: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Ahmed Soumri",
    title: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
      ar: "مطور ويب متكامل"
    },
    description: {
      en: "Passionate developer crafting beautiful digital experiences. I specialize in building modern web applications with cutting-edge technologies.",
      fr: "Développeur passionné créant de belles expériences numériques. Je me spécialise dans la création d'applications web modernes avec des technologies de pointe.",
      ar: "مطور شغوف بإنشاء تجارب رقمية جميلة. أخصصت في بناء تطبيقات ويب حديثة باستخدام أحدث التقنيات."
    },
    email: "ahmedsoumri01@gmail.com",
    github: "https://github.com/ahmedsoumri",
    linkedin: "https://linkedin.com/in/ahmed-soumri",
    twitter: "https://x.com/ahmedsoumri",
    threads: "https://threads.net/@ahmedsoumri"
  },
  hero: {
    greeting: {
      en: "Hello, I'm",
      fr: "Bonjour, je suis",
      ar: "مرحباً، أنا"
    },
    welcomeMessage: {
      en: "Welcome to My Portfolio",
      fr: "Bienvenue dans Mon Portfolio",
      ar: "مرحباً بكم في معرض أعمالي"
    },
    subtitle: {
      en: "Building the future, one line of code at a time",
      fr: "Construire l'avenir, une ligne de code à la fois",
      ar: "نبني المستقبل، سطر برمجي في كل مرة"
    },
    cta: {
      en: "View My Work",
      fr: "Voir Mes Projets",
      ar: "عرض أعمالي"
    }
  },
  sections: {
    about: {
      en: "About Me",
      fr: "À Propos",
      ar: "نبذة عني"
    },
    experience: {
      en: "Experience",
      fr: "Expérience",
      ar: "الخبرات"
    },
    projects: {
      en: "Projects",
      fr: "Projets",
      ar: "المشاريع"
    },
    contact: {
      en: "Contact",
      fr: "Contact",
      ar: "تواصل"
    }
  },
  experiences: [
    {
      id: 1,
      title: {
        en: "Senior Frontend Developer",
        fr: "Développeur Frontend Senior",
        ar: "مطور واجهات أمامية أول"
      },
      company: "Tech Company Inc.",
      period: "2023 - Present",
      description: {
        en: "Leading frontend development team, building scalable React applications with TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
        fr: "Direction de l'équipe de développement frontend, création d'applications React évolutives avec TypeScript. Mise en place de pipelines CI/CD et amélioration des performances de 40%.",
        ar: "قيادة فريق تطوير الواجهات الأمامية، بناء تطبيقات React قابلة للتوسع باستخدام TypeScript. تنفيذ خطوط CI/CD وتحسين الأداء بنسبة 40%."
      },
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: {
        en: "Full Stack Developer",
        fr: "Développeur Full Stack",
        ar: "مطور متكامل"
      },
      company: "StartUp Hub",
      period: "2021 - 2023",
      description: {
        en: "Developed full-stack applications using Node.js and React. Collaborated with cross-functional teams to deliver high-quality products.",
        fr: "Développement d'applications full-stack avec Node.js et React. Collaboration avec des équipes pluridisciplinaires pour livrer des produits de haute qualité.",
        ar: "تطوير تطبيقات متكاملة باستخدام Node.js و React. التعاون مع فرق متعددة التخصصات لتقديم منتجات عالية الجودة."
      },
      technologies: ["Node.js", "React", "MongoDB", "Express"]
    },
    {
      id: 3,
      title: {
        en: "Junior Developer",
        fr: "Développeur Junior",
        ar: "مطور مبتدئ"
      },
      company: "Digital Agency",
      period: "2019 - 2021",
      description: {
        en: "Started my professional journey building responsive websites and learning modern development practices.",
        fr: "Début de mon parcours professionnel en créant des sites web responsifs et en apprenant les pratiques de développement modernes.",
        ar: "بدأت رحلتي المهنية في بناء مواقع متجاوبة وتعلم ممارسات التطوير الحديثة."
      },
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ],
  projects: [
    {
      id: 1,
      title: {
        en: "E-Commerce Platform",
        fr: "Plateforme E-Commerce",
        ar: "منصة التجارة الإلكترونية"
      },
      description: {
        en: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
        fr: "Une plateforme e-commerce moderne construite avec Next.js, avec gestion d'inventaire en temps réel, paiements sécurisés et un tableau de bord admin intuitif.",
        ar: "منصة تجارة إلكترونية حديثة مبنية بـ Next.js، تتضمن إدارة مخزون في الوقت الفعلي، مدفوعات آمنة، ولوحة تحكم إدارية بديهية."
      },
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/ahmedsoumri/ecommerce",
      liveUrl: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: {
        en: "Task Management App",
        fr: "Application de Gestion de Tâches",
        ar: "تطبيق إدارة المهام"
      },
      description: {
        en: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        fr: "Une application de gestion de tâches collaborative avec mises à jour en temps réel, fonctionnalité glisser-déposer et fonctionnalités de collaboration d'équipe.",
        ar: "تطبيق تعاوني لإدارة المهام مع تحديثات فورية، وظيفة السحب والإفلات، وميزات التعاون الجماعي."
      },
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/ahmedsoumri/taskmanager"
    },
    {
      id: 3,
      title: {
        en: "AI Chat Assistant",
        fr: "Assistant Chat IA",
        ar: "مساعد الدردشة الذكي"
      },
      description: {
        en: "An AI-powered chat assistant that helps users with various tasks using natural language processing and machine learning.",
        fr: "Un assistant de chat alimenté par l'IA qui aide les utilisateurs dans diverses tâches en utilisant le traitement du langage naturel et l'apprentissage automatique.",
        ar: "مساعد دردشة يعمل بالذكاء الاصطناعي يساعد المستخدمين في مهام متنوعة باستخدام معالجة اللغة الطبيعية والتعلم الآلي."
      },
      image: "/projects/aichat.jpg",
      technologies: ["Python", "OpenAI", "FastAPI", "React"],
      githubUrl: "https://github.com/ahmedsoumri/aichat",
      liveUrl: "https://aichat-demo.com"
    },
    {
      id: 4,
      title: {
        en: "Portfolio Website",
        fr: "Site Portfolio",
        ar: "موقع المعرض الشخصي"
      },
      description: {
        en: "A beautifully crafted portfolio website showcasing projects and skills with smooth animations and modern design.",
        fr: "Un site portfolio magnifiquement conçu présentant projets et compétences avec des animations fluides et un design moderne.",
        ar: "موقع معرض أعمال مصمم بأناقة يعرض المشاريع والمهارات مع رسوم متحركة سلسة وتصميم حديث."
      },
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/ahmedsoumri/portfolio"
    }
  ]
};

// Navigation items
export const navigationItems = {
  en: ["Home", "About", "Experience", "Projects", "Contact"],
  fr: ["Accueil", "À Propos", "Expérience", "Projets", "Contact"],
  ar: ["الرئيسية", "نبذة عني", "الخبرات", "المشاريع", "تواصل"]
};

// Theme labels
export const themeLabels = {
  light: { en: "Light", fr: "Clair", ar: "فاتح" },
  dark: { en: "Dark", fr: "Sombre", ar: "داكن" },
  system: { en: "System", fr: "Système", ar: "النظام" }
};

// Language labels
export const languageLabels = {
  en: { label: "English", flag: "🇬🇧" },
  fr: { label: "Français", flag: "🇫🇷" },
  ar: { label: "العربية", flag: "🇸🇦" }
};
