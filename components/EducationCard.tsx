import React from 'react';
import { personalData } from '@/data/portfolioData';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function EducationCard() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-2xl liquid-glass text-emerald-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Formal Education &amp; Academic Foundation</h3>
          <p className="text-xs text-slate-500 font-mono">Specialized Degree in Artificial Intelligence</p>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.15)] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium liquid-pill-emerald text-emerald-300 mb-2">
              <Award className="w-3.5 h-3.5" />
              Graduated August 2023
            </div>
            <h4 className="text-xl font-bold text-slate-100">
              {personalData.education.degree}
            </h4>
            <p className="text-sm font-medium text-emerald-300/90 font-mono">
              {personalData.education.institution} — {personalData.education.location}
            </p>
          </div>
        </div>

        <div className="space-y-2.5 mt-4 pt-4 border-t border-white/[0.08]">
          {personalData.education.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span className="leading-relaxed">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
