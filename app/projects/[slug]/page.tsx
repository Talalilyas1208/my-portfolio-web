import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData, personalData, Project } from '@/data/portfolioData';
import JsonLd from '@/components/JsonLd';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Layers, 
  Cpu, 
  Zap, 
  TrendingUp,
  FileCode,
  ShieldCheck
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const siteUrl = 'https://talalai.vercel.app';
  const url = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    keywords: [
      project.title,
      ...project.techStack,
      'Muhammad Talal',
      'Case Study',
      'Software Architecture',
    ],
    openGraph: {
      title: `${project.title} | Case Study by Muhammad Talal`,
      description: project.summary,
      url,
      type: 'article',
      siteName: `${personalData.name} Portfolio`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study`,
      description: project.summary,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.summary,
    programmingLanguage: project.techStack.join(', '),
    codeRepository: project.githubUrl,
    author: {
      '@type': 'Person',
      name: personalData.name,
      url: 'https://talalai.vercel.app',
    },
    keywords: project.techStack.join(', '),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://talalai.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://talalai.vercel.app/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://talalai.vercel.app/projects/${project.slug}`,
      },
    ],
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <JsonLd data={jsonLdData} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Back link & Category */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium liquid-pill text-slate-300">
          {project.category}
        </span>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        {project.isFlagship && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill-primary text-cyan-200">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            Flagship Autonomous AI Agent Architecture
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-cyan-300 font-mono font-medium leading-relaxed">
          {project.subtitle}
        </p>

        {/* Action / Repo Link */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl liquid-btn-secondary text-slate-100 font-medium text-xs"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View Source on GitHub</span>
            </a>
          )}
          <span className="text-xs font-mono text-slate-400">Timeline: {project.period}</span>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-xl text-xs font-mono liquid-glass-subtle text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Differentiator Callout Box (Liquid Glass Accent) */}
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent shadow-liquid-glow space-y-2 border border-cyan-500/40">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
          <Zap className="w-4 h-4 text-cyan-300" />
          The Key Engineering Differentiator
        </div>
        <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed font-sans">
          {project.keyDifferentiator}
        </p>
      </div>

      {/* Metrics Grid (Liquid Glass Tiles) */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl liquid-glass-subtle text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-gradient-cyan mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-slate-300 font-sans font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Problem & Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-7 rounded-3xl liquid-glass-subtle space-y-3">
          <div className="flex items-center gap-2 text-rose-300 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            The Problem Statement
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {project.problemStatement}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl liquid-glass-subtle space-y-3">
          <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            The Engineering Solution
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>
      </div>

      {/* Architecture Deep Dive */}
      <div className="space-y-8">
        <div className="border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <Cpu className="w-6 h-6 text-cyan-400" />
            Architectural Deep Dive &amp; System Design
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            How the components interface to provide performance, isolation, and reliability.
          </p>
        </div>

        <div className="space-y-6">
          {project.architectureDetails.map((arch, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass space-y-4 border border-white/[0.12]"
            >
              <h3 className="text-lg font-bold text-cyan-300 font-mono">
                {arch.title}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                {arch.description}
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/[0.08]">
                {arch.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Code Snippet Highlight if available */}
      {project.codeSnippet && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <FileCode className="w-4 h-4 text-cyan-400" />
              <span>Core Implementation Logic: {project.codeSnippet.filename}</span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase liquid-pill px-2.5 py-0.5 rounded-full">
              {project.codeSnippet.language}
            </span>
          </div>

          <div className="rounded-3xl liquid-glass p-6 overflow-x-auto border border-white/[0.12]">
            <pre className="font-mono text-xs text-slate-200 leading-relaxed">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Key Features */}
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass space-y-4 border border-white/[0.12]">
        <h3 className="text-xl font-bold text-white">Key Capabilities &amp; Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_6px_#22d3ee]"></span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Challenges & Solutions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Technical Challenges &amp; How They Were Solved
        </h2>

        <div className="space-y-4">
          {project.challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl liquid-glass-subtle space-y-3 border border-white/[0.1]"
            >
              <div className="flex items-start gap-2 text-sm font-semibold text-rose-300">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 shrink-0">
                  Challenge #{idx + 1}
                </span>
                <span>{item.challenge}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-emerald-300 pl-3 border-l-2 border-emerald-500/50 mt-2">
                <span className="leading-relaxed text-slate-200">
                  <strong className="text-emerald-400 font-medium">Applied Solution: </strong>
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes & Impact */}
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-cyan-500/30 shadow-liquid-glass-lg space-y-4">
        <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          Measurable Engineering Impact
        </div>
        <div className="space-y-2.5">
          {project.outcomesAndImpact.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA & Navigation */}
      <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-2xl liquid-btn-primary text-white font-medium text-xs"
        >
          Discuss this Project with Talal
        </Link>
      </div>
    </div>
  );
}
