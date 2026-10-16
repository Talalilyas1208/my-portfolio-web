'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTelemetryLogs,
  selectFps,
  selectSoundEnabled,
  toggleSound,
  selectActiveRadarAxis,
  selectActiveArchNode,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { Activity, ChevronUp, ChevronDown } from 'lucide-react';
import TelemetryHudPanel from '@/components/TelemetryHudPanel';

export default function ReduxTelemetryDock() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const logs = useSelector(selectTelemetryLogs);
  const fps = useSelector(selectFps);
  const soundEnabled = useSelector(selectSoundEnabled);
  const activeRadar = useSelector(selectActiveRadarAxis);
  const activeArch = useSelector(selectActiveArchNode);

  const handleSoundToggle = () => {
    dispatch(toggleSound());
    sounds.setMuted(soundEnabled);
    if (!soundEnabled) sounds.playClick();
  };

  return (
    <div className="fixed bottom-4 right-3 sm:right-4 z-40 font-mono select-none">
      {isOpen && (
        <TelemetryHudPanel
          fps={fps}
          activeRadar={activeRadar}
          activeArch={activeArch}
          logs={logs}
          soundEnabled={soundEnabled}
          onSoundToggle={handleSoundToggle}
        />
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (soundEnabled) sounds.playClick();
        }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-2xl liquid-glass-accent border border-cyan-400/40 shadow-liquid-glow hover:scale-105 transition-all text-xs font-semibold text-slate-800 cursor-pointer"
      >
        <Activity className="w-3.5 h-3.5 text-cyan-600 animate-spin" />
        <span className="hidden sm:inline">Redux Telemetry</span>
        <span className="text-[10px] text-emerald-800 liquid-pill-emerald px-2 py-0.5 rounded-full font-bold">
          {fps} FPS
        </span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-600" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-600" />}
      </button>
    </div>
  );
}
