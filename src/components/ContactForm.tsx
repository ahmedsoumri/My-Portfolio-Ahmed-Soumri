"use client";

import { useForm } from "react-hook-form";
import { useTranslation } from "@/context/LanguageContext";
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
  const { t, language } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real app, you would send this to an API
    console.log(data);
    window.location.href = `mailto:ahmedsoumri01@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
  };

  const labels = {
    title: { en: "Get in Touch", fr: "Contactez-moi", ar: "تواصل معي" },
    name: { en: "Name", fr: "Nom", ar: "الاسم" },
    email: { en: "Email", fr: "Email", ar: "البريد الإلكتروني" },
    subject: { en: "Subject", fr: "Sujet", ar: "الموضوع" },
    message: { en: "Message", fr: "Message", ar: "الرسالة" },
    send: { en: "Send Message", fr: "Envoyer", ar: "إرسال الرسالة" },
  };

  return (
    <Card className="max-w-xl mx-auto backdrop-blur-sm bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{labels.title[language]}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input 
                placeholder={labels.name[language]} 
                {...register("name", { required: true })} 
                className={errors.name ? "border-destructive" : ""}
              />
            </div>
            <div className="space-y-2">
              <Input 
                placeholder={labels.email[language]} 
                type="email"
                {...register("email", { required: true })}
                className={errors.email ? "border-destructive" : ""}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Input 
              placeholder={labels.subject[language]} 
              {...register("subject", { required: true })}
              className={errors.subject ? "border-destructive" : ""}
            />
          </div>
          
          <div className="space-y-2">
            <Textarea 
              placeholder={labels.message[language]} 
              className={`min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
              {...register("message", { required: true })}
            />
          </div>

          <Button type="submit" className="w-full">
            <Send className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
            {labels.send[language]}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
