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
    <div className="flex flex-wrap gap-1 px-3 pt-2 bg-slate-100/60 border-b border-slate-200/90 overflow-x-auto">
      {files.map((file) => {
        const isActive = activeTab === file.id;
        return (
          <button
            key={file.id}
            onClick={() => onTabChange(file.id)}
            className={`px-3 py-1.5 rounded-t-xl text-[11px] font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              isActive
                ? 'liquid-glass border-b-0 text-cyan-800 font-bold shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-700' : 'text-slate-400'}`} />
            <span>{file.tabLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
