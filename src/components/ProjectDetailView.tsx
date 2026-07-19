"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData, Project } from "@/data/portfoliodata";

export function ProjectDetailView({ project }: { project: Project }) {
  const { language } = useTranslation();
  const labels = portfolioData.projectDetailsLabels;
  const screenshots = project.screenshots ?? [];
  const videos = project.videos ?? [];
  const hasMedia = screenshots.length > 0 || videos.length > 0;
  const publishedLabel = {
    en: "Published",
    fr: "Publie",
    ar: "Published",
  };
  const statusLabel = project.liveUrl ? publishedLabel[language] : project.status[language];

  return (
    <div className="min-h-screen py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <Link href="/#projects" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> {labels.back[language]}
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-muted shadow-lg">
            {project.coverImage ? (
              <>
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt[language]}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
                <div className="absolute left-4 top-4 rounded-md bg-black/65 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
                  {statusLabel}
                </div>
              </>
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
              </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex gap-4 pt-4">
              {project.githubUrl && (
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> {labels.repository[language]}
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="lg" className="flex-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> {labels.livePreview[language]}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{project.title[language]}</h1>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">{labels.overview[language]}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.overview[language]}
            </p>

            <div className="my-8 h-px bg-border" />

            <h3 className="text-xl font-semibold mb-4">{labels.features[language]}</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature.en}>{feature[language]}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">{labels.challenge[language]}</h3>
            <p className="text-muted-foreground">{project.challenge[language]}</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">{labels.outcome[language]}</h3>
            <p className="text-muted-foreground">{project.outcome[language]}</p>
          </div>
        </div>
      </div>

      {hasMedia && (
        <div className="mt-16 space-y-14">
          {screenshots.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">{labels.screenshots[language]}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="overflow-hidden rounded-xl border bg-card shadow-sm"
                  >
                    <div className="relative aspect-video w-full bg-muted/40">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt[language]}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                    {screenshot.caption && (
                      <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                        {screenshot.caption[language]}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {videos.length > 0 && (
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
          )}
        </div>
      )}
    </div>
  );
}
