import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import { projectsData } from '@/data/portfolioData';

export default function HomeProjectsSection() {
  return (
    <>
      <TechnicalRulerDivider station="STA 600" label="PRODUCTION CASE STUDIES" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill text-slate-950 mb-3">
              <Layers className="w-3.5 h-3.5 text-slate-800" /> Production Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Featured SaaS, AI &amp; Full-Stack Engineering Projects
            </h2>
            <p className="text-sm text-slate-800 mt-1 max-w-xl font-sans">
              Explore production SaaS revenue intelligence, AI margin engines, B2B OEM configurators, and autonomous code-fixing agents.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:underline transition-colors"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
