'use client';

import React from 'react';
import { CompetencyAxis } from '@/data/competencyRadarData';

interface CompetencyAxisListProps {
  axes: CompetencyAxis[];
  activeAxis: string;
  onSelectAxis: (id: string, idx: number) => void;
}

export default function CompetencyAxisList({
  axes,
  activeAxis,
  onSelectAxis,
}: CompetencyAxisListProps) {
  return (
    <div className="lg:col-span-6 space-y-3">
      {axes.map((axis, idx) => {
        const isSelected = activeAxis === axis.id;
        const Icon = axis.icon;

        return (
          <div
            key={axis.id}
            onMouseEnter={() => onSelectAxis(axis.id, idx)}
            onClick={() => onSelectAxis(axis.id, idx)}
            className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
              isSelected
                ? 'liquid-glass-accent border-cyan-400/60 shadow-liquid-glow scale-[1.02]'
                : 'liquid-glass-subtle hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2.5">
                <div className={`p-1.5 rounded-xl ${isSelected ? 'liquid-glass text-cyan-300' : 'liquid-glass-subtle text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-100">{axis.name}</span>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-300">{axis.score}%</span>
            </div>

            <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden mb-2">
              <div
                className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-primary-500"
                style={{ width: `${axis.score}%` }}
              />
            </div>

            <p className="text-[11px] font-mono text-slate-400 line-clamp-1">{axis.stack}</p>
          </div>
        );
      })}
    </div>
  );
}
