'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveRadarAxis,
  setRadarAxis,
  selectSoundEnabled,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { Bot, Cpu, Network, Database, Wrench, ShieldCheck, Sparkles } from 'lucide-react';

interface CompetencyAxis {
  id: string;
  name: string;
  score: number;
  color: string;
  icon: React.ElementType;
  stack: string;
  details: string;
}

const axes: CompetencyAxis[] = [
  {
    id: 'ai-agents',
    name: 'AI & Agentic Systems',
    score: 95,
    color: '#22D3EE',
    icon: Bot,
    stack: 'Gemini 1.5 · AST Parsers · Closed-Loop Healers · Multi-Turn Prompts · LangChain',
    details: 'Formal BS in AI; autonomous closed-loop debugging and self-healing agent pipelines with 84.6% resolution rate.',
  },
  {
    id: 'react-frontend',
    name: 'React 18 & Frontend Arch',
    score: 94,
    color: '#3B82F6',
    icon: Cpu,
    stack: 'React 18 · Next.js 14 App Router · TypeScript · Core Web Vitals · Liquid UI',
    details: 'Zero-layout-shift frontends, sub-second TTFB, server components, and accessible design system components.',
  },
  {
    id: 'redux-state',
    name: 'Redux & State Normalization',
    score: 92,
    color: '#8B5CF6',
    icon: Network,
    stack: 'Redux Toolkit · createEntityAdapter · Reselect · Custom Middleware · WebSockets',
    details: 'High-frequency transaction state machines, normalized entity stores, and optimistic UI mutations.',
  },
  {
    id: 'backend-python',
    name: 'Backend APIs & Python',
    score: 88,
    color: '#10B981',
    icon: ShieldCheck,
    stack: 'Python 3.12 · FastAPI · Node.js · Django · Pydantic · REST / GraphQL',
    details: 'Asynchronous streaming microservices, strict schema validation, and secure JWT authentication middleware.',
  },
  {
    id: 'devops-cloud',
    name: 'DevOps & Containerization',
    score: 85,
    color: '#F59E0B',
    icon: Wrench,
    stack: 'Docker · GitHub Actions CI/CD · Vercel Edge · Unix Shell · Jest / PyTest',
    details: 'Sandboxed code execution environments, reproducible test harnesses, and automated zero-downtime deployment pipelines.',
  },
  {
    id: 'databases',
    name: 'Databases & Persistence',
    score: 86,
    color: '#EC4899',
    icon: Database,
    stack: 'PostgreSQL · Supabase · MySQL · Redis Cache · IndexedDB Offline Stores',
    details: 'ACID transactional schemas, relational indexing, memory caching layers, and client-side draft persistence.',
  },
];

