import React from 'react';

interface Props {
  height?: string;
  label?: string;
}

export default function LazyLoadingPlaceholder({
  height = 'h-72',
  label = 'Loading interactive component...',
}: Props) {
  return (
    <div
      className={`w-full ${height} rounded-3xl liquid-glass border border-white/[0.12] p-8 flex flex-col items-center justify-center space-y-4 animate-pulse`}
      aria-busy="true"
      aria-label={label}
    >
      <div className="w-12 h-12 rounded-2xl liquid-glass-subtle border border-cyan-400/30 flex items-center justify-center">
        <span className="w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
      </div>
      <div className="space-y-2 text-center max-w-xs">
        <div className="h-3 bg-white/10 rounded-full w-32 mx-auto" />
        <div className="h-2 bg-white/5 rounded-full w-48 mx-auto" />
      </div>
      <span className="text-[11px] font-mono text-slate-400">{label}</span>
    </div>
  );
}
