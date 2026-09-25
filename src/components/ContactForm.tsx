"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfoliodata";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { language } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { contact, sections } = portfolioData;
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card className="max-w-xl mx-auto backdrop-blur-sm bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{sections.contact[language]}</CardTitle>
        <p className="text-center text-base font-medium text-primary">{contact.cta[language]}</p>
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

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-md bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{contact.status.success[language]}</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{contact.status.error[language]}</span>
            </div>
          )}

          <Button type="submit" className="w-full cursor-pointer" disabled={status === "sending"}>
            <Send className={`h-4 w-4 ${language === "ar" ? "ml-2" : "mr-2"}`} />
            {status === "sending" ? contact.status.sending[language] : contact.labels.send[language]}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
