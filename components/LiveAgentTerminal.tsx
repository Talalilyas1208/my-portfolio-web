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

function getLineColorClass(line: string): string {
  const trimmed = line.trim();
  if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('"""')) {
    return 'text-slate-400 italic';
  }
  if (/^(async|def|return|for|if|with|from|import|export|const|interface|class)\b/.test(trimmed)) {
    return 'text-violet-300';
  }
  if (trimmed.startsWith('@') || /^(FROM|WORKDIR|RUN|COPY|ENTRYPOINT)\b/.test(trimmed)) {
    return 'text-amber-300';
  }
  if (trimmed.includes('gemini') || trimmed.includes('RepairResult') || trimmed.includes('createSlice')) {
    return 'text-cyan-300';
  }
  if (trimmed.includes('SUCCESS') || trimmed.includes('HEALED') || trimmed.includes('is_success')) {
    return 'text-emerald-300';
  }
  return 'text-slate-200';
}

export default function LiveAgentTerminal() {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveWorkbenchFile);
  const step = useSelector(selectWorkbenchStep);
  const isPlaying = useSelector(selectWorkbenchPlaying);
  const soundEnabled = useSelector(selectSoundEnabled);

  const [copied, setCopied] = useState(false);
  const currentFile = workbenchFiles.find((f) => f.id === activeTab) || workbenchFiles[0];
  const codeLines = currentFile.code.split('\n');

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
    <div className="relative rounded-3xl liquid-glass shadow-liquid-glass-lg overflow-hidden font-mono text-xs border border-white/[0.14] space-y-0">
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

      <WorkbenchDaemonStatus
        step={step}
        onSelectStep={(s) => {
          dispatch(setWorkbenchStep(s));
          if (soundEnabled) sounds.playClick();
        }}
      />

      <div className="p-4 sm:p-5 max-h-[340px] overflow-y-auto bg-[#050812]/95 border-y border-white/[0.06]">
        <pre className="font-mono text-xs leading-relaxed overflow-x-auto">
          <code>
            {codeLines.map((line, i) => (
              <div key={i} className="flex items-start hover:bg-white/[0.03] px-1 rounded">
                <span className="w-7 shrink-0 select-none text-slate-600 text-[10px] pt-0.5 text-right pr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={getLineColorClass(line)}>{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="px-5 py-3 bg-[#090e1f]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs backdrop-blur-md">
        <span className="text-slate-300 text-[11px] truncate font-medium">{currentFile.description}</span>
        <Link
          href="/projects/autonomous-gemini-code-fixer"
          className="text-cyan-300 hover:text-violet-300 font-semibold flex items-center gap-1 text-[11px] transition-colors shrink-0"
        >
          <span>Explore Pipeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
