'use client';

import React from 'react';
import Link from 'next/link';
import { personalData } from '@/data/portfolioData';
import { Sparkles, ArrowRight, Github, Linkedin, Bot, Layers, Mail, MapPin, Cpu } from 'lucide-react';
import HeroPortraitCard from '@/components/HeroPortraitCard';
import HeroStatsGrid from '@/components/HeroStatsGrid';

const aiLoopSteps = [
  { step: '01', label: 'AST Parse', pillClass: 'liquid-pill-primary text-cyan-200' },
  { step: '02', label: 'Gemini 1.5 Synth', pillClass: 'liquid-pill-violet text-violet-200' },
  { step: '03', label: 'Docker Sandbox', pillClass: 'liquid-pill-amber text-amber-200' },
  { step: '04', label: 'Auto-Heal Patch', pillClass: 'liquid-pill-emerald text-emerald-200' },
];

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-radial-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-200 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Available Worldwide for AI &amp; React Roles</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold liquid-pill-violet text-violet-200">
                <Cpu className="w-3.5 h-3.5 text-violet-300" />
                <span>BS Artificial Intelligence</span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-gradient-liquid">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200 font-mono">
                {personalData.title}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl liquid-glass-accent relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-violet-500/25 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition duration-700" />
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  The Core AI Engineering Differentiator
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-mono px-2.5 py-0.5 rounded-full liquid-pill-amber text-amber-200 font-semibold">
                  84.6% Auto-Fix Rate
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Most developers build UI dashboards with React. I have also engineered an{' '}
                <strong className="text-cyan-300 font-semibold underline decoration-violet-400/70 underline-offset-4">
                  autonomous LLM agent that self-heals code
                </strong>{' '}
                in real-time — observing breakages, prompting Gemini with AST context, and validating sandboxed test passes before applying patches.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-4 mt-3 border-t border-white/[0.1]">
                {aiLoopSteps.map((item) => (
                  <span key={item.step} className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-semibold ${item.pillClass}`}>
                    {item.step} &bull; {item.label}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              {personalData.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/projects/autonomous-gemini-code-fixer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl liquid-btn-primary text-white font-semibold text-sm shadow-md"
              >
                <Bot className="w-4 h-4 text-cyan-200" />
                <span>Explore Flagship AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl liquid-btn-secondary text-slate-100 hover:text-white font-medium text-sm shadow-md"
              >
                <Layers className="w-4 h-4 text-violet-400" />
                <span>Explore Projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl liquid-glass-subtle text-slate-200 hover:text-white hover:border-emerald-400/40 font-medium text-sm shadow-md transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-300 font-mono">
              <span className="text-slate-400">Connect:</span>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-violet-300 transition-colors">
                <Github className="w-3.5 h-3.5 text-violet-400" /> GitHub
              </a>
              <span className="text-slate-600">&bull;</span>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
              </a>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-200 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" /> Worldwide Remote
              </span>
            </div>
          </div>

          <HeroPortraitCard />
        </div>

        <HeroStatsGrid />
      </div>
    </section>
  );
}
