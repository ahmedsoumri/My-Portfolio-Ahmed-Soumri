import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData, Project } from "@/data/portfoliodata";
import { notFound } from "next/navigation";

// Since this is a static site without a real database, we find the project from the static array
// In a real app, you'd fetch this data
async function getProject(id: string): Promise<Project | undefined> {
  const projectId = parseInt(id);
  return portfolioData.projects.find((p) => p.id === projectId);
}

// Generate static params if we want to export purely static site
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  // Helper to fallback to English if translation is missing (though our types enforce it)
  // We can't use our client-side hook here easily since this is a Server Component page
  // For simplicity in this server component, we'll default to displaying all languages or just English
  // Ideally, you'd use a server-side translation strategy or pass lang param
  // FOR NOW: We will display English by default, or we can make this a client component to use the hook.
  // Converting to Client Component to reuse our LanguageContext easily for this view.
  
  return <ProjectDetailView project={project} />;
}


// Client Component for the view to access Context
"use client";

import { useTranslation } from "@/context/LanguageContext";

function ProjectDetailView({ project }: { project: Project }) {
  const { language } = useTranslation();

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <Link href="/#projects" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-muted shadow-lg">
            {/* Using fallback visual since we don't have real images yet */}
            <div className={`absolute inset-0 bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-6xl`}>
              {project.image.includes('ecommerce') ? '🛍️' : 
               project.image.includes('task') ? '✅' : 
               project.image.includes('chat') ? '🤖' : '💻'}
            </div>
            {/* <Image src={project.image} alt={project.title[language]} fill className="object-cover" /> */}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
             {project.githubUrl && (
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> Code Repository
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="lg" className="flex-1" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{project.title[language]}</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description[language]}
            </p>
            
            <div className="my-8 h-px bg-border" />
            
            <h3 className="text-xl font-semibold mb-4">Key Features (Mock Data)</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Responsive and modern user interface designed with Tailwind CSS</li>
              <li>Fully optimized performance with Next.js App Router and Server Components</li>
              <li>Integrated secure authentication and protected routes</li>
              <li>Real-time data synchronization capability</li>
              <li>Comprehensive accessibility features (ARIA compliance)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Challenges & Solutions</h3>
            <p className="text-muted-foreground">
              One of the main challenges during development was ensuring smooth state management across complex user flows. 
              This was solved by implementing a robust context architecture combined with optimistic UI updates to ensure 
              the application feels instant and responsive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
