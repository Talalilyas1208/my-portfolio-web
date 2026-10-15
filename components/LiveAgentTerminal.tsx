'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveWorkbenchFile,
  selectWorkbenchStep,
  selectWorkbenchPlaying,
  setWorkbenchFile,
  setWorkbenchStep,
  toggleWorkbenchPlaying,
  selectSoundEnabled,
} from '@/store/slices/interactiveSlice';
import { sounds } from '@/lib/soundEffects';
import { ArrowRight } from 'lucide-react';
import { workbenchFiles } from '@/data/workbenchFilesData';
import WorkbenchWindowChrome from '@/components/WorkbenchWindowChrome';
import WorkbenchTabRail from '@/components/WorkbenchTabRail';
import WorkbenchDaemonStatus from '@/components/WorkbenchDaemonStatus';

export default function LiveAgentTerminal() {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveWorkbenchFile);
  const step = useSelector(selectWorkbenchStep);
  const isPlaying = useSelector(selectWorkbenchPlaying);
  const soundEnabled = useSelector(selectSoundEnabled);

  const [copied, setCopied] = useState(false);
  const currentFile = workbenchFiles.find((f) => f.id === activeTab) || workbenchFiles[0];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const nextStep = step >= 4 ? 1 : step + 1;
      dispatch(setWorkbenchStep(nextStep));
      if (soundEnabled) sounds.playBlip();
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, step, dispatch, soundEnabled]);

  const copyCode = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    if (soundEnabled) sounds.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (fileId: string) => {
    dispatch(setWorkbenchFile(fileId));
    if (soundEnabled) sounds.playClick();
  };

  return (
    <div className="relative rounded-3xl liquid-glass shadow-liquid-glass-lg overflow-hidden font-mono text-xs border border-slate-200/90 space-y-0">
      <WorkbenchWindowChrome
        fileName={currentFile.name}
        isPlaying={isPlaying}
        copied={copied}
        onTogglePlay={() => {
          dispatch(toggleWorkbenchPlaying());
          if (soundEnabled) sounds.playClick();
        }}
        onCopy={copyCode}
      />

      <WorkbenchTabRail files={workbenchFiles} activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'agent' && <WorkbenchDaemonStatus step={step} />}

      <div className="p-5 max-h-[340px] overflow-y-auto space-y-0.5 bg-[#070b14] text-slate-200">
        <pre className="font-mono text-xs leading-relaxed overflow-x-auto scrollbar-none">
          <code>{currentFile.code}</code>
        </pre>
      </div>

      <div className="px-5 py-3 bg-slate-100/90 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs backdrop-blur-md">
        <span className="text-slate-600 text-[11px] truncate font-medium">{currentFile.description}</span>
        <Link
          href="/projects/autonomous-gemini-code-fixer"
          className="text-cyan-700 hover:text-cyan-600 font-semibold flex items-center gap-1 text-[11px] transition-colors shrink-0"
        >
          <span>Explore Pipeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
