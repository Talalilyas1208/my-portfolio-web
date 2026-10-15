import React from 'react';
import Link from 'next/link';
import { Briefcase, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import { experienceData, personalData } from '@/data/portfolioData';

export default function HomeExperienceSnapshot() {
  return (
    <>
      <TechnicalRulerDivider station="STA 700" label="TRACK RECORD & ACADEMIA" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <SectionHeading
              eyebrow="Engineering Track Record"
              title="Experience & AI Academic Roots"
              description="Proven track record in high-velocity startup and agency environments, combining practical React frontend performance with a formal Artificial Intelligence degree."
            />

            <div className="p-6 rounded-3xl liquid-glass border border-emerald-500/30 space-y-3 shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <GraduationCap className="w-4 h-4" /> Academic Distinction
              </div>
              <h3 className="text-sm font-bold text-slate-100">{personalData.education.degree}</h3>
              <p className="text-xs text-slate-400">
                {personalData.education.institution} • Graduated {personalData.education.graduationDate}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                {personalData.education.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              <span>View Full Experience Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-3xl liquid-glass liquid-glass-interactive space-y-4 hover:border-cyan-400/35">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                    <div className="text-sm text-cyan-400 font-mono flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" /> <span>{exp.company}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-slate-400 text-xs">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 liquid-pill px-3 py-1 rounded-full self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed font-sans">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.08]">
                  {exp.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-xl text-[11px] font-mono liquid-glass-subtle text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
