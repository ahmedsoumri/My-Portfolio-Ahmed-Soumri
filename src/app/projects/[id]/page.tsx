import { portfolioData, Project } from "@/data/portfoliodata";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/ProjectDetailView";

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

  return <ProjectDetailView project={project} />;
}
