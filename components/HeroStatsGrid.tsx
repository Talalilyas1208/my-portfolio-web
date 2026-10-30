import React from 'react';
import { personalData } from '@/data/portfolioData';

const statThemes = [
  { badge: 'text-violet-800', border: 'hover:border-violet-400', bar: 'from-violet-600 to-purple-600' },
  { badge: 'text-indigo-800', border: 'hover:border-indigo-400', bar: 'from-indigo-600 to-blue-600' },
  { badge: 'text-emerald-800', border: 'hover:border-emerald-400', bar: 'from-emerald-600 to-teal-600' },
  { badge: 'text-amber-800', border: 'hover:border-amber-400', bar: 'from-amber-500 to-orange-600' },
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
