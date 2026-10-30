'use client';

import React from 'react';
import { CompetencyAxis } from '@/data/competencyRadarData';

interface RadarSvgCanvasProps {
  axes: CompetencyAxis[];
  activeAxis: string;
  onSelectAxis: (id: string, idx: number) => void;
}

export default function RadarSvgCanvas({ axes, activeAxis, onSelectAxis }: RadarSvgCanvasProps) {
  const cx = 210, cy = 210, maxR = 155;
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
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="radarStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="vertexGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {gridLevels.map((lvl) => {
          const ringPoints = axes.map((_, i) => `${getCoordinates(i, lvl).x},${getCoordinates(i, lvl).y}`).join(' ');
          return (
            <g key={lvl}>
              <polygon points={ringPoints} fill="none" stroke="rgba(255, 255, 255, 0.09)" strokeWidth="1" />
              <text x={cx + 5} y={cy - (lvl / 100) * maxR - 3} fill="rgba(148, 163, 184, 0.7)" fontSize="8" fontFamily="monospace">
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
              stroke={isSelected ? axis.color : 'rgba(255, 255, 255, 0.12)'}
              strokeWidth={isSelected ? '2.2' : '1'}
              strokeDasharray={isSelected ? 'none' : '3 3'}
            />
          );
        })}

        <polygon points={dataPolygonPoints} fill="url(#radarFillGrad)" stroke="url(#radarStrokeGrad)" strokeWidth="2.5" strokeLinejoin="round" className="transition-all duration-500 ease-out" />

        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(i, axis.score);
          const labelPos = getCoordinates(i, 122);
          const isSelected = activeAxis === axis.id;
          return (
            <g key={axis.id} onClick={() => onSelectAxis(axis.id, i)} onMouseEnter={() => onSelectAxis(axis.id, i)} className="cursor-pointer">
              <circle cx={x} cy={y} r={isSelected ? '7.5' : '4.5'} fill={axis.color} stroke="#060913" strokeWidth="2" filter={isSelected ? 'url(#vertexGlow)' : undefined} className="transition-all duration-300" />
              <text x={labelPos.x} y={labelPos.y} textAnchor="middle" dominantBaseline="middle" fill={isSelected ? axis.color : '#E2E8F0'} fontSize={isSelected ? '10.5' : '9.5'} fontWeight={isSelected ? 'bold' : 'normal'} fontFamily="monospace" className="transition-all duration-200">
                {axis.name.split(' ')[0]} ({axis.score}%)
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
