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
    iconClass: 'liquid-pill text-slate-900',
    pillClass: 'liquid-pill text-slate-950',
    subtextClass: 'text-slate-700',
    hoverTitle: 'group-hover:text-black',
    tickStroke: 'rgba(15, 23, 42, 0.2)',
    stop1: '#0F172A',
    stop2: '#334155',
  },
  cyan: {
    iconClass: 'liquid-pill text-slate-900',
    pillClass: 'liquid-pill text-slate-950',
    subtextClass: 'text-slate-700',
    hoverTitle: 'group-hover:text-black',
    tickStroke: 'rgba(15, 23, 42, 0.2)',
    stop1: '#0F172A',
    stop2: '#334155',
  },
  emerald: {
    iconClass: 'liquid-pill text-slate-900',
    pillClass: 'liquid-pill text-slate-950',
    subtextClass: 'text-slate-700',
    hoverTitle: 'group-hover:text-black',
    tickStroke: 'rgba(15, 23, 42, 0.2)',
    stop1: '#0F172A',
    stop2: '#334155',
  },
  amber: {
    iconClass: 'liquid-pill text-slate-900',
    pillClass: 'liquid-pill text-slate-950',
    subtextClass: 'text-slate-700',
    hoverTitle: 'group-hover:text-black',
    tickStroke: 'rgba(15, 23, 42, 0.2)',
    stop1: '#0F172A',
    stop2: '#334155',
  },
};

export default function MetricGaugeCard({ item }: { item: MetricGaugeItem }) {
  const Icon = item.icon;
  const t = themeConfig[item.theme || 'violet'];
  const gradId = `gaugeGrad-${item.id}`;

  return (
    <div className="group relative rounded-3xl p-6 liquid-glass liquid-glass-interactive cursor-default transition-all duration-300">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className={`p-2.5 rounded-2xl ${t.iconClass} group-hover:scale-110 transition-transform`}>
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
          <circle cx="70" cy="70" r="54" stroke="#e2e8f0" strokeWidth="6" fill="none" />
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
          <circle cx="70" cy="70" r="42" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 pointer-events-none">
          <span className="text-xl font-extrabold font-mono text-slate-950 tracking-tight leading-none mb-1">
            {item.metric}
          </span>
          <span className={`text-[10px] font-mono ${t.subtextClass} font-bold uppercase tracking-wider leading-none`}>
            {item.subtext}
          </span>
        </div>
      </div>

      <div className="text-center pt-1 space-y-1">
        <h4 className={`text-sm font-bold text-slate-950 ${t.hoverTitle} transition-colors`}>
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-700 font-sans leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
