import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData, personalData } from '@/data/portfolioData';
import JsonLd from '@/components/JsonLd';
import ProjectDetailHero from '@/components/ProjectDetailHero';
import ProjectArchitectureSection from '@/components/ProjectArchitectureSection';
import ProjectChallengesImpact from '@/components/ProjectChallengesImpact';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  const url = `https://talalai.vercel.app/projects/${project.slug}`;
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    keywords: [project.title, ...project.techStack, 'Muhammad Talal', 'Case Study'],
    openGraph: {
      title: `${project.title} | Case Study by Muhammad Talal`,
      description: project.summary,
      url,
      type: 'article',
      siteName: `${personalData.name} Portfolio`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study`,
      description: project.summary,
    },
    alternates: { canonical: url },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.summary,
    programmingLanguage: project.techStack.join(', '),
    codeRepository: project.githubUrl,
    author: { '@type': 'Person', name: personalData.name, url: 'https://talalai.vercel.app' },
    keywords: project.techStack.join(', '),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://talalai.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://talalai.vercel.app/projects' },
      { '@type': 'ListItem', position: 3, name: project.title, item: `https://talalai.vercel.app/projects/${project.slug}` },
    ],
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <JsonLd data={jsonLdData} />
      <JsonLd data={breadcrumbJsonLd} />
      <ProjectDetailHero project={project} />
      <ProjectArchitectureSection project={project} />
      <ProjectChallengesImpact project={project} />
    </div>
  );
}
