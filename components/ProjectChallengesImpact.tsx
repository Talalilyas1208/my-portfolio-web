import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';

export default function ProjectChallengesImpact({ project }: { project: Project }) {
  return (
    <>
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Key Capabilities &amp; Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 shadow-[0_0_6px_#06b6d4]"></span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Technical Challenges &amp; How They Were Solved
        </h2>
        <div className="space-y-4">
          {project.challengesAndSolutions.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl liquid-glass space-y-3">
              <div className="flex items-start gap-2 text-sm font-semibold text-rose-700">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-300 text-rose-700 shrink-0">
                  Challenge #{idx + 1}
                </span>
                <span>{item.challenge}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-emerald-700 pl-3 border-l-2 border-emerald-500/50 mt-2">
                <span className="leading-relaxed text-slate-700">
                  <strong className="text-emerald-700 font-semibold">Applied Solution: </strong>
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-cyan-500/30 shadow-liquid-glass-lg space-y-4">
        <div className="flex items-center gap-2 text-cyan-800 font-mono text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-cyan-600" /> Measurable Engineering Impact
        </div>
        <div className="space-y-2.5">
          {project.outcomesAndImpact.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-600"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-2xl liquid-btn-primary text-white font-medium text-xs"
        >
          Discuss this Project with Talal
        </Link>
      </div>
    </>
  );
}
