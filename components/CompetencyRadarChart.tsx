'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveRadarAxis,
  setRadarAxis,
  selectSoundEnabled,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { Sparkles } from 'lucide-react';
import { competencyAxes } from '@/data/competencyRadarData';
import RadarSvgCanvas from '@/components/RadarSvgCanvas';
import CompetencyAxisList from '@/components/CompetencyAxisList';

export default function CompetencyRadarChart() {
  const dispatch = useDispatch();
  const activeAxis = useSelector(selectActiveRadarAxis);
  const soundEnabled = useSelector(selectSoundEnabled);

  const handleSelectAxis = (axisId: string, idx: number) => {
    if (activeAxis !== axisId) {
      dispatch(setRadarAxis(axisId));
      if (soundEnabled) sounds.playSweep(450 + idx * 70);
    }
  };

  const currentActive = competencyAxes.find((a) => a.id === activeAxis) || competencyAxes[0];

  return (
    <div className="p-6 sm:p-10 rounded-3xl liquid-glass border border-slate-200/80 shadow-liquid-glass-lg space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold liquid-glass text-cyan-700 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Multiaxial Competency Radar &bull; Redux Synchronized
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            6-Axis Technical Proficiency Matrix
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-600 bg-slate-100/80 px-3.5 py-1.5 rounded-2xl border border-slate-200/80 self-start md:self-auto">
          State Synced &bull; Hover to evaluate
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <RadarSvgCanvas
          axes={competencyAxes}
          activeAxis={activeAxis}
          onSelectAxis={handleSelectAxis}
        />
        <CompetencyAxisList
          axes={competencyAxes}
          activeAxis={activeAxis}
          onSelectAxis={handleSelectAxis}
        />
      </div>

      <div className="p-5 rounded-2xl liquid-glass-subtle border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Domain Focus: {currentActive.name}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
            {currentActive.details}
          </p>
        </div>
        <span className="text-xs font-mono text-emerald-800 liquid-pill-emerald px-3 py-1 rounded-full shrink-0 self-start sm:self-auto font-bold">
          {currentActive.score}% PROFICIENCY
        </span>
      </div>
    </div>
  );
}
