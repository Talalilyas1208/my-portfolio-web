import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface TelemetryHudPanelProps {
  fps: number;
  activeRadar: string;
  activeArch: string;
  logs: { id: string; action: string; payload: string }[];
  soundEnabled: boolean;
  onSoundToggle: () => void;
}

export default function TelemetryHudPanel({
  fps,
  activeRadar,
  activeArch,
  logs,
  soundEnabled,
  onSoundToggle,
}: TelemetryHudPanelProps) {
  return (
    <div className="mb-2 w-[calc(100vw-1.5rem)] sm:w-96 max-w-sm rounded-3xl liquid-glass border border-slate-200/80 shadow-xl p-4 space-y-3 animate-fade-in text-xs backdrop-blur-2xl">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            Redux Toolkit Telemetry
          </span>
        </div>
        <span className="text-[10px] text-emerald-800 font-bold liquid-pill-emerald px-2 py-0.5 rounded-full">
          {fps} FPS · 60Hz
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded-xl liquid-glass-subtle space-y-0.5">
          <div className="text-slate-600 font-medium">Active Radar Axis:</div>
          <div className="text-cyan-700 font-bold truncate">{activeRadar}</div>
        </div>
        <div className="p-2 rounded-xl liquid-glass-subtle space-y-0.5">
          <div className="text-slate-600 font-medium">Active Arch Node:</div>
          <div className="text-sky-700 font-bold truncate">{activeArch}</div>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] text-slate-600 font-medium flex items-center justify-between">
          <span>Live Action Stream:</span>
          <span className="text-cyan-700 font-semibold">{logs.length} logged</span>
        </div>
        <div className="max-h-36 overflow-y-auto space-y-1 pr-1 scrollbar-none text-[10px]">
          {logs.map((log) => (
            <div
              key={log.id}
              className="p-1.5 rounded-lg bg-slate-100/90 border border-slate-200/80 flex items-center justify-between gap-1"
            >
              <span className="text-cyan-800 font-bold truncate">{log.action}</span>
              <span className="text-slate-700 truncate max-w-[120px]">{log.payload}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200/80 pt-2 text-[10px]">
        <button
          onClick={onSoundToggle}
          className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded-xl liquid-glass-subtle transition-all font-medium"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3 h-3 text-cyan-600" />
              <span>Sonic UI: ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3 h-3 text-slate-500" />
              <span>Sonic UI: OFF</span>
            </>
          )}
        </button>
        <span className="text-slate-500 font-medium">React 18.3 &bull; Redux 2.12</span>
      </div>
    </div>
  );
}
