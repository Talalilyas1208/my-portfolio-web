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
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between select-none pointer-events-none">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-slate-700 tracking-widest uppercase font-bold">
          {station}
        </span>
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          <span className="w-8 h-[1px] bg-gradient-to-r from-slate-400 to-transparent" />
        </div>
      </div>

      <div className="flex-1 mx-4 sm:mx-8 flex items-center justify-center relative">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[9px] font-mono text-slate-900 font-bold tracking-widest uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          <span>{label}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-8 h-[1px] bg-gradient-to-l from-slate-400 to-transparent" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        </div>
        <span className="text-[10px] font-mono text-slate-700 font-bold tracking-widest uppercase">
          AI · SYNC
        </span>
      </div>
    </div>
  );
}
