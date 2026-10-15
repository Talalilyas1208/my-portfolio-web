import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ArticleCard from '@/components/ArticleCard';
import { articlesData } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Engineering Articles & Insights',
  description:
    'Technical deep-dives on autonomous AI agents, Google Gemini LLM pipelines, React state normalization, and Next.js App Router performance by Muhammad Talal.',
};

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Technical Writing"
        title="Engineering Articles &amp; Case Notes"
        description="Deep dives into practical AI agent architectures, self-healing developer tooling, and modern frontend state management."
      />

      <div className="space-y-8">
        {articlesData.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
}
