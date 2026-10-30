'use client';

import React from 'react';
import { TechItem } from '@/data/techOrbitData';

interface OrbitTrackProps {
  techs: TechItem[];
  radius: number;
  trackSize: number;
  trackAnim: string;
  badgeAnim: string;
  activeTechName: string | null;
  onHover: (tech: TechItem | null) => void;
  fontSize?: string;
  ringAccent?: 'violet' | 'cyan' | 'emerald';
}

const ringStyles = {
  violet: {
    selected: 'liquid-pill-violet text-violet-950 border-violet-500',
    dot: 'bg-violet-600',
    hover: 'hover:border-violet-500',
  },
  cyan: {
    selected: 'liquid-pill-primary text-indigo-950 border-indigo-500',
    dot: 'bg-indigo-600',
    hover: 'hover:border-indigo-500',
  },
  emerald: {
    selected: 'liquid-pill-emerald text-emerald-950 border-emerald-500',
    dot: 'bg-emerald-600',
    hover: 'hover:border-emerald-500',
  },
};

export default function OrbitTrack({
  techs,
  radius,
  trackSize,
  trackAnim,
  badgeAnim,
  activeTechName,
  onHover,
  fontSize = 'text-[11px]',
  ringAccent = 'violet',
}: OrbitTrackProps) {
  const style = ringStyles[ringAccent];

  return (
    <div
      className={`orbit-track absolute rounded-full ${trackAnim} flex items-center justify-center`}
      style={{ width: `${trackSize}px`, height: `${trackSize}px` }}
    >
      {techs.map((tech, idx) => {
        const angle = (idx / techs.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const isSelected = activeTechName === tech.name;
        return (
          <div
            key={tech.name}
            style={{ transform: `translate(${x}px, ${y}px)` }}
            onMouseEnter={() => onHover(tech)}
            onMouseLeave={() => onHover(null)}
            className="absolute"
          >
            <div className={`orbit-badge ${badgeAnim}`}>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono transition-all cursor-pointer ${fontSize} ${
                  isSelected
                    ? `${style.selected} scale-125 shadow-md font-bold`
                    : `liquid-glass text-slate-950 hover:scale-110 ${style.hover} font-semibold`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                {tech.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
