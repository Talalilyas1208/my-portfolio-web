'use client';

import React from 'react';
import { Project } from '@/data/portfolioData';
import { useAppDispatch } from '@/store/hooks';
import { openQuickPreview } from '@/store/slices/projectsSlice';
import { Bot, Layers, Eye, Github, ExternalLink } from 'lucide-react';

export default function ProjectCardHeader({ project }: { project: Project }) {
  const dispatch = useAppDispatch();
  const isFlagship = project.isFlagship;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div className="flex items-center gap-2">
        {isFlagship ? (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold liquid-pill text-slate-950">
            <Bot className="w-3.5 h-3.5 text-slate-900" />
            Flagship System
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold liquid-pill text-slate-950">
            <Layers className="w-3 h-3 text-slate-800" />
            {project.category}
          </span>
        )}
        <span className="text-xs font-mono text-slate-600 font-medium">{project.period}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => dispatch(openQuickPreview(project.slug))}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-900 hover:text-slate-950 liquid-glass-subtle hover:border-slate-900 transition-all font-bold"
          title="Instant 0ms Quick Preview"
        >
          <Eye className="w-3.5 h-3.5 text-slate-800" />
          <span className="hidden sm:inline">Quick Preview</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-bold liquid-glass-subtle text-slate-900 hover:text-slate-950 hover:border-slate-900 transition-all"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Live</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl liquid-glass-subtle text-slate-800 hover:text-slate-950 hover:border-slate-900 transition-all"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
