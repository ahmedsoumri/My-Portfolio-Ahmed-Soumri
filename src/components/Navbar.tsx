"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "@/context/LanguageContext";
import { navigationItems, portfolioData } from "@/data/portfoliodata";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const SECTION_IDS = ["home", "about", "experience", "projects", "contact"];

export function Navbar() {
  const { language } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = navigationItems[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 50);
      setScrollProgress(maxScroll > 0 ? Math.min((scrollY / maxScroll) * 100, 100) : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          type="button"
          className="group text-xl font-bold bg-linear-to-r from-primary via-cyan-500 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home section"
        >
          {portfolioData.profile.brand}
        </button>

        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(SECTION_IDS[index])}
              className={cn(
                "text-sm font-medium cursor-pointer transition-colors relative group",
                activeSection === SECTION_IDS[index] ? "text-primary" : "hover:text-primary"
              )}
              aria-current={activeSection === SECTION_IDS[index] ? "page" : undefined}
            >
              {item}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  activeSection === SECTION_IDS[index] ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(SECTION_IDS[index])}
              className={cn(
                "text-left py-2 px-4 rounded-md transition-colors",
                activeSection === SECTION_IDS[index] ? "bg-accent text-accent-foreground" : "hover:bg-accent"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary via-cyan-500 to-purple-600 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
