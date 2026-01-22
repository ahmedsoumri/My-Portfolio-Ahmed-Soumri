"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Button } from "../ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const { t, language } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { hero, personalInfo } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.5")
      .from(".hero-bg", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      }, "-=1.5");

    }, heroRef);

    return () => ctx.revert();
  }, [language]); // Re-run animation when language changes

  const isRTL = language === 'ar';

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="hero-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="hero-bg absolute top-1/4 right-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="space-y-6 text-center md:text-start">
          <p className="hero-text text-primary font-medium text-lg tracking-wide">
            {hero.greeting[language]} {personalInfo.name}
          </p>
          
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            {hero.welcomeMessage[language]}
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto md:mx-0">
            {hero.subtitle[language]}
          </p>
          
          <div className="hero-btn flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              {hero.cta[language]}
              {isRTL ? (
                <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
            <Button size="lg" variant="outline">
              Download CV
              <Download className={isRTL ? "mr-2 h-4 w-4" : "ml-2 h-4 w-4"} />
            </Button>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="hero-text relative hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-2xl rotate-6 opacity-20 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500 to-cyan-400 rounded-2xl -rotate-6 opacity-20 blur-xl" />
            <div className="relative h-full w-full bg-card rounded-2xl border shadow-2xl overflow-hidden flex items-center justify-center p-8">
              <div className="text-9xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
