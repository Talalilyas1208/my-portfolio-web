'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { useAppDispatch } from '@/store/hooks';
import { openQuickPreview } from '@/store/slices/projectsSlice';
import { ArrowRight, Github, ExternalLink, Sparkles, Terminal, Activity, Layers, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const dispatch = useAppDispatch();
  const isFlagship = project.isFlagship;

  return (
    <div
      className={`group relative rounded-3xl liquid-glass-interactive transition-all duration-500 ${
        isFlagship
          ? 'liquid-glass-accent p-6 sm:p-8 lg:p-10 shadow-liquid-glow-lg'
          : 'liquid-glass p-6 sm:p-7 shadow-liquid-glass'
      }`}
    >
      {/* Top badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          {isFlagship ? (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold liquid-pill-primary text-cyan-200">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              Flagship Autonomous AI Agent
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium liquid-pill text-slate-300">
              <Layers className="w-3 h-3 text-cyan-400" />
              {project.category}
            </span>
          )}
          <span className="text-xs font-mono text-slate-400">
            {project.period}
          </span>
        </div>

        {/* Links & Instant Preview */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch(openQuickPreview(project.slug))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300 hover:text-white liquid-glass-subtle hover:border-cyan-400/50 transition-all"
            title="Instant 0ms Quick Preview"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quick Preview</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl liquid-glass-subtle text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
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

        {/* Key differentiator callout (Liquid Glass Accent Box) */}
        {project.keyDifferentiator && (
          <div className="p-4 rounded-2xl liquid-glass-subtle border border-cyan-500/30 text-xs sm:text-sm text-slate-200">
            <span className="font-semibold text-cyan-300 font-mono block mb-1">
              ⚡ Engineering Differentiator:
            </span>
            <p className="leading-relaxed">{project.keyDifferentiator}</p>
          </div>
        )}

        {/* Metrics Grid (Liquid Glass Tiles) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl liquid-glass-subtle text-center"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-gradient-cyan">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-sans truncate">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills (Liquid Frosted Tags) */}
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

        {/* Action Button */}
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
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Autonomous Loop Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
