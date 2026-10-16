'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveOrbitTech,
  setOrbitTech,
  selectSoundEnabled,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { Sparkles } from 'lucide-react';
import { allTechs, TechItem } from '@/data/techOrbitData';
import OrbitRingRays from '@/components/OrbitRingRays';

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold liquid-glass text-cyan-700">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Planetary Tech Orbit &bull; Redux Synchronized
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Integrated Technology Universe
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Concentric planetary rings rotating across AI agents, React architecture, and containerized backend systems. Hover over any node to dispatch live Redux telemetry.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center pt-8 pb-12">
          <OrbitRingRays activeTech={activeTech} onHover={handleTechHover} />
        </div>

        <div className="flex lg:hidden flex-wrap justify-center gap-2 pt-4">
          {allTechs.map((tech) => (
            <span
              key={tech.name}
              onClick={() => handleTechHover(tech)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs font-mono border transition-all ${
                activeTechName === tech.name
                  ? 'liquid-pill-primary text-cyan-800 border-cyan-400 font-semibold'
                  : 'liquid-glass text-slate-700 border-slate-200/80'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
