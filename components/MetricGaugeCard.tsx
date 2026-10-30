import React from 'react';

export interface MetricGaugeItem {
  id: string;
  title: string;
  metric: string;
  subtext: string;
  description: string;
  icon: React.ElementType;
  dialType: 'speedo' | 'degree' | 'chrono' | 'pulse';
  badge: string;
  theme?: 'violet' | 'cyan' | 'emerald' | 'amber';
}

const dialOffsets: Record<string, string> = {
  speedo: '55',
  chrono: '0',
  degree: '40',
  pulse: '75',
};

const themeConfig = {
  violet: {
    iconClass: 'text-violet-300 border-violet-500/30',
    pillClass: 'liquid-pill-violet text-violet-200',
    subtextClass: 'text-violet-300',
    hoverTitle: 'group-hover:text-violet-300',
    tickStroke: 'rgba(168, 85, 247, 0.35)',
    stop1: '#C084FC',
    stop2: '#6366F1',
  },
  cyan: {
    iconClass: 'text-cyan-300 border-cyan-500/30',
    pillClass: 'liquid-pill-primary text-cyan-200',
    subtextClass: 'text-cyan-300',
    hoverTitle: 'group-hover:text-cyan-300',
    tickStroke: 'rgba(6, 182, 212, 0.35)',
    stop1: '#22D3EE',
    stop2: '#3B82F6',
  },
  emerald: {
    iconClass: 'text-emerald-300 border-emerald-500/30',
    pillClass: 'liquid-pill-emerald text-emerald-200',
    subtextClass: 'text-emerald-300',
    hoverTitle: 'group-hover:text-emerald-300',
    tickStroke: 'rgba(16, 185, 129, 0.35)',
    stop1: '#34D399',
    stop2: '#059669',
  },
  amber: {
    iconClass: 'text-amber-300 border-amber-500/30',
    pillClass: 'liquid-pill-amber text-amber-200',
    subtextClass: 'text-amber-300',
    hoverTitle: 'group-hover:text-amber-300',
    tickStroke: 'rgba(245, 158, 11, 0.35)',
    stop1: '#FBBF24',
    stop2: '#EA580C',
  },
};

export default function MetricGaugeCard({ item }: { item: MetricGaugeItem }) {
  const Icon = item.icon;
  const t = themeConfig[item.theme || 'cyan'];
  const gradId = `gaugeGrad-${item.id}`;

  return (
    <div className="group relative rounded-3xl p-6 liquid-glass liquid-glass-interactive cursor-default transition-all duration-300">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className={`p-2.5 rounded-2xl liquid-glass-subtle border ${t.iconClass} group-hover:scale-110 transition-transform`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className={`text-[10px] font-mono font-bold ${t.pillClass} px-2.5 py-0.5 rounded-full`}>
          {item.badge}
        </span>
      </div>

      <div className="relative flex items-center justify-center my-2">
        <svg viewBox="0 0 140 140" className="w-32 h-32 transform -rotate-90">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={t.stop1} />
              <stop offset="100%" stopColor={t.stop2} />
            </linearGradient>
          </defs>
          <circle cx="70" cy="70" r="54" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="6" fill="none" />
          <circle cx="70" cy="70" r="54" stroke={t.tickStroke} strokeWidth="6" strokeDasharray="3 9" fill="none" />
          <circle
            cx="70"
            cy="70"
            r="54"
            stroke={`url(#${gradId})`}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeDasharray="339.29"
            strokeDashoffset={dialOffsets[item.dialType] || '55'}
            className="transition-all duration-700 ease-out"
          />
          <circle cx="70" cy="70" r="42" fill="rgba(9, 14, 28, 0.92)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 pointer-events-none">
          <span className="text-xl font-extrabold font-mono text-white tracking-tight leading-none mb-1">
            {item.metric}
          </span>
          <span className={`text-[10px] font-mono ${t.subtextClass} font-bold uppercase tracking-wider leading-none`}>
            {item.subtext}
          </span>
        </div>
      </div>

      <div className="text-center pt-1 space-y-1">
        <h4 className={`text-sm font-bold text-white ${t.hoverTitle} transition-colors`}>
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-300 font-sans leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
