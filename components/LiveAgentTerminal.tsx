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
    <div className="relative rounded-2xl bg-[#090d16] border border-primary-500/30 shadow-2xl shadow-primary-950/70 overflow-hidden font-mono text-xs">
      {/* Top Window Header */}
      <div className="px-4 py-3 bg-[#060910] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="text-xs text-slate-400 ml-2 font-medium">
            gemini-agent-daemon.ts
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.05]"
          >
            <RefreshCw className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Live Feed' : 'Paused'}</span>
          </button>

          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-3.5 leading-relaxed text-slate-300 min-h-[220px]">
        <div className="text-slate-400">
          <span className="text-primary-400">$</span> npx gemini-healer --watch ./src --model gemini-1.5-pro
        </div>

        {step >= 1 && (
          <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 space-y-1 animate-fade-in">
            <div className="flex items-center gap-1.5 font-semibold text-[11px] text-rose-400">
              <span>[RUNTIME REGRESSION]</span> TypeError: Cannot read properties of undefined
            </div>
            <div className="text-[10px] text-rose-300/80">
              &gt; in invoiceCalculator.ts: line 48 &bull; test_reconciliation.ts failed
            </div>
          </div>
        )}

        {step >= 2 && (
          <div className="flex items-center gap-2 text-primary-300 text-[11px] animate-fade-in">
            <Bot className="w-3.5 h-3.5 text-primary-400 animate-bounce" />
            <span>Querying Gemini 1.5 with AST context &amp; failed assertion trace...</span>
          </div>
        )}

        {step >= 3 && (
          <div className="p-2.5 rounded-xl bg-[#0d1627] border border-primary-500/30 text-slate-200 space-y-1.5 text-[11px] animate-fade-in">
            <div className="text-accent-cyan font-semibold flex items-center justify-between">
              <span>[SANDBOX] Generated Isolated Patch Candidate</span>
              <span className="text-[10px] text-slate-400 font-normal">Confidence: 99.4%</span>
            </div>
            <div className="text-slate-300 font-mono text-[10px] bg-black/40 p-2 rounded border border-white/[0.04]">
              + const safeRate = invoice?.taxBracket?.percentage ?? 0.05;
            </div>
            <div className="text-emerald-400 flex items-center gap-1 text-[10px] pt-0.5">
              <CheckCircle2 className="w-3 h-3" />
              14/14 Unit Tests Passed in Dockerized Sandbox
            </div>
          </div>
        )}

        {step >= 4 && (
          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center justify-between animate-fade-in">
            <span className="font-semibold">✓ Patch Verified &amp; Applied to Repository</span>
            <span className="text-[10px] text-emerald-400/80">Loop Duration: 2.1s</span>
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2.5 bg-[#060910] border-t border-white/[0.06] flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px]">Autonomous Closed-Loop Agent</span>
        <Link
          href="/projects/autonomous-gemini-code-fixer"
          className="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1 text-[11px] transition-colors"
        >
          <span>View Architecture Deep-Dive</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
