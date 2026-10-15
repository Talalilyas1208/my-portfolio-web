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
}

const dialOffsets: Record<string, string> = {
  speedo: '55',
  chrono: '0',
  degree: '40',
  pulse: '75',
};

export default function MetricGaugeCard({ item }: { item: MetricGaugeItem }) {
  const Icon = item.icon;

  return (
    <div className="group relative rounded-3xl p-6 liquid-glass liquid-glass-interactive cursor-default transition-all duration-300">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="p-2.5 rounded-2xl liquid-glass text-cyan-600 group-hover:scale-110 transition-transform">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-mono font-bold text-cyan-700 liquid-pill px-2.5 py-0.5 rounded-full">
          {item.badge}
        </span>
      </div>

      <div className="relative flex items-center justify-center my-2">
        <svg viewBox="0 0 140 140" className="w-32 h-32 transform -rotate-90">
          <circle cx="70" cy="70" r="54" stroke="rgba(226, 232, 240, 0.9)" strokeWidth="6" fill="none" />
          <circle cx="70" cy="70" r="54" stroke="rgba(6, 182, 212, 0.35)" strokeWidth="6" strokeDasharray="3 9" fill="none" />
          <circle
            cx="70"
            cy="70"
            r="54"
            stroke="url(#cyanBlueGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="339.29"
            strokeDashoffset={dialOffsets[item.dialType] || '55'}
            className="transition-all duration-700 ease-out"
          />
          <circle cx="70" cy="70" r="42" fill="rgba(255, 255, 255, 0.95)" stroke="rgba(226, 232, 240, 0.8)" strokeWidth="1" />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 pointer-events-none">
          <span className="text-xl font-extrabold font-mono text-slate-900 tracking-tight leading-none mb-1">
            {item.metric}
          </span>
          <span className="text-[10px] font-mono text-cyan-600 font-bold uppercase tracking-wider leading-none">
            {item.subtext}
          </span>
        </div>
      </div>

      <div className="text-center pt-1 space-y-1">
        <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-600 font-sans leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
