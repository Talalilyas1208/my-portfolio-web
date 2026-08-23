'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { personalData } from '@/data/portfolioData';
import { 
  Sparkles, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Bot, 
  CheckCircle2, 
  Layers, 
  Mail, 
  Zap,
  GraduationCap,
  MapPin,
  Cpu
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-radial-hero">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Biography & Headline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-primary-600/10 text-primary-300 border border-primary-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available Worldwide for AI &amp; React Roles</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-gradient-blue">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 font-mono">
                {personalData.title}
              </p>
            </div>

            {/* Differentiator Callout Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary-950/70 via-surface-200/90 to-surface-200/60 border border-primary-500/30 shadow-xl shadow-primary-950/40 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition duration-500"></div>
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
                The Core Differentiator
              </div>
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                Most developers build UI dashboards with React. I have also engineered an <strong className="text-primary-400 font-semibold underline decoration-primary-500/50 underline-offset-2">autonomous LLM agent that self-heals code</strong> in real-time — observing breakages, prompting Gemini with AST context, and validating sandboxed test passes before applying patches.
              </p>
            </div>

            {/* Short Bio summary */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
              {personalData.shortBio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/projects/autonomous-gemini-code-fixer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm shadow-xl shadow-primary-600/30 transition-all hover:scale-[1.03] active:scale-95"
              >
                <Bot className="w-4 h-4" />
                <span>Explore Flagship AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-200 hover:text-white font-medium text-sm border border-white/[0.08] transition-all hover:border-primary-500/30"
              >
                <Layers className="w-4 h-4 text-primary-400" />
                <span>Explore Projects</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-surface-300 hover:bg-surface-200 text-slate-300 hover:text-white font-medium text-sm border border-white/[0.05] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Social Proof / Quick Links */}
            <div className="flex items-center gap-4 pt-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">Connect:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-primary-400" />
                GitHub
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-primary-400" />
                LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-primary-400" />
                Worldwide Remote
              </span>
            </div>
          </div>

          {/* Right Column: Executive Portrait Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Background Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary-600/30 via-accent-cyan/20 to-primary-400/20 rounded-[32px] blur-2xl opacity-80 pointer-events-none"></div>

              {/* Main Portrait Card Container */}
              <div className="relative rounded-[28px] bg-gradient-to-b from-[#151e30] via-[#0e1524] to-[#0a0f1a] border border-primary-500/40 shadow-2xl p-3 sm:p-4 transition-all duration-300 hover:border-primary-400 group">
                
                {/* Image Frame */}
                <div className="relative w-full h-[420px] sm:h-[470px] rounded-[22px] overflow-hidden bg-slate-900 border border-white/[0.08]">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Talal — AI & Full-Stack React Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Subtle Gradient Overlays for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium bg-black/60 backdrop-blur-md text-slate-200 border border-white/10 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Active for Hire</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium bg-primary-950/70 backdrop-blur-md text-primary-300 border border-primary-500/30 shadow-lg">
                      <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>AI &amp; React</span>
                    </div>
                  </div>

                  {/* Bottom Overlay Label inside Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-base">
                        Muhammad Talal
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                        BS AI (2023)
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono">
                      Autonomous AI Agent Architect &bull; React Specialist
                    </p>
                  </div>
                </div>

                {/* Card Sub-Features Pill Rail */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-surface-300/80 border border-white/[0.04]">
                    <div className="text-xs font-mono font-bold text-primary-400">Agentic AI</div>
                    <div className="text-[10px] text-slate-400">Closed-Loop LLM Systems</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-300/80 border border-white/[0.04]">
                    <div className="text-xs font-mono font-bold text-accent-cyan">Next.js 14 &amp; Redux</div>
                    <div className="text-[10px] text-slate-400">Sub-Second Architectures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]">
          {personalData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-200/60 backdrop-blur-sm border border-white/[0.05] hover:border-primary-500/30 transition-all text-center sm:text-left"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-primary-400">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
