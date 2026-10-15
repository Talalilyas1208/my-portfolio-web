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
import { Layers, Sparkles } from 'lucide-react';
import { archNodes, archTiers } from '@/data/architectureNodesData';
import ArchitectureNodeCard from '@/components/ArchitectureNodeCard';
import ArchitectureInspector from '@/components/ArchitectureInspector';

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
    <div className="p-6 sm:p-10 rounded-3xl liquid-glass border border-white/[0.14] shadow-liquid-glass-lg space-y-8 select-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-glass text-cyan-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            5-Tier Full-Stack &amp; AI Systems Schematic &bull; Redux Synchronized
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Production Distributed Architecture
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {archTiers.map((tier) => (
            <button
              key={tier}
              onClick={() => handleSelectTier(tier)}
              className={`px-3 py-1 rounded-xl text-[10px] font-mono transition-all ${
                selectedTier === tier
                  ? 'liquid-pill-primary text-cyan-200 border-cyan-400 font-bold'
                  : 'liquid-glass-subtle text-slate-400 hover:text-white'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {archTiers.map((tier) => {
          const tierNodes = archNodes.filter((n) => n.tier === tier);
          return (
            <div key={tier} className="space-y-3">
              <div className="text-[10px] font-mono font-bold text-cyan-400/90 tracking-wider px-1">
                {tier}
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
