import React from 'react';

interface Props {
  step: number;
}

export default function WorkbenchDaemonStatus({ step }: Props) {
  return (
    <div className="px-5 py-3 bg-cyan-950/20 border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px]">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-300 font-semibold">Live Daemon Status:</span>
        {step === 1 && <span className="text-rose-300">Intercepted Runtime Regression in test_invoice.py</span>}
        {step === 2 && <span className="text-cyan-200">Querying Gemini 1.5 with AST Context...</span>}
        {step === 3 && <span className="text-amber-300">Verifying Patch in Shadow Docker Sandbox...</span>}
        {step === 4 && <span className="text-emerald-300">100% Tests Passed &bull; Patch Committed (3.8s)</span>}
      </div>
      <span className="text-[10px] text-slate-400 font-mono">Loop #{step} / 4</span>
    </div>
  );
}
