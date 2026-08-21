import React from 'react';
import Link from 'next/link';
import { personalData } from '@/data/portfolioData';
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Bot, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  FileText,
  Mail,
  Zap
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-radial-hero">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-primary-600/10 text-primary-300 border border-primary-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>BS in Artificial Intelligence &bull; Available for Roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-gradient-blue">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 font-mono">
                {personalData.title}
              </p>
            </div>

            {/* Lead Positioning Headline Callout (Crucial Differentiator) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary-950/70 via-surface-200/90 to-surface-200/60 border border-primary-500/30 shadow-lg shadow-primary-950/50">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Core Differentiator
              </div>
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                Most developers build UI dashboards with React. I have also engineered an <strong className="text-primary-400 font-semibold underline decoration-primary-500/50 underline-offset-2">autonomous LLM agent that self-heals code</strong> in real-time — observing breakages, prompting Gemini, and validating sandboxed test passes before applying patches.
              </p>
            </div>

            {/* Short Bio summary */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personalData.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects/autonomous-gemini-code-fixer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium text-sm shadow-lg shadow-primary-600/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Bot className="w-4 h-4" />
                <span>Explore Flagship AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-200 hover:text-white font-medium text-sm border border-white/[0.08] transition-all"
              >
                <Layers className="w-4 h-4 text-primary-400" />
                <span>All Projects</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-300 hover:bg-surface-200 text-slate-300 hover:text-white font-medium text-sm border border-white/[0.05] transition-all"
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
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-primary-400" />
                GitHub
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-primary-400" />
                LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400">Lahore, PK</span>
            </div>
          </div>

          {/* Right Hero Interactive Visual: Live Agent Terminal Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d131f] border border-primary-500/30 shadow-2xl shadow-primary-950/60 overflow-hidden">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#090d16] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    gemini-code-healer.py
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  DAEMON RUNNING
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-3.5 leading-relaxed text-slate-300">
                <div className="text-slate-400">
                  <span className="text-primary-400">$</span> python agent.py --watch ./src --model gemini-1.5-flash
                </div>

                <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[11px] text-rose-400">
                    <span>[WATCHER]</span> AssertionError in test_invoice_reconciliation.py:42
                  </div>
                  <div className="text-[10px] text-rose-300/80">
                    &gt; Expected net_total $1,420.00, received NaN (TypeError: undefined rate)
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary-300 text-[11px]">
                  <Bot className="w-3.5 h-3.5 text-primary-400 animate-bounce" />
                  <span>Prompting Gemini 1.5 with AST context & stack trace...</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09101d] border border-primary-500/20 text-slate-300 space-y-1 text-[11px]">
                  <div className="text-accent-cyan font-semibold">
                    [SANDBOX] Generated Candidate Patch #1
                  </div>
                  <div className="text-slate-400 font-mono text-[10px]">
                    + const rate = taxBracket?.rate ?? 0.05;
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1 text-[10px] pt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    14/14 Unit Tests Passed in Isolation Sandbox
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between">
                  <span className="font-semibold">✓ Patch Committed to Source</span>
                  <span className="text-[10px] text-emerald-400/80">Latency: 2.8s</span>
                </div>
              </div>

              {/* Terminal Footer CTA */}
              <div className="p-3 bg-[#080c14] border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">Autonomous loop pipeline</span>
                <Link
                  href="/projects/autonomous-gemini-code-fixer"
                  className="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1 text-[11px]"
                >
                  View Case Study <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]">
          {personalData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-surface-200/50 border border-white/[0.05] text-center sm:text-left"
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
