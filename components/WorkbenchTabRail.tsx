import React from 'react';
import { FileCode } from 'lucide-react';
import { CodeFile } from '@/data/workbenchFilesData';

interface WorkbenchTabRailProps {
  files: CodeFile[];
  activeTab: string;
  onTabChange: (fileId: string) => void;
}

const tabAccents: Record<string, string> = {
  agent: 'text-violet-400',
  redux: 'text-cyan-400',
  fastapi: 'text-emerald-400',
  docker: 'text-amber-400',
};

export default function WorkbenchTabRail({
  files,
  activeTab,
  onTabChange,
}: WorkbenchTabRailProps) {
  return (
    <div className="flex flex-wrap gap-1 px-3 pt-2 bg-[#070b18]/90 border-b border-white/[0.08] overflow-x-auto">
      {files.map((file) => {
        const isActive = activeTab === file.id;
        const accent = tabAccents[file.id] || 'text-cyan-400';
        return (
          <button
            key={file.id}
            onClick={() => onTabChange(file.id)}
            className={`px-3 py-1.5 rounded-t-xl text-[11px] font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              isActive
                ? 'liquid-pill-violet border-b-0 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
            }`}
          >
            <FileCode className={`w-3.5 h-3.5 ${isActive ? accent : 'text-slate-500'}`} />
            <span>{file.tabLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
