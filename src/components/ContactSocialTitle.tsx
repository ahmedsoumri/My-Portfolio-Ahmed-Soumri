"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";

export function ContactSocialTitle() {
  const { language } = useLanguage();

  return (
    <h3 className="text-xl font-semibold mb-4">
      {portfolioData.contact.labels.socials[language]}
    </h3>
  );
}
