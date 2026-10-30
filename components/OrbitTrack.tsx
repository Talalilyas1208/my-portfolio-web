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
    selected: 'liquid-pill-violet text-white border-violet-400',
    dot: 'bg-violet-400',
    hover: 'hover:border-violet-400/60',
  },
  cyan: {
    selected: 'liquid-pill-primary text-white border-cyan-400',
    dot: 'bg-cyan-400',
    hover: 'hover:border-cyan-400/60',
  },
  emerald: {
    selected: 'liquid-pill-emerald text-white border-emerald-400',
    dot: 'bg-emerald-400',
    hover: 'hover:border-emerald-400/60',
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
  ringAccent = 'cyan',
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
                    : `liquid-glass text-slate-100 hover:scale-110 ${style.hover} font-medium`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${style.dot} animate-pulse`} />
                {tech.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
