'use client';

import React, { useState } from 'react';
import { Award, Zap, ShieldCheck, Layers } from 'lucide-react';

interface MetricGaugeItem {
  id: string;
  title: string;
  metric: string;
  subtext: string;
  description: string;
  icon: React.ElementType;
  dialType: 'speedo' | 'degree' | 'chrono' | 'pulse';
  badge: string;
}

const metrics: MetricGaugeItem[] = [
  {
    id: 'degree',
    title: 'Formal AI Degree',
    metric: 'BS AI',
    subtext: 'Graduated Aug 2023',
    description: 'Specialized 4-Year Bachelor of Science in Artificial Intelligence',
    icon: Award,
    dialType: 'degree',
    badge: 'DISTINCTION',
  },
  {
    id: 'speedo',
    title: 'Autonomous Fix Rate',
    metric: '84.6%',
    subtext: '4.2s Resolution',
    description: 'Closed-loop AI agent code repair & regression healing rate',
    icon: Zap,
    dialType: 'speedo',
    badge: 'SUB-4.2S',
  },
  {
    id: 'chrono',
    title: 'Type Safety & Purity',
    metric: '100%',
    subtext: 'Zero Regressions',
    description: 'Strict TypeScript contracts & sandboxed AST diff verification',
    icon: ShieldCheck,
    dialType: 'chrono',
    badge: 'ZERO-BUG',
  },
  {
    id: 'pulse',
    title: 'Production Deployments',
    metric: '15+',
    subtext: 'Full-Stack Apps',
    description: 'Enterprise billing, AI agents, and high-frequency React UIs',
    icon: Layers,
    dialType: 'pulse',
    badge: 'LIVE PROD',
  },
];

export default function DialMetricGauges() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((item) => {
          const isHovered = hoveredId === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-3xl p-6 liquid-glass liquid-glass-interactive cursor-default transition-all duration-300 border border-white/[0.12] hover:border-cyan-400/50 hover:shadow-liquid-glow"
            >
              {/* Top Header & Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-2.5 rounded-2xl liquid-glass text-cyan-300 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-300 liquid-pill px-2.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </div>

              {/* Radial Dial SVG Visualizer */}
              <div className="relative flex items-center justify-center my-3">
                <svg viewBox="0 0 120 120" className="w-28 h-28 transform -rotate-90">
                  {/* Background Dial Track */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="6"
                    fill="none"
                  />
                  {/* Calibrated Tick Marks */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="6"
                    strokeDasharray="2 12"
                    fill="none"
                  />
                  {/* Active Dial Arc */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="url(#cyanBlueGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="301.59"
                    strokeDashoffset={
                      item.dialType === 'speedo'
                        ? '45'
                        : item.dialType === 'chrono'
                        ? '0'
                        : item.dialType === 'degree'
                        ? '30'
                        : '60'
                    }
                    className="transition-all duration-700 ease-out"
                  />
                  {/* Inner Glow Center */}
                  <circle
                    cx="60"
                    cy="60"
                    r="36"
                    fill="rgba(6, 182, 212, 0.03)"
                    stroke="rgba(255, 255, 255, 0.06)"
                    strokeWidth="1"
                  />
                </svg>

                {/* Center Value */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-extrabold font-mono text-gradient-liquid tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300/80 font-medium">
                    {item.subtext}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="text-center pt-2 space-y-1">
                <h4 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Shared Gradient Defs */}
              <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                <defs>
                  <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
}
