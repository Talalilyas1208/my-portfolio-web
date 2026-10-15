import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';
import { Sparkles } from 'lucide-react';

export default function ArchitectureInspector({ activeNode }: { activeNode: ArchNode }) {
  const Icon = activeNode.icon;

  return (
    <div className="p-6 rounded-3xl liquid-glass border border-cyan-400/50 shadow-md space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl liquid-glass text-cyan-700">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider">
              {activeNode.tier} LAYER
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-mono">{activeNode.name}</h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-800 liquid-pill-emerald px-3 py-1 rounded-full font-bold">
            {activeNode.latency}
          </span>
          <span className="text-xs font-mono text-cyan-800 liquid-pill px-3 py-1 rounded-full font-semibold">
            {activeNode.protocol}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 space-y-2">
          <div className="text-xs font-mono font-semibold text-cyan-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Technical Specification:
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            {activeNode.description}
          </p>
        </div>

        <div className="md:col-span-4 p-4 rounded-2xl liquid-glass-subtle space-y-1.5">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            Runtime Stack:
          </div>
          <div className="text-xs font-mono text-slate-800 font-semibold">{activeNode.tech}</div>
        </div>
      </div>
    </div>
  );
}
