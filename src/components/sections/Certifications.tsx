"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Brain, Code2, Database, ExternalLink, Eye, Hexagon, ServerCog, Terminal, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import type { Certification } from "@/data/types";

gsap.registerPlugin(ScrollTrigger);

const categoryIcons: Record<Certification["category"], React.ReactNode> = {
  ai: <Brain className="h-5 w-5" />,
  web3: <Hexagon className="h-5 w-5" />,
  data: <Database className="h-5 w-5" />,
  systems: <Terminal className="h-5 w-5" />,
  typescript: <Code2 className="h-5 w-5" />,
  devops: <ServerCog className="h-5 w-5" />,
};

export function Certifications() {
  const { language } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [previewCertificate, setPreviewCertificate] = useState<Certification | null>(null);
  const { sections, certifications } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".certification-card",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!previewCertificate) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewCertificate]);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
            <Award className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-bold">{sections.certifications[language]}</h2>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <Card
              key={certification.id}
              className="certification-card h-full border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex h-full min-h-[28rem] flex-col gap-4 p-5">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border bg-muted text-left shadow-sm">
                  {certification.previewImage ? (
                    <button
                      type="button"
                      className="absolute inset-0 transition hover:opacity-90"
                      onClick={() => certification.pdfUrl && setPreviewCertificate(certification)}
                      aria-label={`Preview ${certification.title[language]}`}
                    >
                      <Image
                        src={certification.previewImage}
                        alt={`${certification.title[language]} certificate preview`}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </button>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-purple-500/10 p-6 text-center">
                      <div className="rounded-xl bg-background/70 p-3 text-primary shadow-sm">
                        {categoryIcons[certification.category]}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {certification.issuer}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    {categoryIcons[certification.category]}
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    {certification.date}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold leading-snug">{certification.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">{certification.issuer}</p>
                  {certification.credentialId && (
                    <p className="break-all text-xs text-muted-foreground">
                      Credential ID {certification.credentialId}
                    </p>
                  )}
                </div>

                <div className="mt-auto flex min-h-10 flex-wrap gap-2 pt-2">
                  {certification.pdfUrl && (
                    <>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => setPreviewCertificate(certification)}
                      >
                        <Eye className="h-4 w-4" />
                        Preview
                      </Button>
                      <Button type="button" variant="outline" size="sm" asChild>
                        <a href={certification.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          PDF
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {previewCertificate?.pdfUrl && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={previewCertificate.title[language]}
          onClick={() => setPreviewCertificate(null)}
        >
          <div
            className="flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b px-4 py-3">
              <div>
                <h3 className="font-semibold">{previewCertificate.title[language]}</h3>
                <p className="text-sm text-muted-foreground">{previewCertificate.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" size="sm" asChild>
                  <a href={previewCertificate.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Open
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setPreviewCertificate(null)}
                  aria-label="Close certificate preview"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <iframe
              src={previewCertificate.pdfUrl}
              title={previewCertificate.title[language]}
              className="h-full w-full bg-muted"
            />
          </div>
        </div>
      )}
    </section>
  );
}
