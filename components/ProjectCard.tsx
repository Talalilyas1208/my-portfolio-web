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
      className={`group relative rounded-2xl transition-all duration-300 ${
        isFlagship
          ? 'bg-gradient-to-b from-[#141d2e] to-[#0d1424] border border-primary-500/30 hover:border-primary-400 shadow-xl shadow-primary-950/40 p-6 sm:p-8 lg:p-10'
          : 'bg-surface-200/90 border border-white/[0.07] hover:border-primary-500/40 hover:bg-surface-200 shadow-lg p-6 sm:p-7'
      }`}
    >
      {/* Top badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          {isFlagship ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-primary-600 to-accent-cyan text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Autonomous AI Agent
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-surface-100 text-slate-300 border border-white/[0.08]">
              <Layers className="w-3 h-3 text-primary-400" />
              {project.category}
            </span>
          )}
          <span className="text-xs font-mono text-slate-500">
            {project.period}
          </span>
        </div>

        {/* Links & Instant Preview */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch(openQuickPreview(project.slug))}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-primary-300 hover:text-white bg-primary-600/15 hover:bg-primary-600/30 border border-primary-500/30 transition-all"
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
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
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
            className={`font-bold text-slate-100 group-hover:text-primary-400 transition-colors ${
              isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl'
            }`}
          >
            <Link href={`/projects/${project.slug}`} className="hover:underline flex items-center gap-2">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-primary-400/90 font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {project.summary}
        </p>

        {/* Key differentiator callout */}
        {project.keyDifferentiator && (
          <div className="p-3.5 rounded-xl bg-[#0a1120]/80 border border-primary-500/20 text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-primary-400 font-mono block mb-1">
              ⚡ Engineering Differentiator:
            </span>
            <p className="leading-normal">{project.keyDifferentiator}</p>
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-surface-300/80 border border-white/[0.04] text-center"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-slate-100">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-sans truncate">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.05]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-primary-300 group-hover:translate-x-1 transition-all"
          >
            <span>Read Complete Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {isFlagship && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Autonomous Loop Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
