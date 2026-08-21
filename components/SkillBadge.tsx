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
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs sm:text-sm';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg font-mono transition-all duration-200 ${sizeClasses} ${
        highlight
          ? 'bg-primary-600/15 text-primary-300 border border-primary-500/30 hover:border-primary-400/60 hover:bg-primary-600/25 shadow-sm shadow-primary-500/10'
          : 'bg-surface-200/80 text-slate-300 border border-white/[0.06] hover:border-white/[0.15] hover:text-white'
      }`}
    >
      {highlight && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
      )}
      <span>{name}</span>
      {level && (
        <span className="text-[10px] text-slate-500 font-sans uppercase tracking-wider">
          {level}
        </span>
      )}
    </div>
  );
}
