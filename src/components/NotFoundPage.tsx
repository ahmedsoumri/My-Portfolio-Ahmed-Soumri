"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";

const copy = {
  en: {
    eyebrow: "404 - Page not found",
    title: "This page drifted off the map.",
    description:
      "The link may be outdated, moved, or mistyped. Head back home or jump straight into the projects.",
    home: "Back home",
    projects: "View projects",
    contact: "Contact Ahmed",
  },
  fr: {
    eyebrow: "404 - Page introuvable",
    title: "Cette page a quitte la carte.",
    description:
      "Le lien est peut-etre obsolete, deplace ou mal saisi. Retournez a l'accueil ou explorez les projets.",
    home: "Retour accueil",
    projects: "Voir projets",
    contact: "Contacter Ahmed",
  },
  ar: {
    eyebrow: "404 - Page not found",
    title: "This page drifted off the map.",
    description:
      "The link may be outdated, moved, or mistyped. Head back home or jump straight into the projects.",
    home: "Back home",
    projects: "View projects",
    contact: "Contact Ahmed",
  },
};

export function NotFoundPage() {
  const { language, isRTL } = useLanguage();
  const content = copy[language];

  return (
    <>
      <InteractiveBackground />
      <section className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden px-4 pt-28 pb-20">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(6, 182, 212, 0.25))",
          }}
        />
        <div
          className="absolute bottom-12 right-0 -z-10 h-[300px] w-[300px] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(244, 114, 182, 0.35), rgba(52, 211, 153, 0.25))",
          }}
        />

        <div className="container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-lg">
              <Search className="h-4 w-4" />
              <span>{content.eyebrow}</span>
            </div>

            <p className="gradient-text text-[clamp(5rem,18vw,11rem)] font-black leading-none tracking-normal">
              404
            </p>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {content.title}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="magnetic-btn group bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-cyan-400"
                asChild
              >
                <Link href="/">
                  {isRTL ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  )}
                  {content.home}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 bg-background/40 backdrop-blur-sm hover:border-purple-400 hover:bg-purple-500/10"
                asChild
              >
                <Link href="/#projects">{content.projects}</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/#contact">{content.contact}</Link>
              </Button>
            </div>

            <p className="mt-12 text-sm text-muted-foreground">
              {portfolioData.profile.brand}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
