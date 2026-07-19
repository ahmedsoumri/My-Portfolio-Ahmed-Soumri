"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const { language } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { sections, experiences } = portfolioData;
  const visibleExperiences = experiences.filter((experience) => !experience.hidden);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".experience-card",
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{sections.experience[language]}</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {visibleExperiences.map((exp) => (
            <div key={exp.id} className="experience-card relative pl-8 border-l-2 border-primary/20 last:border-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title[language]}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                  </div>
                  <div className="text-lg font-medium text-primary/80">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description[language]}</p>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight.en} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight[language]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
