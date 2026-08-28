import React from 'react';

interface SkillBadgeProps {
  name: string;
  highlight?: boolean;
  level?: 'Advanced' | 'Proficient' | 'Core';
  size?: 'sm' | 'md';
}

export default function SkillBadge({
  name,
  highlight = false,
  level,
  size = 'md',
}: SkillBadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-xs sm:text-sm';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl font-mono transition-all duration-300 ${sizeClasses} ${
        highlight
          ? 'liquid-pill-primary text-cyan-200 shadow-liquid-glow hover:scale-105'
          : 'liquid-glass-subtle text-slate-300 hover:text-white hover:border-white/25 hover:scale-[1.02]'
      }`}
    >
      {highlight && (
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]"></span>
      )}
      <span>{name}</span>
      {level && (
        <span className="text-[10px] text-slate-400 font-sans uppercase tracking-wider font-semibold">
          {level}
        </span>
      )}
    </div>
  );
}
