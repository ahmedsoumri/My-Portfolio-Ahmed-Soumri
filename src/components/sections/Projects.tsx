"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, Grid2X2, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IphoneFrame } from "@/components/IphoneFrame";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ProjectFilter = "all" | "web" | "mobile";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const { language } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { sections, projects, projectDetailsLabels } = portfolioData;
  const visibleProjects = projects.filter((project) => !project.hidden);
  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? visibleProjects
        : visibleProjects.filter((project) => (project.projectType ?? "web") === activeFilter),
    [activeFilter, visibleProjects],
  );
  const publishedLabel = {
    en: "Published",
    fr: "Publie",
    ar: "منشور",
  };
  const filterLabels = {
    all: { en: "All", fr: "Tous", ar: "الكل" },
    web: { en: "Web", fr: "Web", ar: "ويب" },
    mobile: { en: "Mobile", fr: "Mobile", ar: "موبايل" },
  };
  const filters: { id: ProjectFilter; icon: typeof Grid2X2 }[] = [
    { id: "all", icon: Grid2X2 },
    { id: "web", icon: Monitor },
    { id: "mobile", icon: Smartphone },
  ];

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
  }, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-bold">{sections.projects[language]}</h2>
          <div className="flex rounded-full border bg-background/70 p-1 shadow-sm">
            {filters.map(({ id, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition",
                  activeFilter === id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {filterLabels[id][language]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isMobileProject = project.projectType === "mobile";
            const mobilePreviews = project.screenshots?.slice(0, 3) ?? [];

            return (
            <Card key={project.id} className="project-card overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className={cn("relative w-full overflow-hidden bg-muted", isMobileProject ? "h-60" : "h-48")}>
                {project.coverImage ? (
                  <>
                    {isMobileProject ? (
                      <div className="absolute inset-0 overflow-hidden bg-linear-to-br from-zinc-950 via-slate-900 to-primary/45 transition-transform duration-500 group-hover:scale-[1.03]">
                        <div className="absolute inset-x-6 top-5 h-20 rounded-full bg-cyan-400/20 blur-3xl" />
                        {mobilePreviews[1] && (
                          <IphoneFrame
                            src={mobilePreviews[1].src}
                            alt={mobilePreviews[1].alt}
                            language={language}
                            className="absolute left-[14%] top-8 max-w-[74px] -rotate-6 border-[4px] p-0.5 opacity-80 shadow-xl"
                          />
                        )}
                        {mobilePreviews[2] && (
                          <IphoneFrame
                            src={mobilePreviews[2].src}
                            alt={mobilePreviews[2].alt}
                            language={language}
                            className="absolute right-[14%] top-8 max-w-[74px] rotate-6 border-[4px] p-0.5 opacity-80 shadow-xl"
                          />
                        )}
                        <IphoneFrame
                          src={project.coverImage.src}
                          alt={project.coverImage.alt}
                          language={language}
                          className="relative z-10 mt-5 max-w-[108px] border-[5px] p-0.5 shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
                      </div>
                    ) : (
                      <>
                        <Image
                          src={project.coverImage.src}
                          alt={project.coverImage.alt[language]}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      </>
                    )}
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
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{project.title[language]}</CardTitle>
                  <Badge variant="outline" className="shrink-0 text-xs">
                    {isMobileProject ? filterLabels.mobile[language] : filterLabels.web[language]}
                  </Badge>
                </div>
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
          );
          })}
        </div>
      </div>
    </section>
  );
}
