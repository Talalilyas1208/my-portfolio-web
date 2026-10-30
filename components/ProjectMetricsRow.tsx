import React from 'react';

interface MetricItem {
  label: string;
  value: string;
}

const metricPills = [
  'liquid-pill-violet',
  'liquid-pill-primary',
  'liquid-pill-emerald',
  'liquid-pill-amber',
];

export default function ProjectMetricsRow({ metrics }: { metrics?: MetricItem[] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
      {metrics.map((metric, idx) => (
        <div key={idx} className={`p-3 rounded-2xl ${metricPills[idx % metricPills.length]} text-center`}>
          <div className="text-base sm:text-lg font-extrabold font-mono text-slate-950">
            {metric.value}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-800 font-semibold font-sans truncate">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
