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
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between select-none pointer-events-none opacity-60">
      {/* Left ruler ticks & station marker */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
          {station}
        </span>
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40"></span>
          <span className="w-8 h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent"></span>
        </div>
      </div>

      {/* Center continuous hairline with diamond crosshair */}
      <div className="flex-1 mx-4 sm:mx-8 flex items-center justify-center relative">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"></div>
        <div className="absolute flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#080d22]/90 backdrop-blur-md border border-white/[0.18] text-[9px] font-mono text-slate-300 tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 text-cyan-400 animate-pulse">
            <path d="M8 0L16 8L8 16L0 8Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{label}</span>
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 text-cyan-400 animate-pulse">
            <path d="M8 0L16 8L8 16L0 8Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Right ruler ticks & waterline marker */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-8 h-[1px] bg-gradient-to-l from-cyan-400/40 to-transparent"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40"></span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
          WL 100
        </span>
      </div>
    </div>
  );
}
