import React from 'react';
import { experienceData, personalData } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-16">
      {/* Work Experience */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl liquid-glass text-cyan-300">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">Engineering Work History</h3>
            <p className="text-xs text-slate-400 font-mono">Chronological track record in AI systems &amp; React frontends</p>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-10">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#05070e] border-2 border-cyan-400 group-hover:scale-125 group-hover:border-cyan-300 transition-all flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              </div>

              {/* Experience Card (Liquid Glass) */}
              <div className="p-6 sm:p-7 rounded-3xl liquid-glass-subtle liquid-glass-interactive space-y-4 hover:border-cyan-400/40">
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

                {/* Key Bullet achievements */}
                <div className="space-y-2 mb-5">
                  {item.achievements.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack tags */}
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
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl liquid-glass text-emerald-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">Formal Education &amp; Academic Foundation</h3>
            <p className="text-xs text-slate-400 font-mono">Specialized Degree in Artificial Intelligence</p>
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
    </div>
  );
}
