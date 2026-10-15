import React from 'react';

interface MetricItem {
  label: string;
  value: string;
}

export default function ProjectMetricsRow({ metrics }: { metrics?: MetricItem[] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
      {metrics.map((metric, idx) => (
        <div key={idx} className="p-3 rounded-2xl liquid-glass-subtle text-center">
          <div className="text-base sm:text-lg font-bold font-mono text-gradient-cyan">
            {metric.value}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium font-sans truncate">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
