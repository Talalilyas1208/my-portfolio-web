import React from 'react';

interface Props {
  step: number;
  onSelectStep?: (step: number) => void;
}

const stages = [
  { id: 1, label: '1. Catch Trace', activeClass: 'liquid-pill-rose text-rose-950', dot: 'bg-rose-600' },
  { id: 2, label: '2. AST Context', activeClass: 'liquid-pill-violet text-violet-950', dot: 'bg-violet-600' },
  { id: 3, label: '3. Sandbox Test', activeClass: 'liquid-pill-amber text-amber-950', dot: 'bg-amber-600' },
  { id: 4, label: '4. Auto-Commit', activeClass: 'liquid-pill-emerald text-emerald-950', dot: 'bg-emerald-600' },
];

export default function WorkbenchDaemonStatus({ step, onSelectStep }: Props) {
  return (
    <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200 space-y-2.5 text-[11px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {stages.map((st) => {
          const isCurrent = step === st.id;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => onSelectStep && onSelectStep(st.id)}
              className={`px-2 py-1 rounded-lg font-mono text-[10px] flex items-center justify-center gap-1.5 transition-all ${
                isCurrent
                  ? `${st.activeClass} font-bold scale-[1.02]`
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? `${st.dot} animate-pulse` : 'bg-slate-400'}`} />
              <span className="truncate">{st.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
          <span className="text-slate-950 font-bold">AI Daemon:</span>
          {step === 1 && <span className="text-rose-800 font-semibold">Intercepted Runtime Regression in test_invoice.py</span>}
          {step === 2 && <span className="text-violet-800 font-semibold">Synthesizing Patch with AST Scope Context...</span>}
          {step === 3 && <span className="text-amber-800 font-semibold">Verifying Patch in Shadow Docker Sandbox...</span>}
          {step === 4 && <span className="text-emerald-800 font-semibold">100% Tests Passed &bull; Patch Committed (3.8s)</span>}
        </div>
        <span className="text-[10px] text-slate-600 font-mono font-semibold">Step {step}/4</span>
      </div>
    </div>
  );
}
