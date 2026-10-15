import React from 'react';
import { personalData } from '@/data/portfolioData';

export default function HeroStatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200">
      {personalData.stats.map((stat, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl liquid-glass liquid-glass-interactive text-center sm:text-left"
        >
          <div className="text-xl sm:text-2xl font-bold font-mono text-gradient-cyan">
            {stat.value}
          </div>
          <div className="text-xs text-slate-300 font-medium mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
