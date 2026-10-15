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
          ? 'liquid-glass-accent border-cyan-500 shadow-liquid-glow-lg scale-105 z-20'
          : isConnected
          ? 'liquid-glass border-cyan-400/50 shadow-sm'
          : 'liquid-glass-subtle hover:border-slate-300 hover:scale-[1.02]'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl transition-all ${
            isSelected
              ? 'liquid-glass text-cyan-700 scale-110'
              : 'liquid-glass-subtle text-slate-600 group-hover:text-cyan-700'
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold font-mono text-slate-900 truncate">
            {node.name}
          </div>
          <div className="text-[10px] text-cyan-700 font-mono truncate font-medium">
            {node.subtext}
          </div>
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>{node.protocol}</span>
        <span className="text-emerald-700 font-semibold">{node.latency}</span>
      </div>
    </div>
  );
}
