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
  showIndicator?: boolean;
}

export default function OrbitTrack({
  techs,
  radius,
  trackSize,
  trackAnim,
  badgeAnim,
  activeTechName,
  onHover,
  fontSize = 'text-[11px]',
  showIndicator = false,
}: OrbitTrackProps) {
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
                    ? 'liquid-pill-primary text-cyan-100 scale-125 border-cyan-300 shadow-liquid-glow-lg'
                    : 'liquid-glass text-slate-200 hover:scale-110 hover:border-cyan-300'
                }`}
              >
                {showIndicator && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                {tech.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
