import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';

interface ArchitectureNodeCardProps {
  node: ArchNode;
  isSelected: boolean;
  isConnected: boolean;
  onSelect: (id: string) => void;
}

const tierAccents: Record<string, { border: string; iconBg: string; sub: string }> = {
  CLIENT: { border: 'border-slate-900', iconBg: 'liquid-pill-primary text-slate-950', sub: 'text-slate-950' },
  'EDGE / GATEWAY': { border: 'border-slate-900', iconBg: 'liquid-pill-amber text-slate-950', sub: 'text-slate-950' },
  SERVICES: { border: 'border-slate-900', iconBg: 'liquid-pill-violet text-slate-950', sub: 'text-slate-950' },
  'DATA LAYER': { border: 'border-slate-900', iconBg: 'liquid-pill-emerald text-slate-950', sub: 'text-slate-950' },
  'AI / ML PIPELINE': { border: 'border-slate-900', iconBg: 'liquid-pill-rose text-slate-950', sub: 'text-slate-950' },
};

export default function ArchitectureNodeCard({
  node,
  isSelected,
  isConnected,
  onSelect,
}: ArchitectureNodeCardProps) {
  const Icon = node.icon;
  const accent = tierAccents[node.tier] || tierAccents.CLIENT;

  return (
    <div
      onClick={() => onSelect(node.id)}
      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
        isSelected
          ? `liquid-glass-accent ${accent.border} shadow-md scale-[1.02] z-20`
          : isConnected
          ? 'liquid-glass border-slate-300 shadow-sm'
          : 'liquid-glass-subtle hover:border-slate-300 hover:scale-[1.01]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl transition-all ${accent.iconBg} ${
            isSelected ? 'scale-110' : 'opacity-90 group-hover:opacity-100'
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold font-mono text-slate-950 truncate">
            {node.name}
          </div>
          <div className={`text-[10px] ${accent.sub} font-mono truncate font-semibold`}>
            {node.subtext}
          </div>
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-600">
        <span>{node.protocol}</span>
        <span className="text-slate-950 font-bold">{node.latency}</span>
      </div>
    </div>
  );
}
