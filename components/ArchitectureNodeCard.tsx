import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';

interface ArchitectureNodeCardProps {
  node: ArchNode;
  isSelected: boolean;
  isConnected: boolean;
  onSelect: (id: string) => void;
}

const tierAccents: Record<string, { border: string; icon: string; sub: string }> = {
  CLIENT: { border: 'border-cyan-400/70', icon: 'text-cyan-300', sub: 'text-cyan-300' },
  'EDGE / GATEWAY': { border: 'border-amber-400/70', icon: 'text-amber-300', sub: 'text-amber-300' },
  SERVICES: { border: 'border-violet-400/70', icon: 'text-violet-300', sub: 'text-violet-300' },
  'DATA LAYER': { border: 'border-emerald-400/70', icon: 'text-emerald-300', sub: 'text-emerald-300' },
  'AI / ML PIPELINE': { border: 'border-rose-400/70', icon: 'text-rose-300', sub: 'text-rose-300' },
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
          ? `liquid-glass-accent ${accent.border} shadow-liquid-glow-lg scale-[1.03] z-20`
          : isConnected
          ? 'liquid-glass border-cyan-400/40 shadow-sm'
          : 'liquid-glass-subtle hover:border-white/25 hover:scale-[1.01]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl transition-all ${
            isSelected
              ? `liquid-glass ${accent.icon} scale-110`
              : `liquid-glass-subtle ${accent.icon} opacity-80 group-hover:opacity-100`
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold font-mono text-white truncate">
            {node.name}
          </div>
          <div className={`text-[10px] ${accent.sub} font-mono truncate font-medium`}>
            {node.subtext}
          </div>
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>{node.protocol}</span>
        <span className="text-emerald-300 font-semibold">{node.latency}</span>
      </div>
    </div>
  );
}
