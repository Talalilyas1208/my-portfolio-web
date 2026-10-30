import React from 'react';
import { personalData } from '@/data/portfolioData';

const statThemes = [
  { gradient: 'text-gradient-violet', border: 'hover:border-violet-400/50', bar: 'from-violet-500 to-fuchsia-500' },
  { gradient: 'text-gradient-cyan', border: 'hover:border-cyan-400/50', bar: 'from-cyan-400 to-blue-500' },
  { gradient: 'text-gradient-emerald', border: 'hover:border-emerald-400/50', bar: 'from-emerald-400 to-teal-500' },
  { gradient: 'text-gradient-amber', border: 'hover:border-amber-400/50', bar: 'from-amber-400 to-orange-500' },
];

export default function HeroStatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/[0.08]">
      {personalData.stats.map((stat, idx) => {
        const theme = statThemes[idx % statThemes.length];
        return (
          <div
            key={idx}
            className={`p-5 rounded-2xl liquid-glass liquid-glass-interactive text-center sm:text-left relative overflow-hidden ${theme.border}`}
          >
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.bar} opacity-80`} />
            <div className={`text-xl sm:text-2xl font-extrabold font-mono ${theme.gradient}`}>
              {stat.value}
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
