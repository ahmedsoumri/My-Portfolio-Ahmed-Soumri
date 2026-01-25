"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Button } from "../ui/button";
import { ArrowRight, Download } from "lucide-react";
import myPicture from "@/assets/my-picture.jpeg";
import Image from "next/image";
import { InteractiveBackground } from "../InteractiveBackground";

export function Hero() {
  const { t, language } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const { hero, personalInfo } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      })
      .from(".hero-btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.6")
      .from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }, "-=1")
      .from(".hero-bg-glow", {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      }, "-=1.5");
    }, heroRef);

    return () => ctx.revert();
  }, [language]);

  // Magnetic button effect
  useEffect(() => {
    const buttons = [btn1Ref.current, btn2Ref.current].filter(Boolean);
    
    const handleMouseMove = (e: MouseEvent, btn: HTMLButtonElement) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (btn: HTMLButtonElement) => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    buttons.forEach((btn) => {
      if (!btn) return;
      const moveHandler = (e: MouseEvent) => handleMouseMove(e, btn);
      const leaveHandler = () => handleMouseLeave(btn);
      
      btn.addEventListener("mousemove", moveHandler);
      btn.addEventListener("mouseleave", leaveHandler);
    });

    return () => {
      buttons.forEach((btn) => {
        if (!btn) return;
        btn.removeEventListener("mousemove", () => {});
        btn.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const isRTL = language === 'ar';

  return (
    <>
      <InteractiveBackground />
      <section 
        id="home" 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        {/* Animated Background Glows */}
        <div className="hero-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10 opacity-60 blur-[140px]" 
          style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.3))' }} 
        />
        <div className="hero-bg-glow absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full -z-10 opacity-50 blur-[120px]"
          style={{ background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.4), rgba(52, 211, 153, 0.3))' }}
        />
        <div className="hero-bg-glow absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full -z-10 opacity-40 blur-[100px]"
          style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.3))' }}
        />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6 text-center md:text-start">
            <p className="hero-text text-primary font-semibold text-lg tracking-wider uppercase">
              {hero.greeting[language]} <span className="gradient-text">{personalInfo.name}</span>
            </p>
            
            <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="gradient-text">{hero.welcomeMessage[language]}</span>
            </h1>
            
            <p className="hero-text text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              {hero.subtitle[language]}
            </p>
            
            <div className="hero-btn flex flex-wrap gap-4 justify-center md:justify-start pt-6">
              <Button 
                ref={btn1Ref}
                size="lg" 
                className="magnetic-btn group relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 border-0 shadow-lg shadow-purple-500/25"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  {hero.cta[language]}
                  {isRTL ? (
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
              </Button>
              <Button 
                ref={btn2Ref}
                size="lg" 
                variant="outline"
                className="magnetic-btn group border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 backdrop-blur-sm"
              >
                Download CV
                <Download className={`${isRTL ? "mr-2" : "ml-2"} h-4 w-4 group-hover:animate-bounce`} />
              </Button>
            </div>
          </div>

          {/* Hero Image with Glow Effect */}
          <div className="hero-image relative hidden md:block animate-float">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated gradient borders */}
              <div className="absolute inset-0 rounded-2xl rotate-6 animate-pulse-glow opacity-70"
                style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))' }}
              />
              <div className="absolute inset-0 rounded-2xl -rotate-6 opacity-50"
                style={{ background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.3), rgba(52, 211, 153, 0.3))' }}
              />
              
              {/* Main image container with glass effect */}
              <div className="relative h-full w-full glass-card rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center glow-border">
                <Image 
                  src={myPicture} 
                  alt="My Picture" 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover rounded-xl" 
                  priority
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-80" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse opacity-80" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/4 -left-6 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
