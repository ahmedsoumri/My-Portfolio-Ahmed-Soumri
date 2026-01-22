import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      
      {/* Contact Section Placeholder - could be a separate component */}
      <section id="contact" className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
