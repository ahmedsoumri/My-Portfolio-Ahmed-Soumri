"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const { language } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { sections, educations } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".education-card",
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
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{sections.education[language]}</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {educations.map((edu) => (
            <div key={edu.id} className="education-card relative pl-8 border-l-2 border-primary/20 last:border-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree[language]}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="w-fit">{edu.period}</Badge>
                      <Badge variant="outline" className="w-fit">{edu.status[language]}</Badge>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-primary/80">{edu.institution}</div>
                </CardHeader>
                {edu.note && (
                  <CardContent>
                    <p className="text-muted-foreground">{edu.note[language]}</p>
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
