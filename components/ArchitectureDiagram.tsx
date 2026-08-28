'use client';

import React, { useState } from 'react';
import { 
  Eye, 
  Code, 
  Bot, 
  ShieldCheck, 
  GitCommit, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers,
  Zap
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: '1. Watcher Daemon',
    icon: Eye,
    tag: 'Observation',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    description: 'Continuously monitors codebase events, intercepts test failures, and captures runtime exception traces in real time.',
    tech: ['Node.js', 'File Watcher', 'Jest/Vitest Hook'],
  },
  {
    id: 2,
    title: '2. AST & Context Extraction',
    icon: Code,
    tag: 'Analysis',
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
    description: 'Parses Abstract Syntax Trees (AST) to isolate broken functions, surrounding dependencies, and type interfaces.',
    tech: ['Babel/TypeScript AST', 'Scope Analysis', 'Context Window Optimizer'],
  },
  {
    id: 3,
    title: '3. Gemini 1.5 Pro LLM',
    icon: Bot,
    tag: 'Inference',
    color: 'from-primary-500/20 to-accent-cyan/20 text-primary-400 border-primary-500/30',
    description: 'Generates candidate unified code diffs by synthesizing stack traces, AST context, and requirement constraints.',
    tech: ['Google Gemini API', 'System Prompts', 'Structured JSON Output'],
  },
  {
    id: 4,
    title: '4. Sandboxed Verification',
    icon: ShieldCheck,
    tag: 'Validation',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    description: 'Applies candidate patch in an isolated ephemeral sandbox and re-executes all regression suites to guarantee 0 regressions.',
    tech: ['Docker Sandbox', 'Ephemeral Runtime', '100% Test Pass Gate'],
  },
  {
    id: 5,
    title: '5. Automated Git Commit',
    icon: GitCommit,
    tag: 'Deployment',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
    description: 'Once verified, automatically merges the fix, generates a semantic commit message, and notifies developer channels.',
    tech: ['Git Automation', 'Semantic Commits', 'Webhook Telemetry'],
  },
];

export default function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <div className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass-lg space-y-8 border border-white/[0.14]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-pill-primary text-cyan-200 mb-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-300" />
            <span>Autonomous Closed-Loop Pipeline Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            How The Self-Healing AI Code Agent Operates
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Click on any pipeline stage below to inspect the architectural responsibilities, data flow, and technologies.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl liquid-pill-emerald text-xs font-mono text-emerald-300 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Zero Human Intervention Required</span>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {steps.map((s) => {
          const Icon = s.icon;
          const isActive = activeStep === s.id;

          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'liquid-glass-accent border-2 border-cyan-400 shadow-liquid-glow scale-[1.03]'
                  : 'liquid-glass-subtle hover:border-white/20 hover:scale-[1.01]'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-xl liquid-glass ${s.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">{s.tag}</span>
              </div>
              <div className="font-semibold text-xs text-white truncate">{s.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Breakdown Panel (Liquid Glass Card) */}
      {(() => {
        const current = steps.find((s) => s.id === activeStep) || steps[0];
        const Icon = current.icon;

        return (
          <div className="p-6 rounded-2xl liquid-glass-subtle border border-cyan-500/30 space-y-4 animate-fade-in shadow-liquid-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl liquid-glass ${current.color}`}>
                  <Icon className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                    Stage {current.id} of 5 &bull; {current.tag}
                  </div>
                  <h4 className="text-lg font-bold text-white">{current.title}</h4>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {current.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl text-xs font-mono liquid-glass text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {current.description}
            </p>
          </div>
        );
      })()}
    </div>
  );
}
