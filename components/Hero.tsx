'use client';

import React from 'react';
import Link from 'next/link';
import { personalData } from '@/data/portfolioData';
import { ArrowRight, Github, Linkedin, Bot, Layers, Mail, MapPin, Cpu, Terminal } from 'lucide-react';
import HeroPortraitCard from '@/components/HeroPortraitCard';
import HeroStatsGrid from '@/components/HeroStatsGrid';

const aiLoopSteps = [
  { step: '01', label: 'AST Parse', pillClass: 'liquid-pill-violet text-violet-950' },
  { step: '02', label: 'LLM Patch Synth', pillClass: 'liquid-pill-primary text-sky-950' },
  { step: '03', label: 'Docker Sandbox', pillClass: 'liquid-pill-amber text-amber-950' },
  { step: '04', label: 'Auto-Heal Commit', pillClass: 'liquid-pill-emerald text-emerald-950' },
];

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-radial-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill-emerald text-emerald-950 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span>Available Worldwide for AI &amp; React Roles</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold liquid-pill-violet text-violet-950">
                <Cpu className="w-3.5 h-3.5 text-violet-700" />
                <span>BS Artificial Intelligence</span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                Hi, I&apos;m <span className="text-gradient-liquid">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-800 font-mono">
                {personalData.title}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl liquid-glass-accent relative overflow-hidden group">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-900 uppercase tracking-wider">
                  <Terminal className="w-4 h-4 text-violet-700" />
                  The Core AI Engineering Differentiator
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-mono px-2.5 py-0.5 rounded-full liquid-pill-amber text-amber-950 font-bold">
                  84.6% Auto-Fix Rate
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                Most developers build UI dashboards with React. I have also engineered an{' '}
                <strong className="text-violet-900 font-bold underline decoration-violet-500 underline-offset-4">
                  autonomous LLM agent that self-heals code
                </strong>{' '}
                in real-time — observing breakages, extracting AST context, and validating sandboxed test passes before applying patches.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-4 mt-3 border-t border-slate-200">
                {aiLoopSteps.map((item) => (
                  <span key={item.step} className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold ${item.pillClass}`}>
                    {item.step} &bull; {item.label}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-800 leading-relaxed max-w-2xl font-sans">
              {personalData.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/projects/autonomous-gemini-code-fixer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl liquid-btn-primary text-slate-950 font-bold text-sm shadow-sm"
              >
                <Bot className="w-4 h-4" />
                <span>Explore Flagship AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl liquid-btn-secondary text-slate-950 font-semibold text-sm shadow-sm"
              >
                <Layers className="w-4 h-4 text-violet-700" />
                <span>Explore Projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl liquid-glass-subtle text-slate-900 hover:text-slate-950 hover:border-emerald-500 font-semibold text-sm shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-800 font-mono font-medium">
              <span className="text-slate-600">Connect:</span>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-900 hover:text-violet-700 transition-colors">
                <Github className="w-3.5 h-3.5 text-violet-700" /> GitHub
              </a>
              <span className="text-slate-400">&bull;</span>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-900 hover:text-indigo-700 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-indigo-700" /> LinkedIn
              </a>
              <span className="text-slate-400">&bull;</span>
              <span className="text-slate-900 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-700" /> Worldwide Remote
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
