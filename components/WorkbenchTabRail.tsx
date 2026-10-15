import React from 'react';
import { FileCode } from 'lucide-react';
import { CodeFile } from '@/data/workbenchFilesData';

interface WorkbenchTabRailProps {
  files: CodeFile[];
  activeTab: string;
  onTabChange: (fileId: string) => void;
}

export default function WorkbenchTabRail({
  files,
  activeTab,
  onTabChange,
}: WorkbenchTabRailProps) {
  return (
    <div className="flex flex-wrap gap-1 px-3 pt-2 bg-black/40 border-b border-white/[0.06] overflow-x-auto">
      {files.map((file) => {
        const isActive = activeTab === file.id;
        return (
          <button
            key={file.id}
            onClick={() => onTabChange(file.id)}
            className={`px-3 py-1.5 rounded-t-xl text-[11px] font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              isActive
                ? 'liquid-glass border-b-0 text-cyan-300 font-semibold shadow-liquid-glow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
            }`}
          >
            <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
            <span>{file.tabLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
