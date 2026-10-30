import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';

interface ArchitectureNodeCardProps {
  node: ArchNode;
  isSelected: boolean;
  isConnected: boolean;
  onSelect: (id: string) => void;
}

const tierAccents: Record<string, { border: string; iconBg: string; sub: string }> = {
  CLIENT: { border: 'border-indigo-500', iconBg: 'liquid-pill-primary text-indigo-800', sub: 'text-indigo-800' },
  'EDGE / GATEWAY': { border: 'border-amber-500', iconBg: 'liquid-pill-amber text-amber-800', sub: 'text-amber-800' },
  SERVICES: { border: 'border-violet-500', iconBg: 'liquid-pill-violet text-violet-800', sub: 'text-violet-800' },
  'DATA LAYER': { border: 'border-emerald-500', iconBg: 'liquid-pill-emerald text-emerald-800', sub: 'text-emerald-800' },
  'AI / ML PIPELINE': { border: 'border-rose-500', iconBg: 'liquid-pill-rose text-rose-800', sub: 'text-rose-800' },
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
          ? 'liquid-glass border-violet-300 shadow-sm'
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
        <span className="text-emerald-800 font-bold">{node.latency}</span>
      </div>
    </div>
  );
}
