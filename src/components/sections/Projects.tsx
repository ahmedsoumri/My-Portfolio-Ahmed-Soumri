"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const { language } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { sections, projects, projectDetailsLabels } = portfolioData;
  const visibleProjects = projects.filter((project) => !project.hidden);
  const publishedLabel = {
    en: "Published",
    fr: "Publie",
    ar: "Published",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{sections.projects[language]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 w-full bg-muted overflow-hidden">
                {project.coverImage ? (
                  <>
                    <Image
                      src={project.coverImage.src}
                      alt={project.coverImage.alt[language]}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-md bg-black/65 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
                      {project.liveUrl ? publishedLabel[language] : project.status[language]}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-primary/70 to-cyan-700" />
                    <div className="absolute inset-0 grid place-items-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/70 mb-3">
                          {project.liveUrl ? publishedLabel[language] : project.status[language]}
                        </p>
                        <p className="text-2xl font-bold text-white">{project.visualLabel}</p>
                      </div>
                    </div>
                  </>
                )}
                  </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title[language]}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {project.shortDescription[language]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <div className="flex gap-2 w-full">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> {projectDetailsLabels.code[language]}
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> {projectDetailsLabels.livePreview[language]}
                      </a>
                    </Button>
                  )}
                </div>
                <Button variant="secondary" size="sm" className="w-full sm:w-auto" asChild>
                  <Link href={`/projects/${project.id}`}>
                    {projectDetailsLabels.details[language]} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
