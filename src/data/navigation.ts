import type { Language, Translation } from "./types";

export const navigationItems: Record<Language, string[]> = {
  en: ["Home", "About", "Experience", "Projects", "Contact"],
  fr: ["Accueil", "A propos", "Experience", "Projets", "Contact"],
  ar: ["الرئيسية", "نبذة عني", "الخبرات", "المشاريع", "تواصل"],
};

export const themeLabels = {
  light: { en: "Light", fr: "Clair", ar: "فاتح" } satisfies Translation,
  dark: { en: "Dark", fr: "Sombre", ar: "داكن" } satisfies Translation,
  system: { en: "System", fr: "Systeme", ar: "النظام" } satisfies Translation,
};

export const languageLabels = {
  en: { label: "English", flag: "🇬🇧" },
  fr: { label: "Francais", flag: "🇫🇷" },
  ar: { label: "العربية", flag: "🇸🇦" },
};
