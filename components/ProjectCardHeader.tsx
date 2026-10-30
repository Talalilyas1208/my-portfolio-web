'use client';

import React from 'react';
import { Project } from '@/data/portfolioData';
import { useAppDispatch } from '@/store/hooks';
import { openQuickPreview } from '@/store/slices/projectsSlice';
import { Bot, Layers, Eye, Github } from 'lucide-react';

export default function ProjectCardHeader({ project }: { project: Project }) {
  const dispatch = useAppDispatch();
  const isFlagship = project.isFlagship;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
      <div className="flex items-center gap-2">
        {isFlagship ? (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold liquid-pill-violet text-violet-950">
            <Bot className="w-3.5 h-3.5 text-violet-700" />
            Flagship Autonomous AI Agent
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold liquid-pill-primary text-indigo-950">
            <Layers className="w-3 h-3 text-indigo-700" />
            {project.category}
          </span>
        )}
        <span className="text-xs font-mono text-slate-600 font-medium">{project.period}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => dispatch(openQuickPreview(project.slug))}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-900 hover:text-violet-800 liquid-glass-subtle hover:border-violet-400 transition-all font-bold"
          title="Instant 0ms Quick Preview"
        >
          <Eye className="w-3.5 h-3.5 text-violet-700" />
          <span className="hidden sm:inline">Quick Preview</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl liquid-glass-subtle text-slate-800 hover:text-slate-950 hover:border-violet-400 transition-all"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
