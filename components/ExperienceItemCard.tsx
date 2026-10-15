import React from 'react';
import { ExperienceRole } from '@/data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceItemCard({ item }: { item: ExperienceRole }) {
  return (
    <div className="relative group">
      <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white border-2 border-cyan-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.4)]">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
      </div>

      <div className="p-6 sm:p-7 rounded-3xl liquid-glass liquid-glass-interactive space-y-4 hover:border-cyan-400/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {item.role}
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-200 font-medium mt-0.5">
              <span className="text-cyan-400 font-semibold">{item.company}</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400 text-xs">
                <MapPin className="w-3 h-3 text-slate-500" />
                {item.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono liquid-pill text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {item.period}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-4 leading-relaxed font-sans">
          {item.description}
        </p>

        <div className="space-y-2 mb-5">
          {item.achievements.map((bullet, bIdx) => (
            <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span className="leading-relaxed">{bullet}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-xl text-[11px] font-mono liquid-glass-subtle text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
