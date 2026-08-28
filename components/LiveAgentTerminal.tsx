'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, CheckCircle2, ArrowRight, Play, RefreshCw, Terminal } from 'lucide-react';

export default function LiveAgentTerminal() {
  const [step, setStep] = useState(3);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="relative rounded-3xl liquid-glass shadow-liquid-glass-lg overflow-hidden font-mono text-xs border border-white/[0.14]">
      {/* Top Window Header (Liquid Frosted Glass Bar) */}
      <div className="px-4 py-3.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
          <span className="text-xs text-slate-300 ml-2 font-medium">
            gemini-agent-daemon.ts
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded-xl liquid-glass-subtle hover:border-white/20 transition-all"
          >
            <RefreshCw className={`w-3 h-3 ${isRunning ? 'animate-spin text-cyan-400' : 'text-slate-400'}`} />
            <span>{isRunning ? 'Live Feed' : 'Paused'}</span>
          </button>

          <span className="flex items-center gap-1.5 text-[10px] text-emerald-300 liquid-pill-emerald px-2.5 py-0.5 rounded-full font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-3.5 leading-relaxed text-slate-200 min-h-[230px]">
        <div className="text-slate-400 flex items-center gap-2 font-mono">
          <span className="text-cyan-400 font-bold">$</span>
          <span>npx gemini-healer --watch ./src --model gemini-1.5-pro</span>
        </div>

        {step >= 1 && (
          <div className="p-3 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-200 space-y-1 animate-fade-in shadow-[0_4px_16px_rgba(244,63,94,0.15)]">
            <div className="flex items-center gap-1.5 font-semibold text-[11px] text-rose-300">
              <span>[RUNTIME REGRESSION]</span> TypeError: Cannot read properties of undefined
            </div>
            <div className="text-[10px] text-rose-300/80">
              &gt; in invoiceCalculator.ts: line 48 &bull; test_reconciliation.ts failed
            </div>
          </div>
        )}

        {step >= 2 && (
          <div className="flex items-center gap-2 text-cyan-300 text-[11px] animate-fade-in p-2 rounded-xl liquid-glass-subtle">
            <Bot className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span>Querying Gemini 1.5 with AST context &amp; failed assertion trace...</span>
          </div>
        )}

        {step >= 3 && (
          <div className="p-3.5 rounded-2xl liquid-glass-accent border border-cyan-500/40 text-slate-100 space-y-2 text-[11px] animate-fade-in shadow-liquid-glow">
            <div className="text-cyan-300 font-semibold flex items-center justify-between">
              <span>[SANDBOX] Generated Isolated Patch Candidate</span>
              <span className="text-[10px] text-slate-300 font-normal liquid-pill px-2 py-0.5 rounded-full">Confidence: 99.4%</span>
            </div>
            <div className="text-slate-200 font-mono text-[10px] bg-black/50 p-2.5 rounded-xl border border-white/10">
              + const safeRate = invoice?.taxBracket?.percentage ?? 0.05;
            </div>
            <div className="text-emerald-300 flex items-center gap-1.5 text-[10px] pt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              14/14 Unit Tests Passed in Dockerized Sandbox
            </div>
          </div>
        )}

        {step >= 4 && (
          <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-[11px] flex items-center justify-between animate-fade-in shadow-[0_4px_16px_rgba(16,185,129,0.15)]">
            <span className="font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Patch Verified &amp; Applied to Repository
            </span>
            <span className="text-[10px] text-emerald-300/90 font-mono">Loop: 2.1s</span>
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-3 bg-white/[0.03] border-t border-white/[0.08] flex items-center justify-between text-xs backdrop-blur-md">
        <span className="text-slate-400 text-[11px]">Autonomous Closed-Loop Agent</span>
        <Link
          href="/projects/autonomous-gemini-code-fixer"
          className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-[11px] transition-colors"
        >
          <span>View Architecture Deep-Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
