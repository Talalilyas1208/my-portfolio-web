'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectPreviewProject, closeQuickPreview } from '@/store/slices/projectsSlice';
import { X, ArrowRight, ExternalLink, Github, Sparkles, CheckCircle2, Cpu, Zap } from 'lucide-react';

export default function ProjectQuickPreviewModal() {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectPreviewProject);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeQuickPreview());
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e1524] border border-primary-500/40 shadow-2xl shadow-primary-950/80 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {project.isFlagship ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-primary-600 to-accent-cyan text-white">
                  <Sparkles className="w-3 h-3" /> Flagship Autonomous AI Agent
                </span>
              ) : (
                <span className="text-xs font-mono text-primary-400 bg-primary-600/10 px-2.5 py-0.5 rounded-full border border-primary-500/20">
                  {project.category}
                </span>
              )}
              <span className="text-xs font-mono text-slate-500">{project.period}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-primary-300 font-mono mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={() => dispatch(closeQuickPreview())}
            className="p-2 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-400 hover:text-white border border-white/[0.06] transition-all"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Key Differentiator Callout */}
        {project.keyDifferentiator && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-950/80 via-surface-200/90 to-surface-200/60 border border-primary-500/30 text-xs sm:text-sm space-y-1">
            <span className="font-bold text-accent-cyan font-mono flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Engineering Differentiator:
            </span>
            <p className="text-slate-200 leading-relaxed">{project.keyDifferentiator}</p>
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-surface-300/80 border border-white/[0.04] text-center">
                <div className="text-lg font-bold font-mono text-primary-400">{m.value}</div>
                <div className="text-[10px] text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Summary & Overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Overview & Problem Solved
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-300 hover:text-white text-xs font-medium border border-white/[0.06] transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            onClick={() => dispatch(closeQuickPreview())}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-xs shadow-lg shadow-primary-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Read Complete Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
