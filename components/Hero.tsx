'use client';

import React from 'react';
import Link from 'next/link';
import { personalData } from '@/data/portfolioData';
import { Sparkles, ArrowRight, Github, Linkedin, Bot, Layers, Mail, MapPin } from 'lucide-react';
import HeroPortraitCard from '@/components/HeroPortraitCard';
import HeroStatsGrid from '@/components/HeroStatsGrid';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-radial-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium liquid-glass text-cyan-800 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available Worldwide for AI &amp; React Roles</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Hi, I&apos;m <span className="text-gradient-liquid">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 font-mono">
                {personalData.title}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl liquid-glass-accent shadow-liquid-glow-lg relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition duration-700" />
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
                The Core Differentiator
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                Most developers build UI dashboards with React. I have also engineered an <strong className="text-cyan-800 font-semibold underline decoration-cyan-500/50 underline-offset-2">autonomous LLM agent that self-heals code</strong> in real-time — observing breakages, prompting Gemini with AST context, and validating sandboxed test passes before applying patches.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-sans">
              {personalData.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/projects/autonomous-gemini-code-fixer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl liquid-btn-primary text-white font-semibold text-sm shadow-md"
              >
                <Bot className="w-4 h-4" />
                <span>Explore Flagship AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl liquid-glass text-slate-700 hover:text-slate-900 font-medium text-sm shadow-md"
              >
                <Layers className="w-4 h-4 text-cyan-600" />
                <span>Explore Projects</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl liquid-glass-subtle text-slate-700 hover:text-slate-900 font-medium text-sm shadow-md"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-3 text-xs text-slate-600 font-mono">
              <span className="text-slate-500">Connect:</span>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <Github className="w-3.5 h-3.5 text-blue-600" /> GitHub
              </a>
              <span className="text-slate-300">•</span>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
              </a>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600" /> Worldwide Remote
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
