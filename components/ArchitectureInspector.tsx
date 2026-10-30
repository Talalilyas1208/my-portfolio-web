import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';
import { Sparkles } from 'lucide-react';

const tierBadges: Record<string, string> = {
  CLIENT: 'liquid-pill-primary text-cyan-200',
  'EDGE / GATEWAY': 'liquid-pill-amber text-amber-200',
  SERVICES: 'liquid-pill-violet text-violet-200',
  'DATA LAYER': 'liquid-pill-emerald text-emerald-200',
  'AI / ML PIPELINE': 'liquid-pill-rose text-rose-200',
};

export default function ArchitectureInspector({ activeNode }: { activeNode: ArchNode }) {
  const Icon = activeNode.icon;
  const pillStyle = tierBadges[activeNode.tier] || tierBadges.CLIENT;

  return (
    <div className="p-6 rounded-3xl liquid-glass-accent border border-violet-400/40 shadow-md space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.1] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl liquid-glass text-violet-300">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-violet-300 font-bold uppercase tracking-wider">
              {activeNode.tier} LAYER
            </div>
            <h4 className="text-lg font-bold text-white font-mono">{activeNode.name}</h4>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-emerald-200 liquid-pill-emerald px-3 py-1 rounded-full font-bold">
            {activeNode.latency}
          </span>
          <span className={`text-xs font-mono ${pillStyle} px-3 py-1 rounded-full font-semibold`}>
            {activeNode.protocol}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 space-y-2">
          <div className="text-xs font-mono font-semibold text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Technical Specification:
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {activeNode.description}
          </p>
        </div>

        <div className="md:col-span-4 p-4 rounded-2xl liquid-glass-subtle space-y-1.5">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Runtime Stack:
          </div>
          <div className="text-xs font-mono text-white font-semibold">{activeNode.tech}</div>
        </div>
      </div>
    </div>
  );
}
