'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectPreviewProject, closeQuickPreview } from '@/store/slices/projectsSlice';
import { X, ArrowRight, Github, Sparkles } from 'lucide-react';
import ModalMetricsOverview from '@/components/ModalMetricsOverview';

export default function ProjectQuickPreviewModal() {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectPreviewProject);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeQuickPreview());
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, dispatch]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl liquid-glass border border-slate-200/90 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {project.isFlagship ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold liquid-pill-primary text-cyan-800">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-700 animate-pulse" /> Flagship Autonomous AI Agent
                </span>
              ) : (
                <span className="text-xs font-mono text-cyan-800 liquid-pill px-3 py-1 rounded-full font-semibold">
                  {project.category}
                </span>
              )}
              <span className="text-xs font-mono text-slate-500">{project.period}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{project.title}</h3>
            <p className="text-xs sm:text-sm text-cyan-700 font-mono mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={() => dispatch(closeQuickPreview())}
            className="p-2.5 rounded-2xl liquid-glass-subtle text-slate-500 hover:text-slate-900 transition-all"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ModalMetricsOverview project={project} />

        <div>
          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Technologies &amp; Tools</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-xl text-xs font-mono liquid-glass-subtle text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl liquid-btn-secondary text-slate-700 hover:text-slate-900 text-xs font-medium"
            >
              <Github className="w-3.5 h-3.5" /> <span>GitHub Repo</span>
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            onClick={() => dispatch(closeQuickPreview())}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl liquid-btn-primary text-white font-semibold text-xs ml-auto"
          >
            <span>Read Complete Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
