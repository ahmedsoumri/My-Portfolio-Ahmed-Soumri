"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfoliodata";
import { IphoneFrame } from "@/components/IphoneFrame";
import { cn } from "@/lib/utils";

export function ProjectDetailView({ project }: { project: Project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { language } = useTranslation();
  const labels = portfolioData.projectDetailsLabels;
  const screenshots = project.screenshots ?? [];
  const videos = project.videos ?? [];
  const hasMedia = screenshots.length > 0 || videos.length > 0;
  const isMobileProject = project.projectType === "mobile";
  const publishedLabel = {
    en: "Published",
    fr: "Publie",
    ar: "منشور",
  };
  const statusLabel = project.liveUrl ? publishedLabel[language] : project.status[language];
  const role =
    project.role?.[language] ??
    (isMobileProject ? labels.defaultMobileRole[language] : labels.defaultWebRole[language]);
  const heroMedia = screenshots.length > 0 ? screenshots : project.coverImage ? [project.coverImage] : [];
  const activeImage = heroMedia[activeImageIndex] ?? heroMedia[0];
  const hasImageSlider = heroMedia.length > 1;

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? heroMedia.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === heroMedia.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="min-h-screen px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
      <Link href="/#projects" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> {labels.back[language]}
      </Link>

      <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)]">
        <div className="min-w-0 space-y-4">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10",
              isMobileProject ? "h-[560px] py-8 sm:h-auto sm:min-h-[620px] sm:py-10" : "h-[280px] sm:aspect-video sm:h-auto",
            )}
          >
            {activeImage ? (
              <div className="absolute inset-0">
                {isMobileProject ? (
                  <div className="grid h-full place-items-center bg-muted/30">
                  <IphoneFrame
                    src={activeImage.src}
                    alt={activeImage.alt}
                    language={language}
                    priority
                    className="max-w-[250px]"
                  />
                  </div>
                ) : (
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt[language]}
                    fill
                    priority
                    sizes="(min-width: 1280px) 760px, (min-width: 1024px) 65vw, 100vw"
                    className="object-cover object-center sm:object-contain"
                  />
                )}
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-primary/70 to-cyan-700" />
                <div className="absolute inset-0 grid place-items-center p-8 text-center">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70 mb-3">
                      {statusLabel}
                    </p>
                    <p className="text-3xl font-bold text-white">{project.visualLabel}</p>
                  </div>
                </div>
              </>
            )}

            <div className="absolute left-4 top-4 rounded-md bg-black/65 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
              {statusLabel}
            </div>

            {hasImageSlider && (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={showPreviousImage}
                  className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-background"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={showNextImage}
                  className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-background"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {activeImage?.caption && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {activeImage.caption[language]}
            </p>
          )}

          {hasImageSlider && (
            <div className="flex max-w-full gap-3 overflow-x-auto pb-2">
              {heroMedia.map((screenshot, index) => (
                <button
                  type="button"
                  key={screenshot.src}
                  aria-label={`Show screenshot ${index + 1}`}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    "relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border bg-muted transition",
                    activeImageIndex === index
                      ? "border-primary ring-2 ring-primary/35"
                      : "border-border opacity-70 hover:opacity-100",
                  )}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt[language]}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-6 lg:sticky lg:top-24">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">{project.title[language]}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.shortDescription[language]}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <section className="rounded-xl border bg-card/60 p-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                {labels.role[language]}
              </h2>
              <p className="text-muted-foreground">{role}</p>
            </section>
            <section className="rounded-xl border bg-card/60 p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                {labels.stack[language]}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {project.githubUrl && (
                <Button variant="outline" size="lg" className="w-full flex-1 py-3 bg-black text-white hover:bg-black/80 hover:text-white" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> {labels.repository[language]}
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="lg" className="w-full flex-1 py-3" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> {labels.livePreview[language]}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          { label: labels.problem[language], value: project.challenge[language] },
          { label: labels.solution[language], value: project.overview[language] },
          { label: labels.result[language], value: project.outcome[language] },
        ].map((item) => (
          <article key={item.label} className="rounded-xl border bg-card/50 p-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              {item.label}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border bg-card/40 p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold">{labels.features[language]}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {project.features.map((feature) => (
            <div key={feature.en} className="rounded-xl border bg-background/40 p-4">
              <p className="leading-relaxed text-muted-foreground">{feature[language]}</p>
            </div>
          ))}
          </div>
      </section>

      {hasMedia && videos.length > 0 && (
        <div className="mt-16 space-y-14">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">{labels.videos[language]}</h2>
              <div className="grid gap-6">
                {videos.map((video) => (
                  <figure
                    key={video.src}
                    className="overflow-hidden rounded-xl border bg-card shadow-sm"
                  >
                    <video
                      src={video.src}
                      poster={video.poster}
                      controls
                      preload="metadata"
                      className="aspect-video w-full bg-black object-contain"
                    >
                      {video.title[language]}
                    </video>
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                      {video.caption?.[language] ?? video.title[language]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
        </div>
      )}
      </div>
    </div>
  );
}
