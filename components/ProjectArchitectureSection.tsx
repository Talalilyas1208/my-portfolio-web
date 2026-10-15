import React from 'react';
import { Project } from '@/data/portfolioData';
import { AlertCircle, ShieldCheck, Cpu, CheckCircle2, FileCode } from 'lucide-react';

export default function ProjectArchitectureSection({ project }: { project: Project }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 sm:p-7 rounded-3xl liquid-glass space-y-3">
          <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-rose-600" /> The Problem Statement
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            {project.problemStatement}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl liquid-glass space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> The Engineering Solution
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Cpu className="w-6 h-6 text-cyan-600" /> Architectural Deep Dive &amp; System Design
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            How the components interface to provide performance, isolation, and reliability.
          </p>
        </div>

        <div className="space-y-6">
          {project.architectureDetails.map((arch, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-mono">{arch.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">{arch.description}</p>
              <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                {arch.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {project.codeSnippet && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
              <FileCode className="w-4 h-4 text-cyan-600" />
              <span>Core Implementation Logic: {project.codeSnippet.filename}</span>
            </div>
            <span className="text-[11px] font-mono text-cyan-800 uppercase liquid-pill-primary px-2.5 py-0.5 rounded-full font-bold">
              {project.codeSnippet.language}
            </span>
          </div>
          <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 overflow-x-auto shadow-inner">
            <pre className="font-mono text-xs text-slate-100 leading-relaxed">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
