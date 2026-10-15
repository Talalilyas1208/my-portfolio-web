'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveOrbitTech,
  selectOrbitPaused,
  toggleOrbitPause,
} from '@/store/slices/interactiveSlice';
import { innerOrbitTechs, middleOrbitTechs, outerOrbitTechs, TechItem } from '@/data/techOrbitData';
import OrbitTrack from '@/components/OrbitTrack';

interface OrbitRingRaysProps {
  activeTech: TechItem | null;
  onHover: (tech: TechItem | null) => void;
}

export default function OrbitRingRays({ activeTech, onHover }: OrbitRingRaysProps) {
  const dispatch = useDispatch();
  const activeTechName = useSelector(selectActiveOrbitTech);
  const orbitPaused = useSelector(selectOrbitPaused);

  return (
    <div className={`orbit-container relative w-[680px] h-[680px] flex items-center justify-center ${orbitPaused ? 'orbit-paused' : ''}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="-340 -340 680 680">
        <line x1="0" y1="-320" x2="0" y2="320" stroke="rgba(15,23,42,0.15)" strokeWidth="0.5" strokeDasharray="4 6" />
        <line x1="-320" y1="0" x2="320" y2="0" stroke="rgba(15,23,42,0.15)" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="0" cy="0" r="130" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
        <circle cx="0" cy="0" r="215" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
        <circle cx="0" cy="0" r="300" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="3 5" fill="none" />
      </svg>

      <div className="absolute z-30 flex flex-col items-center justify-center">
        <div 
          onClick={() => dispatch(toggleOrbitPause())}
          className="relative flex items-center justify-center cursor-pointer group"
          title="Click to toggle orbit pause state"
        >
          <div className="absolute w-28 h-28 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
          <div className="w-20 h-20 rounded-full liquid-glass border border-cyan-400/60 shadow-liquid-glow flex flex-col items-center justify-center text-center backdrop-blur-2xl group-hover:scale-105 transition-transform">
            <span className="font-mono font-extrabold text-xl text-gradient-liquid tracking-wider">MT</span>
            <span className="text-[9px] font-mono text-cyan-300 font-bold uppercase tracking-widest mt-0.5">BS AI</span>
          </div>
        </div>
        <div className="mt-3 px-3 py-1 rounded-full liquid-glass text-[11px] font-mono text-slate-200 min-h-[26px]">
          {activeTech ? (
            <span className="text-cyan-300 font-semibold">{activeTech.name} &bull; {activeTech.category}</span>
          ) : (
            <span>Hover node or click core to pause</span>
          )}
        </div>
      </div>

      <OrbitTrack
        techs={innerOrbitTechs}
        radius={130}
        trackSize={260}
        trackAnim="animate-orbit-cw-25"
        badgeAnim="animate-orbit-ccw-25"
        activeTechName={activeTechName}
        onHover={onHover}
        fontSize="text-xs"
        showIndicator={true}
      />
      <OrbitTrack
        techs={middleOrbitTechs}
        radius={215}
        trackSize={430}
        trackAnim="animate-orbit-ccw-45"
        badgeAnim="animate-orbit-cw-45"
        activeTechName={activeTechName}
        onHover={onHover}
        fontSize="text-[11px]"
      />
      <OrbitTrack
        techs={outerOrbitTechs}
        radius={300}
        trackSize={600}
        trackAnim="animate-orbit-cw-70"
        badgeAnim="animate-orbit-ccw-70"
        activeTechName={activeTechName}
        onHover={onHover}
        fontSize="text-[10px]"
      />
    </div>
  );
}
