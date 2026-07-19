"use client";

import { socialLinks } from "@/data/portfoliodata";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialIcons() {
  const iconMap = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
    twitter: <Mail className="h-5 w-5" />,
    threads: <Mail className="h-5 w-5" />,
  };

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((item) => (
        item.url ? (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10 transition-colors rounded-full"
            asChild
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              {iconMap[item.type]}
            </a>
          </Button>
        ) : null
      ))}
    </div>
  );
}
