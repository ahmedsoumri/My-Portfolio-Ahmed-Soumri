"use client";

import { Bot, LayoutDashboard, Rocket, Settings2, ShoppingCart, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";

const iconMap = {
  rocket: Rocket,
  dashboard: LayoutDashboard,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
  ai: Bot,
  automation: Settings2,
};

export function BuildServices() {
  const { language } = useTranslation();
  const { buildServices } = portfolioData;

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">{buildServices.title[language]}</h2>
          <p className="mt-3 text-muted-foreground">{buildServices.intro[language]}</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {buildServices.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Settings2;

            return (
              <Card key={item.title.en} className="border-border/70 bg-card/60">
                <CardContent className="flex min-h-28 flex-col items-center justify-center gap-3 p-4 text-center">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium leading-tight">{item.title[language]}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
