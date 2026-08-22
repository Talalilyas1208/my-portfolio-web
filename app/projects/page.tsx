import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import InteractiveProjectExplorer from '@/components/InteractiveProjectExplorer';
import { Sparkles, Layers, Bot, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Deep-dive engineering case studies by Muhammad Talal, including autonomous LLM self-healing code agents, enterprise billing state machines, and type-safe systems.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeading
        eyebrow="Redux-Powered Portfolio"
        title="Featured Projects & Deep-Dive Case Studies"
        description="Search in real-time or filter by engineering domain. Click 'Quick Preview' for instant 0ms architecture metrics, or explore the complete case study."
      />

      <InteractiveProjectExplorer />
    </div>
  );
}
