import React from 'react';
import { Play, Pause, Copy, Check } from 'lucide-react';

interface WorkbenchWindowChromeProps {
  fileName: string;
  isPlaying: boolean;
  copied: boolean;
  onTogglePlay: () => void;
  onCopy: () => void;
}

export default function WorkbenchWindowChrome({
  fileName,
  isPlaying,
  copied,
  onTogglePlay,
  onCopy,
}: WorkbenchWindowChromeProps) {
  return (
    <div className="px-4 py-3.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
        <span className="text-xs text-slate-200 ml-2 font-medium">~/workspace/{fileName}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onTogglePlay}
          className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded-xl liquid-glass-subtle transition-all"
          title={isPlaying ? 'Pause auto-simulation' : 'Resume auto-simulation'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-cyan-400" />
              <span>Live Feed</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-400" />
              <span>Paused</span>
            </>
          )}
        </button>

        <button
          onClick={onCopy}
          className="p-1.5 rounded-xl liquid-glass-subtle text-slate-300 hover:text-cyan-300 transition-all"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
