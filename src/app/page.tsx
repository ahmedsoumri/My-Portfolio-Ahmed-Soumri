import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcons } from "@/components/SocialIcons";
import { ContactSocialTitle } from "@/components/ContactSocialTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      
      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <ContactForm />
          </div>
          
          <div className="text-center space-y-4">
            <ContactSocialTitle />
            <SocialIcons />
          </div>
        </div>
      </section>
    </div>
  );
}
