"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setIsVisible(scrollRatio >= 0.5);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setIsVisible(false);
  };

  return (
    <Button
      type="button"
      size="icon-lg"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "group fixed bottom-6 right-6 z-50 rounded-full border border-primary shadow-lg shadow-primary/25 transition-all duration-300 md:bottom-8 md:right-8",
        "bg-primary/95 text-primary-foreground backdrop-blur hover:bg-background hover:text-primary",
        isVisible
          ? "translate-y-0 scale-100 opacity-100 cursor-pointer"
          : "pointer-events-none translate-y-3 scale-90 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </Button>
  );
}
