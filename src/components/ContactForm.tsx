"use client";

import { useForm } from "react-hook-form";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const { language } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { contact, profile, sections } = portfolioData;

  const onSubmit = (data: FormData) => {
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
    window.open(mailto, "_self");
  };

  return (
    <Card className="max-w-xl mx-auto backdrop-blur-sm bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{sections.contact[language]}</CardTitle>
        <p className="text-center text-sm text-muted-foreground">{contact.intro[language]}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                placeholder={contact.labels.name[language]}
                {...register("name", { required: true })}
                className={errors.name ? "border-destructive" : ""}
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder={contact.labels.email[language]}
                type="email"
                {...register("email", { required: true })}
                className={errors.email ? "border-destructive" : ""}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Input
              placeholder={contact.labels.subject[language]}
              {...register("subject", { required: true })}
              className={errors.subject ? "border-destructive" : ""}
            />
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder={contact.labels.message[language]}
              className={`min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
              {...register("message", { required: true })}
            />
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            <Send className={`h-4 w-4 ${language === "ar" ? "ml-2" : "mr-2"}`} />
            {contact.labels.send[language]}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
