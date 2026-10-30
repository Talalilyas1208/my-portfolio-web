import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { ArrowLeft, Cpu, Github, Zap } from 'lucide-react';
import ProjectMetricsRow from '@/components/ProjectMetricsRow';

export default function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 hover:text-violet-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to all projects</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold liquid-pill-primary text-indigo-800">
          {project.category}
        </span>
      </div>

      <div className="space-y-6">
        {project.isFlagship && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill-violet text-violet-800">
            <Cpu className="w-3.5 h-3.5 text-violet-700" /> Flagship Autonomous AI Agent Architecture
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-violet-700 font-mono font-semibold leading-relaxed">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl liquid-btn-secondary text-slate-950 font-semibold text-xs hover:border-violet-400"
            >
              <Github className="w-4 h-4 text-violet-700" /> <span>View Source on GitHub</span>
            </a>
          )}
          <span className="text-xs font-mono text-slate-600 font-medium">Timeline: {project.period}</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-xl text-xs font-mono liquid-glass-subtle text-slate-800 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent shadow-sm space-y-2 border border-violet-300">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
          <Zap className="w-4 h-4 text-amber-600" /> The Key Engineering Differentiator
        </div>
        <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed font-sans">
          {project.keyDifferentiator}
        </p>
      </div>

      <ProjectMetricsRow metrics={project.metrics} />
    </>
  );
}
