import React from 'react';
import { ArchNode } from '@/data/architectureNodesData';

interface ArchitectureNodeCardProps {
  node: ArchNode;
  isSelected: boolean;
  isConnected: boolean;
  onSelect: (id: string) => void;
}

export default function ArchitectureNodeCard({
  node,
  isSelected,
  isConnected,
  onSelect,
}: ArchitectureNodeCardProps) {
  const Icon = node.icon;

  return (
    <div
      onClick={() => onSelect(node.id)}
      className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
        isSelected
          ? 'liquid-glass-accent border-cyan-400 shadow-liquid-glow-lg scale-105 z-20'
          : isConnected
          ? 'liquid-glass border-cyan-500/50 shadow-liquid-glow'
          : 'liquid-glass-subtle hover:border-white/30 hover:scale-[1.02]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl transition-all ${
            isSelected
              ? 'liquid-glass text-cyan-300 scale-110'
              : 'liquid-glass-subtle text-slate-300 group-hover:text-cyan-300'
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold font-mono text-slate-100 truncate">
            {node.name}
          </div>
          <div className="text-[10px] text-cyan-400/80 font-mono truncate">
            {node.subtext}
          </div>
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>{node.protocol}</span>
        <span className="text-emerald-400 font-semibold">{node.latency}</span>
      </div>
    </div>
  );
}
