'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveArchNode,
  selectActiveArchTier,
  setArchNode,
  setArchTier,
  selectSoundEnabled,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { Sparkles } from 'lucide-react';
import { archNodes, archTiers } from '@/data/architectureNodesData';
import ArchitectureNodeCard from '@/components/ArchitectureNodeCard';
import ArchitectureInspector from '@/components/ArchitectureInspector';

const tierHeaderColors: Record<string, { text: string; pill: string; dot: string }> = {
  CLIENT: { text: 'text-cyan-300', pill: 'liquid-pill-primary text-cyan-200', dot: 'bg-cyan-400' },
  'EDGE / GATEWAY': { text: 'text-amber-300', pill: 'liquid-pill-amber text-amber-200', dot: 'bg-amber-400' },
  SERVICES: { text: 'text-violet-300', pill: 'liquid-pill-violet text-violet-200', dot: 'bg-violet-400' },
  'DATA LAYER': { text: 'text-emerald-300', pill: 'liquid-pill-emerald text-emerald-200', dot: 'bg-emerald-400' },
  'AI / ML PIPELINE': { text: 'text-rose-300', pill: 'liquid-pill-rose text-rose-200', dot: 'bg-rose-400' },
};

export default function ArchitectureDiagram() {
  const dispatch = useDispatch();
  const selectedNodeId = useSelector(selectActiveArchNode);
  const selectedTier = useSelector(selectActiveArchTier);
  const soundEnabled = useSelector(selectSoundEnabled);

  const activeNode = archNodes.find((n) => n.id === selectedNodeId) || archNodes[0];

  const handleSelectNode = (nodeId: string) => {
    dispatch(setArchNode(nodeId));
    if (soundEnabled) sounds.playClick();
  };

  const handleSelectTier = (tier: string) => {
    dispatch(setArchTier(tier));
    if (soundEnabled) sounds.playClick();
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl liquid-glass border border-white/[0.12] shadow-liquid-glass-lg space-y-8 select-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-pill-violet text-violet-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            5-Tier Full-Stack &amp; AI Systems Schematic &bull; Redux Synchronized
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Production Distributed Architecture
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {archTiers.map((tier) => {
            const tc = tierHeaderColors[tier] || tierHeaderColors.CLIENT;
            const isSelected = selectedTier === tier;
            return (
              <button
                key={tier}
                onClick={() => handleSelectTier(tier)}
                className={`px-3 py-1 rounded-xl text-[10px] font-mono transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? `${tc.pill} font-bold scale-[1.03]`
                    : 'liquid-glass-subtle text-slate-300 hover:text-white'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${tc.dot}`} />
                {tier}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {archTiers.map((tier) => {
          const tierNodes = archNodes.filter((n) => n.tier === tier);
          const tc = tierHeaderColors[tier] || tierHeaderColors.CLIENT;
          return (
            <div key={tier} className="space-y-3">
              <div className={`text-[10px] font-mono font-bold ${tc.text} tracking-wider px-1 flex items-center gap-1.5`}>
                <span className={`w-1.5 h-1.5 rounded-full ${tc.dot}`} />
                <span>{tier}</span>
              </div>
              <div className="space-y-3">
                {tierNodes.map((node) => (
                  <ArchitectureNodeCard
                    key={node.id}
                    node={node}
                    isSelected={selectedNodeId === node.id}
                    isConnected={activeNode.connections.includes(node.id)}
                    onSelect={handleSelectNode}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ArchitectureInspector activeNode={activeNode} />
    </div>
  );
}
