import React from 'react';
import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projectsData } from '@/data/portfolioData';
import { Sparkles, Layers, Bot, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description:
    'Deep-dive engineering case studies by Muhammad Talal, including autonomous LLM self-healing code agents, enterprise billing state machines, and type-safe systems.',
};

export default function ProjectsPage() {
  const flagshipProject = projectsData.find((p) => p.isFlagship);
  const regularProjects = projectsData.filter((p) => !p.isFlagship);

  return (
    <div className="pt-28 sm:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Portfolio Architecture"
        title="Featured Projects & Deep-Dive Case Studies"
        description="Every project below represents production-level software engineering—from closed-loop autonomous AI agents to complex multi-step financial form architectures. Click any project to read the full architectural case study."
      />

      {/* Flagship Feature */}
      {flagshipProject && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-primary-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Flagship Autonomous Agent
          </div>
          <ProjectCard project={flagshipProject} featured={true} />
        </div>
      )}

      {/* Full-Stack & Frontend Case Studies */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-primary-400" />
          Enterprise Full-Stack & Frontend Applications
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
