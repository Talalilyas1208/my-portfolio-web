import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { ArrowLeft, Sparkles, Github, Zap } from 'lucide-react';
import ProjectMetricsRow from '@/components/ProjectMetricsRow';

export default function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to all projects</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium liquid-glass text-slate-300">
          {project.category}
        </span>
      </div>

      <div className="space-y-6">
        {project.isFlagship && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill-primary text-cyan-200">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Flagship Autonomous AI Agent Architecture
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-cyan-600 font-mono font-medium leading-relaxed">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl liquid-glass text-slate-100 font-medium text-xs hover:border-cyan-400"
            >
              <Github className="w-4 h-4 text-cyan-400" /> <span>View Source on GitHub</span>
            </a>
          )}
          <span className="text-xs font-mono text-slate-500">Timeline: {project.period}</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-xl text-xs font-mono liquid-glass text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent shadow-liquid-glow space-y-2 border border-cyan-500/40">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
          <Zap className="w-4 h-4 text-cyan-300" /> The Key Engineering Differentiator
        </div>
        <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed font-sans">
          {project.keyDifferentiator}
        </p>
      </div>

      <ProjectMetricsRow metrics={project.metrics} />
    </>
  );
}
