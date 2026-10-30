import React from 'react';

interface SkillBadgeProps {
  name: string;
  highlight?: boolean;
  level?: 'Advanced' | 'Proficient' | 'Core';
  size?: 'sm' | 'md';
}

const levelColors: Record<string, string> = {
  Core: 'text-violet-300',
  Advanced: 'text-emerald-300',
  Proficient: 'text-cyan-300',
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
          ? 'liquid-pill-violet text-white font-semibold shadow-sm hover:scale-105'
          : 'liquid-glass-subtle text-slate-200 hover:text-white hover:border-white/30 hover:scale-[1.02]'
      }`}
    >
      {highlight && (
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shadow-[0_0_6px_#a78bfa]" />
      )}
      <span>{name}</span>
      {level && (
        <span className={`text-[10px] font-sans uppercase tracking-wider font-semibold ${levelColors[level] || 'text-slate-400'}`}>
          {level}
        </span>
      )}
    </div>
  );
}
