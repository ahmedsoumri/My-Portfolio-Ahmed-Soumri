"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/data/portfoliodata';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLanguage = localStorage.getItem('portfolio-language') as Language | null;
  return savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage) ? savedLanguage : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isRTL = language === 'ar';

  useEffect(() => {
    // Update RTL state and document direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper function to get translated text
export function useTranslation() {
  const { language } = useLanguage();
  
  const t = <T extends { en: string; fr: string; ar: string }>(obj: T): string => {
    return obj[language];
  };
  
  return { t, language };
}
