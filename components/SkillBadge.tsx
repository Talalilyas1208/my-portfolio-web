import React from 'react';

interface SkillBadgeProps {
  name: string;
  highlight?: boolean;
  level?: 'Advanced' | 'Proficient' | 'Core';
  size?: 'sm' | 'md';
}

const levelColors: Record<string, string> = {
  Core: 'text-violet-800',
  Advanced: 'text-emerald-800',
  Proficient: 'text-indigo-800',
};

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
          ? 'liquid-pill-violet text-slate-950 font-bold shadow-sm hover:scale-105'
          : 'liquid-glass-subtle text-slate-900 hover:text-slate-950 hover:border-slate-300 hover:scale-[1.02]'
      }`}
    >
      {highlight && (
        <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
      )}
      <span>{name}</span>
      {level && (
        <span className={`text-[10px] font-sans uppercase tracking-wider font-bold ${levelColors[level] || 'text-slate-700'}`}>
          {level}
        </span>
      )}
    </div>
  );
}
