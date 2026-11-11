import React from 'react';
import { FileCode } from 'lucide-react';
import { CodeFile } from '@/data/workbenchFilesData';

interface WorkbenchTabRailProps {
  files: CodeFile[];
  activeTab: string;
  onTabChange: (fileId: string) => void;
}

const tabAccents: Record<string, string> = {
  agent: 'text-slate-800',
  redux: 'text-slate-800',
  fastapi: 'text-slate-800',
  docker: 'text-slate-800',
};

export default function WorkbenchTabRail({
  files,
  activeTab,
  onTabChange,
}: WorkbenchTabRailProps) {
  return (
    <div className="flex flex-wrap gap-1 px-3 pt-2 bg-slate-100/80 border-b border-slate-200 overflow-x-auto">
      {files.map((file) => {
        const isActive = activeTab === file.id;
        const accent = tabAccents[file.id] || 'text-slate-800';
        return (
          <button
            key={file.id}
            onClick={() => onTabChange(file.id)}
            className={`px-3 py-1.5 rounded-t-xl text-[11px] font-mono transition-all flex items-center gap-1.5 shrink-0 ${
              isActive
                ? 'bg-white border border-slate-200 border-b-white text-slate-950 font-bold shadow-sm'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
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
