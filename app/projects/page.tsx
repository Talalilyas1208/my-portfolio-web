import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import InteractiveProjectExplorer from '@/components/InteractiveProjectExplorer';
import SmoothLazyReveal from '@/components/SmoothLazyReveal';
import JsonLd from '@/components/JsonLd';
import { projectsData } from '@/data/portfolioData';
import { siteUrl } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: 'Projects & Case Studies — SaaS, AI Agents & React Architectures',
  description:
    'Deep-dive engineering case studies by Muhammad Talal Ilyas, including RevTerm SaaS Revenue Intelligence, FigureMint AI Profit Platform, HiveShield B2B OEM, and Autonomous Gemini Code-Fixer.',
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: 'Projects & Case Studies | Muhammad Talal Ilyas',
    description:
      'Production SaaS revenue intelligence, AI margin engines, B2B OEM configurators, and autonomous LLM code-fixing agents.',
    url: `${siteUrl}/projects`,
    type: 'website',
  },
};

export default function ProjectsPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects & Engineering Case Studies — Muhammad Talal Ilyas',
    url: `${siteUrl}/projects`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projectsData.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: p.title,
        url: `${siteUrl}/projects/${p.slug}`,
      })),
    },
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={collectionJsonLd} />
      <SectionHeading
        eyebrow="Redux-Powered Portfolio"
        title="Featured Projects & Deep-Dive Case Studies"
        description="Search in real-time or filter by engineering domain. Click 'Quick Preview' for instant 0ms architecture metrics, or explore the complete case study."
      />

      <SmoothLazyReveal>
        <InteractiveProjectExplorer />
      </SmoothLazyReveal>
    </div>
  );
}
