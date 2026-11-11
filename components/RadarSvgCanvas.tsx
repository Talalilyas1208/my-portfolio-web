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
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="radarStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {gridLevels.map((lvl) => {
          const ringPoints = axes.map((_, i) => `${getCoordinates(i, lvl).x},${getCoordinates(i, lvl).y}`).join(' ');
          return (
            <g key={lvl}>
              <polygon points={ringPoints} fill="none" stroke="rgba(15, 23, 42, 0.1)" strokeWidth="1" />
              <text x={cx + 5} y={cy - (lvl / 100) * maxR - 3} fill="#475569" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
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
              stroke={isSelected ? axis.color : 'rgba(15, 23, 42, 0.15)'}
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
              <circle cx={x} cy={y} r={isSelected ? '7.5' : '5'} fill={axis.color} stroke="#ffffff" strokeWidth="2" className="transition-all duration-300" />
              <text x={labelPos.x} y={labelPos.y} textAnchor="middle" dominantBaseline="middle" fill={isSelected ? axis.color : '#0f172a'} fontSize={isSelected ? '10.5' : '9.5'} fontWeight="bold" fontFamily="monospace" className="transition-all duration-200">
                {axis.name.split(' ')[0]} ({axis.score}%)
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
