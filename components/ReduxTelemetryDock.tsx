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
import { Activity, Volume2, VolumeX, ChevronUp, ChevronDown, Sparkles, Terminal, Cpu } from 'lucide-react';

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
    if (!soundEnabled) {
      sounds.playClick();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono select-none">
      {/* Expanded Telemetry HUD Panel */}
      {isOpen && (
        <div className="mb-2 w-80 sm:w-96 rounded-3xl liquid-glass border border-cyan-400/30 shadow-liquid-glass-lg p-4 space-y-3 animate-fade-in text-xs backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-bold text-slate-100 uppercase tracking-wider text-[11px]">
                Redux Toolkit Telemetry
              </span>
            </div>
            <span className="text-[10px] text-emerald-300 font-bold liquid-pill-emerald px-2 py-0.5 rounded-full">
              {fps} FPS · 60Hz
            </span>
          </div>

          {/* Active State Metrics */}
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded-xl liquid-glass-subtle space-y-0.5">
              <div className="text-slate-400">Active Radar Axis:</div>
              <div className="text-cyan-300 font-bold truncate">{activeRadar}</div>
            </div>
            <div className="p-2 rounded-xl liquid-glass-subtle space-y-0.5">
              <div className="text-slate-400">Active Arch Node:</div>
              <div className="text-primary-300 font-bold truncate">{activeArch}</div>
            </div>
          </div>

          {/* Rolling Action Dispatch Stream */}
          <div className="space-y-1.5">
            <div className="text-[10px] text-slate-400 flex items-center justify-between">
              <span>Live Action Stream:</span>
              <span className="text-cyan-400">{logs.length} logged</span>
            </div>
            <div className="max-h-36 overflow-y-auto space-y-1 pr-1 scrollbar-none text-[10px]">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="p-1.5 rounded-lg bg-black/40 border border-white/[0.05] flex items-center justify-between gap-1"
                >
                  <span className="text-cyan-400 font-bold truncate">{log.action}</span>
                  <span className="text-slate-400 truncate max-w-[120px]">{log.payload}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-2 text-[10px]">
            <button
              onClick={handleSoundToggle}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white px-2.5 py-1 rounded-xl liquid-glass-subtle transition-all"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3 h-3 text-cyan-400" />
                  <span>Sonic UI: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3 text-slate-500" />
                  <span>Sonic UI: OFF</span>
                </>
              )}
            </button>
            <span className="text-slate-500">React 18.3 &bull; Redux 2.12</span>
          </div>
        </div>
      )}

      {/* Collapsed Pill Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (soundEnabled) sounds.playClick();
        }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-2xl liquid-glass-accent border border-cyan-400/40 shadow-liquid-glow hover:scale-105 transition-all text-xs font-semibold text-white cursor-pointer"
      >
        <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
        <span className="hidden sm:inline">Redux Telemetry</span>
        <span className="text-[10px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
          {fps} FPS
        </span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
      </button>
    </div>
  );
}
