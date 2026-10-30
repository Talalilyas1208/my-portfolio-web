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
                ? 'liquid-glass-accent shadow-sm scale-[1.01]'
                : 'liquid-glass-subtle hover:border-slate-300'
            }`}
            style={isSelected ? { borderColor: axis.color } : undefined}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2.5">
                <div
                  className="p-1.5 rounded-xl bg-white border border-slate-200"
                  style={{ color: axis.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-950">{axis.name}</span>
              </div>
              <span className="text-xs font-mono font-bold" style={{ color: axis.color }}>
                {axis.score}%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${axis.score}%`,
                  background: axis.color,
                }}
              />
            </div>

            <p className="text-[11px] font-mono text-slate-700 font-medium line-clamp-1">{axis.stack}</p>
          </div>
        );
      })}
    </div>
  );
}
