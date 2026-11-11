import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';
import { Cpu } from 'lucide-react';

const tierBadges: Record<string, string> = {
  CLIENT: 'liquid-pill-primary text-slate-950',
  'EDGE / GATEWAY': 'liquid-pill-amber text-slate-950',
  SERVICES: 'liquid-pill-violet text-slate-950',
  'DATA LAYER': 'liquid-pill-emerald text-slate-950',
  'AI / ML PIPELINE': 'liquid-pill-rose text-slate-950',
};

export default function ArchitectureInspector({ activeNode }: { activeNode: ArchNode }) {
  const Icon = activeNode.icon;
  const pillStyle = tierBadges[activeNode.tier] || tierBadges.CLIENT;

  return (
    <div className="p-6 rounded-3xl liquid-glass-accent border border-slate-300 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl liquid-pill-violet text-slate-950">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">
              {activeNode.tier} LAYER
            </div>
            <h4 className="text-lg font-bold text-slate-950 font-mono">{activeNode.name}</h4>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-950 liquid-pill-emerald px-3 py-1 rounded-full font-bold">
            {activeNode.latency}
          </span>
          <span className={`text-xs font-mono ${pillStyle} px-3 py-1 rounded-full font-bold`}>
            {activeNode.protocol}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 space-y-2">
          <div className="text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-slate-800" /> Technical Specification:
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
            {activeNode.description}
          </p>
        </div>

        <div className="md:col-span-4 p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
          <div className="text-[11px] font-mono text-slate-600 uppercase tracking-wider font-semibold">
            Runtime Stack:
          </div>
          <div className="text-xs font-mono text-slate-950 font-bold">{activeNode.tech}</div>
        </div>
      </div>
    </div>
  );
}
