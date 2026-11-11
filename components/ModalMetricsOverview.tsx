import React from 'react';
import { Project } from '@/data/portfolioData';
import { Zap } from 'lucide-react';

const metricGrads = ['text-gradient-violet', 'text-gradient-cyan', 'text-gradient-emerald', 'text-gradient-amber'];

export default function ModalMetricsOverview({ project }: { project: Project }) {
  return (
    <>
      {project.keyDifferentiator && (
        <div className="p-4 rounded-2xl liquid-glass-subtle border border-slate-300 text-xs sm:text-sm space-y-1.5 shadow-sm">
          <span className="font-bold text-slate-950 font-mono flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-slate-800" /> Engineering Differentiator:
          </span>
          <p className="text-slate-800 leading-relaxed">{project.keyDifferentiator}</p>
        </div>
      )}

      {project.metrics && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl liquid-glass-subtle text-center">
              <div className={`text-xl font-bold font-mono ${metricGrads[idx % metricGrads.length]}`}>{m.value}</div>
              <div className="text-[10px] text-slate-700 mt-0.5 font-semibold">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2.5">
        <h4 className="text-sm font-bold text-slate-950 font-mono uppercase tracking-wider">
          Overview &amp; Problem Solved
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          {project.overview}
        </p>
      </div>
    </>
  );
}
