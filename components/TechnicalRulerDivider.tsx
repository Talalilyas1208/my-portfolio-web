import React from 'react';

interface TechnicalRulerDividerProps {
  station?: string;
  label?: string;
}

export default function TechnicalRulerDivider({
  station = 'STA 200',
  label = 'SYSTEM BOUNDARY',
}: TechnicalRulerDividerProps) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between select-none pointer-events-none opacity-90">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-violet-400 tracking-widest uppercase font-semibold">
          {station}
        </span>
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
          <span className="w-8 h-[1px] bg-gradient-to-r from-violet-400/60 to-transparent" />
        </div>
      </div>

      <div className="flex-1 mx-4 sm:mx-8 flex items-center justify-center relative">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-violet-400/30 text-[9px] font-mono text-slate-200 tracking-widest uppercase shadow-md">
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 text-cyan-400 animate-pulse">
            <path d="M8 0L16 8L8 16L0 8Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{label}</span>
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 text-violet-400 animate-pulse">
            <path d="M8 0L16 8L8 16L0 8Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-8 h-[1px] bg-gradient-to-l from-cyan-400/60 to-transparent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
        </div>
        <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
          AI · SYNC
        </span>
      </div>
    </div>
  );
}
