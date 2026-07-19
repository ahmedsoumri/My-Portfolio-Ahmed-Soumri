import type { Metadata } from "next";
import { portfolioData, Project } from "@/data/portfoliodata";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/ProjectDetailView";

async function getProject(id: string): Promise<Project | undefined> {
  const projectId = parseInt(id);
  return portfolioData.projects.find((p) => p.id === projectId && !p.hidden);
}

export async function generateStaticParams() {
  return portfolioData.projects
    .filter((project) => !project.hidden)
    .map((project) => ({
      id: project.id.toString(),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { seo, profile } = portfolioData;
  const title = `${project.title.en} - Project Case Study`;
  const description = project.shortDescription.en;
  const url = `/projects/${project.id}`;
  const image = project.coverImage?.src ?? project.screenshots?.[0]?.src ?? seo.ogImage;

  return {
    title,
    description,
    keywords: [
      project.title.en,
      profile.name,
      "Ahmed Soumri project",
      "Full Stack project",
      "SaaS project",
      "Web development portfolio",
      ...project.technologies,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: seo.siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${project.title.en} - ${profile.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: seo.twitterHandle,
      site: seo.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
