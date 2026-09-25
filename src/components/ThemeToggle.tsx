"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="group relative h-9 w-16 overflow-hidden rounded-full border border-primary/15 bg-background/60 px-1 shadow-sm backdrop-blur transition hover:border-primary/35 hover:bg-primary/10"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={isDark}
    >
      <span
        className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-pink-500/15"
        aria-hidden="true"
      />
      <span
        className={`relative grid h-7 w-7 place-items-center rounded-full bg-background text-primary shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
        aria-hidden="true"
      >
        <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </span>
    </Button>
  );
}
