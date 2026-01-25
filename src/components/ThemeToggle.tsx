"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themeLabels } from "@/data/portfoliodata";
import { useLanguage } from "@/context/LanguageContext";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative overflow-hidden cursor-pointer">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4" />
          {themeLabels.light[language]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4" />
          {themeLabels.dark[language]}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
