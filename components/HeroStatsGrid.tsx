import React from 'react';
import { personalData } from '@/data/portfolioData';

const statThemes = [
  { badge: 'text-slate-950', border: 'hover:border-slate-300', bar: 'from-slate-400 to-slate-400' },
  { badge: 'text-slate-950', border: 'hover:border-slate-300', bar: 'from-slate-400 to-blue-600' },
  { badge: 'text-slate-950', border: 'hover:border-slate-300', bar: 'from-slate-400 to-slate-400' },
  { badge: 'text-slate-950', border: 'hover:border-slate-300', bar: 'from-slate-400 to-orange-600' },
];

export default function HeroStatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200">
      {personalData.stats.map((stat, idx) => {
        const theme = statThemes[idx % statThemes.length];
        return (
          <div
            key={idx}
            className={`p-5 rounded-2xl liquid-glass liquid-glass-interactive text-center sm:text-left relative overflow-hidden ${theme.border}`}
          >
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.bar}`} />
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-slate-950">
              {stat.value}
            </div>
            <div className={`text-xs font-semibold mt-1 ${theme.badge}`}>
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
