import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';

export default function ProjectChallengesImpact({ project }: { project: Project }) {
  return (
    <>
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass space-y-4">
        <h3 className="text-xl font-bold text-slate-950">Key Capabilities &amp; Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
          Technical Challenges &amp; How They Were Solved
        </h2>
        <div className="space-y-4">
          {project.challengesAndSolutions.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl liquid-glass space-y-3">
              <div className="flex items-start gap-2 text-sm font-semibold text-slate-950">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full liquid-pill-rose text-slate-950 shrink-0">
                  Challenge #{idx + 1}
                </span>
                <span className="text-slate-950">{item.challenge}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm pl-3 border-l-2 border-slate-900 mt-2">
                <span className="leading-relaxed text-slate-800">
                  <strong className="text-slate-800 font-semibold">Applied Solution: </strong>
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent border border-slate-300 shadow-liquid-glass-lg space-y-4">
        <div className="flex items-center gap-2 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-slate-800" /> Measurable Engineering Impact
        </div>
        <div className="space-y-2.5">
          {project.outcomesAndImpact.map((outcome, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-slate-800 mt-0.5 shrink-0" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 hover:text-slate-800"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-2xl liquid-btn-primary text-slate-950 font-bold text-xs"
        >
          Discuss this Project with Talal
        </Link>
      </div>
    </>
  );
}
