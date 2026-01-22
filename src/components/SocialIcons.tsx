"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, AtSign } from "lucide-react";

export function SocialIcons() {
  const { personalInfo } = portfolioData;

  const icons = [
    { icon: <Github className="h-5 w-5" />, url: personalInfo.github, label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: personalInfo.twitter, label: "X (Twitter)" },
    { icon: <AtSign className="h-5 w-5" />, url: personalInfo.threads, label: "Threads" },
  ];

  return (
    <div className="flex justify-center gap-4">
      {icons.map((item) => (
        item.url ? (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10 transition-colors rounded-full"
            asChild
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              {item.icon}
            </a>
          </Button>
        ) : null
      ))}
    </div>
  );
}
