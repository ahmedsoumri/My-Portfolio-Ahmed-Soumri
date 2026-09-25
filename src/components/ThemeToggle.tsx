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
      className="group relative h-9 w-16 shrink-0 rounded-full border border-border bg-muted/70 px-1 shadow-inner transition-colors hover:border-primary/40 hover:bg-muted"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={isDark}
    >
      <span
        className={`relative grid h-7 w-7 place-items-center rounded-full bg-background text-primary shadow-md ring-1 ring-black/5 transition-transform duration-300 dark:ring-white/10 ${
          isDark ? "translate-x-4" : "-translate-x-4"
        }`}
        aria-hidden="true"
      >
        <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </span>
    </Button>
  );
}
