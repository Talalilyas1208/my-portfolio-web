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
    <div className="px-4 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-slate-900" />
        <div className="w-3 h-3 rounded-full bg-slate-900" />
        <div className="w-3 h-3 rounded-full bg-slate-900" />
        <span className="text-xs text-slate-950 ml-2 font-bold">~/ai-agent/{fileName}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onTogglePlay}
          className="flex items-center gap-1.5 text-[11px] text-slate-900 hover:text-slate-950 px-2.5 py-1 rounded-xl bg-white border border-slate-300 shadow-sm transition-all font-semibold"
          title={isPlaying ? 'Pause auto-simulation' : 'Resume auto-simulation'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-slate-800" />
              <span>Live Loop</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-slate-800" />
              <span>Paused</span>
            </>
          )}
        </button>

        <button
          onClick={onCopy}
          className="p-1.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-slate-800 shadow-sm transition-all"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-slate-800" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
