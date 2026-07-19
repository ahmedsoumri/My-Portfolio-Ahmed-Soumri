"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Card, CardContent } from "@/components/ui/card";
import { Blocks, Code2, Database, Layout, Server, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const { language } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { sections, profile, skillGroups } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-item", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const icons = {
    layout: <Layout className="h-8 w-8" />,
    server: <Server className="h-8 w-8" />,
    mobile: <Smartphone className="h-8 w-8" />,
    database: <Database className="h-8 w-8" />,
    web3: <Blocks className="h-8 w-8" />,
    product: <Code2 className="h-8 w-8" />,
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 about-item">
          <h2 className="text-3xl font-bold mb-4">{sections.about[language]}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {profile.description[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((skill) => (
            <Card key={skill.id} className="about-item hover:shadow-lg transition-shadow border-primary/10">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                  {icons[skill.icon]}
                </div>
                <h3 className="font-semibold mb-2">{skill.title[language]}</h3>
                <p className="text-sm text-muted-foreground mb-3">{skill.description[language]}</p>
                <p className="text-xs text-muted-foreground/90 leading-relaxed">{skill.items.join(", ")}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
