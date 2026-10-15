'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { ArrowRight } from 'lucide-react';
import ProjectCardHeader from '@/components/ProjectCardHeader';
import ProjectMetricsRow from '@/components/ProjectMetricsRow';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isFlagship = project.isFlagship;

  return (
    <div
      className={`group relative rounded-3xl liquid-glass-interactive transition-all duration-500 ${
        isFlagship
          ? 'liquid-glass-accent p-6 sm:p-8 lg:p-10 shadow-liquid-glow-lg'
          : 'liquid-glass p-6 sm:p-7 shadow-liquid-glass'
      }`}
    >
      <ProjectCardHeader project={project} />

      <div className="space-y-4">
        <div>
          <h3
            className={`font-bold text-slate-100 group-hover:text-cyan-300 transition-colors ${
              isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl'
            }`}
          >
            <Link href={`/projects/${project.slug}`} className="hover:underline flex items-center gap-2">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-cyan-400/90 font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {project.summary}
        </p>

        {project.keyDifferentiator && (
          <div className="p-4 rounded-2xl liquid-glass-subtle border border-cyan-500/30 text-xs sm:text-sm text-slate-200">
            <span className="font-semibold text-cyan-300 font-mono block mb-1">
              ⚡ Engineering Differentiator:
            </span>
            <p className="leading-relaxed">{project.keyDifferentiator}</p>
          </div>
        )}

        <ProjectMetricsRow metrics={project.metrics} />

        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-xl text-xs font-mono liquid-glass-subtle text-slate-300 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-white/[0.08]">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1.5 transition-all"
          >
            <span>Read Complete Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {isFlagship && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 liquid-pill-emerald px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Autonomous Loop Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
