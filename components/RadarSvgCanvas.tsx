'use client';

import React from 'react';
import { CompetencyAxis } from '@/data/competencyRadarData';

interface RadarSvgCanvasProps {
  axes: CompetencyAxis[];
  activeAxis: string;
  onSelectAxis: (id: string, idx: number) => void;
}

export default function RadarSvgCanvas({ axes, activeAxis, onSelectAxis }: RadarSvgCanvasProps) {
  const cx = 210, cy = 210, maxR = 160;
  const totalAxes = axes.length;
  const gridLevels = [20, 40, 60, 80, 100];

  const getCoordinates = (index: number, scorePercentage: number) => {
    const angle = (index / totalAxes) * 2 * Math.PI - Math.PI / 2;
    const r = (scorePercentage / 100) * maxR;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const dataPolygonPoints = axes
    .map((axis, i) => `${getCoordinates(i, axis.score).x},${getCoordinates(i, axis.score).y}`)
    .join(' ');

  return (
    <div className="lg:col-span-6 flex items-center justify-center relative">
      <svg viewBox="0 0 420 420" className="w-full max-w-[380px] sm:max-w-[420px] select-none">
        <defs>
          <linearGradient id="radarFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.30" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.10" />
          </linearGradient>
          <filter id="vertexGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {gridLevels.map((lvl) => {
          const ringPoints = axes.map((_, i) => `${getCoordinates(i, lvl).x},${getCoordinates(i, lvl).y}`).join(' ');
          return (
            <g key={lvl}>
              <polygon points={ringPoints} fill="none" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
              <text x={cx + 4} y={cy - (lvl / 100) * maxR - 3} fill="rgba(100, 116, 139, 0.6)" fontSize="8" fontFamily="monospace">
                {lvl}%
              </text>
            </g>
          );
        })}

        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, 100);
          const isSelected = activeAxis === axis.id;
          return (
            <line
              key={axis.id}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={isSelected ? 'rgba(6, 182, 212, 0.9)' : 'rgba(15, 23, 42, 0.1)'}
              strokeWidth={isSelected ? '2' : '1'}
              strokeDasharray={isSelected ? 'none' : '3 3'}
            />
          );
        })}

        <polygon points={dataPolygonPoints} fill="url(#radarFillGrad)" stroke="#0891B2" strokeWidth="2.5" strokeLinejoin="round" className="transition-all duration-500 ease-out" />

        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, axis.score);
          const labelPos = getCoordinates(i, 122);
          const isSelected = activeAxis === axis.id;
          return (
            <g key={axis.id} onClick={() => onSelectAxis(axis.id, i)} onMouseEnter={() => onSelectAxis(axis.id, i)} className="cursor-pointer">
              <circle cx={x} cy={y} r={isSelected ? '7' : '4'} fill={isSelected ? '#0891B2' : '#0284C7'} stroke="#FFFFFF" strokeWidth={isSelected ? '2.5' : '1'} filter={isSelected ? 'url(#vertexGlow)' : undefined} className="transition-all duration-300" />
              <text x={labelPos.x} y={labelPos.y} textAnchor="middle" dominantBaseline="middle" fill={isSelected ? '#0891B2' : 'rgba(51, 65, 85, 0.9)'} fontSize={isSelected ? '10.5' : '9'} fontWeight={isSelected ? 'bold' : 'normal'} fontFamily="monospace" className="transition-all duration-200">
                {axis.name.split(' ')[0]} ({axis.score}%)
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