export default function CompetencyRadarChart() {
  const dispatch = useDispatch();
  const activeAxis = useSelector(selectActiveRadarAxis);
  const soundEnabled = useSelector(selectSoundEnabled);

  const handleSelectAxis = (axisId: string, idx: number) => {
    if (activeAxis !== axisId) {
      dispatch(setRadarAxis(axisId));
      if (soundEnabled) {
        sounds.playSweep(450 + idx * 70);
      }
    }
  };

  // Radar geometry calculations (Center: 210, 210 | Radius: 160)
  const cx = 210;
  const cy = 210;
  const maxR = 160;
  const totalAxes = axes.length;

  const getCoordinates = (index: number, scorePercentage: number) => {
    const angle = (index / totalAxes) * 2 * Math.PI - Math.PI / 2;
    const r = (scorePercentage / 100) * maxR;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Generate polygon points for data
  const dataPolygonPoints = axes
    .map((axis, i) => {
      const { x, y } = getCoordinates(i, axis.score);
      return `${x},${y}`;
    })
    .join(' ');

  // Grid level polygons (20, 40, 60, 80, 100)
  const gridLevels = [20, 40, 60, 80, 100];

  const currentActive = axes.find((a) => a.id === activeAxis) || axes[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl liquid-glass border border-white/[0.14] shadow-liquid-glass-lg space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-pill text-cyan-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Multiaxial Competency Radar &bull; Redux Synchronized
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            6-Axis Technical Proficiency Matrix
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400 bg-[#05070e]/60 px-3.5 py-1.5 rounded-2xl border border-white/[0.08] self-start md:self-auto">
          State Synced &bull; Hover to evaluate
        </div>
      </div>

      {/* Grid: Radar Visualizer (Left) + Detailed Breakdown (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: SVG Radar / Spider Chart */}
        <div className="lg:col-span-6 flex items-center justify-center relative">
          <svg viewBox="0 0 420 420" className="w-full max-w-[380px] sm:max-w-[420px] select-none">
            <defs>
              <linearGradient id="radarFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15" />
              </linearGradient>
              <filter id="vertexGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Hexagon Grid Rings */}
            {gridLevels.map((lvl) => {
              const ringPoints = axes
                .map((_, i) => {
                  const { x, y } = getCoordinates(i, lvl);
                  return `${x},${y}`;
                })
                .join(' ');

              return (
                <g key={lvl}>
                  <polygon
                    points={ringPoints}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.07)"
                    strokeWidth="1"
                  />
                  <text
                    x={cx + 4}
                    y={cy - (lvl / 100) * maxR - 3}
                    fill="rgba(255, 255, 255, 0.25)"
                    fontSize="8"
                    fontFamily="monospace"
                  >
                    {lvl}%
                  </text>
                </g>
              );
            })}

            {/* Axis Spoke Lines */}
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
                  stroke={isSelected ? 'rgba(34, 211, 238, 0.8)' : 'rgba(255, 255, 255, 0.1)'}
                  strokeWidth={isSelected ? '2' : '1'}
                  strokeDasharray={isSelected ? 'none' : '3 3'}
                />
              );
            })}

            {/* Data Polygon Area */}
            <polygon
              points={dataPolygonPoints}
              fill="url(#radarFillGrad)"
              stroke="#22D3EE"
              strokeWidth="2.5"
              strokeLinejoin="round"
              className="transition-all duration-500 ease-out"
            />

            {/* Vertex Nodes & Interactive Labels */}
            {axes.map((axis, i) => {
              const { x, y } = getCoordinates(i, axis.score);
              const labelPos = getCoordinates(i, 122);
              const isSelected = activeAxis === axis.id;

              return (
                <g
                  key={axis.id}
                  onClick={() => handleSelectAxis(axis.id, i)}
                  onMouseEnter={() => handleSelectAxis(axis.id, i)}
                  className="cursor-pointer"
                >
                  {/* Vertex Point */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? '7' : '4'}
                    fill={isSelected ? '#22D3EE' : '#3B82F6'}
                    stroke="#FFFFFF"
                    strokeWidth={isSelected ? '2.5' : '1'}
                    filter={isSelected ? 'url(#vertexGlow)' : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Outer Label */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isSelected ? '#22D3EE' : 'rgba(203, 213, 225, 0.8)'}
                    fontSize={isSelected ? '10.5' : '9'}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    fontFamily="monospace"
                    className="transition-all duration-200"
                  >
                    {axis.name.split(' ')[0]} ({axis.score}%)
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right: Interactive Axis List & Live Inspector */}
        <div className="lg:col-span-6 space-y-3">
          {axes.map((axis, idx) => {
            const isSelected = activeAxis === axis.id;
            const Icon = axis.icon;

            return (
              <div
                key={axis.id}
                onMouseEnter={() => handleSelectAxis(axis.id, idx)}
                onClick={() => handleSelectAxis(axis.id, idx)}
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
                    <span className="text-sm font-bold text-slate-100">
                      {axis.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    {axis.score}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-primary-500"
                    style={{ width: `${axis.score}%` }}
                  ></div>
                </div>

                <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                  {axis.stack}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Live Inspector Detail Banner */}
      <div className="p-5 rounded-2xl liquid-glass-subtle border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Domain Focus: {currentActive.name}
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
            {currentActive.details}
          </p>
        </div>
        <span className="text-xs font-mono text-emerald-300 liquid-pill-emerald px-3 py-1 rounded-full shrink-0 self-start sm:self-auto font-bold">
          {currentActive.score}% PROFICIENCY
        </span>
      </div>
    </div>
  );
}
