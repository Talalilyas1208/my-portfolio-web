'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveOrbitTech,
  setOrbitTech,
  selectSoundEnabled,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { Cpu } from 'lucide-react';
import { allTechs, TechItem } from '@/data/techOrbitData';
import OrbitRingRays from '@/components/OrbitRingRays';

const dotColors = ['bg-violet-600', 'bg-indigo-600', 'bg-emerald-600', 'bg-amber-600', 'bg-rose-600'];

export default function TechOrbitSystem() {
  const dispatch = useDispatch();
  const activeTechName = useSelector(selectActiveOrbitTech);
  const soundEnabled = useSelector(selectSoundEnabled);

  const activeTech = allTechs.find((t) => t.name === activeTechName) || null;

  const handleTechHover = (tech: TechItem | null) => {
    dispatch(setOrbitTech(tech ? tech.name : null));
    if (tech && soundEnabled) sounds.playClick();
  };

  return (
    <section className="relative py-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold liquid-pill-violet text-violet-950">
            <Cpu className="w-3.5 h-3.5 text-violet-700" />
            Planetary Tech Orbit &bull; Redux Synchronized
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Integrated Technology Universe
          </h3>
          <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
            Concentric planetary rings rotating across AI agents, React architecture, and containerized backend systems. Hover over any node to dispatch live Redux telemetry.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center pt-8 pb-12">
          <OrbitRingRays activeTech={activeTech} onHover={handleTechHover} />
        </div>

        <div className="flex lg:hidden flex-wrap justify-center gap-2 pt-4">
          {allTechs.map((tech, idx) => (
            <span
              key={tech.name}
              onClick={() => handleTechHover(tech)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs font-mono border transition-all cursor-pointer ${
                activeTechName === tech.name
                  ? 'liquid-pill-violet text-slate-950 border-violet-500 font-bold'
                  : 'liquid-glass text-slate-900 border-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dotColors[idx % dotColors.length]}`} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
