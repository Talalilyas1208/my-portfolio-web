import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';

export default function ProjectChallengesImpact({ project }: { project: Project }) {
  return (
    <>
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass space-y-4">
        <h3 className="text-xl font-bold text-white">Key Capabilities &amp; Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0 shadow-[0_0_6px_#a78bfa]" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Technical Challenges &amp; How They Were Solved
        </h2>
        <div className="space-y-4">
          {project.challengesAndSolutions.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl liquid-glass space-y-3">
              <div className="flex items-start gap-2 text-sm font-semibold text-rose-300">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full liquid-pill-rose text-rose-200 shrink-0">
                  Challenge #{idx + 1}
                </span>
                <span>{item.challenge}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm pl-3 border-l-2 border-emerald-400/60 mt-2">
                <span className="leading-relaxed text-slate-200">
                  <strong className="text-emerald-300 font-semibold">Applied Solution: </strong>
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent border border-emerald-400/35 shadow-liquid-glass-lg space-y-4">
        <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-emerald-400" /> Measurable Engineering Impact
        </div>
        <div className="space-y-2.5">
          {project.outcomesAndImpact.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300"
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
