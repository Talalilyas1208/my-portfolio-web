import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { personalData } from '@/data/portfolioData';
import { Briefcase, Award, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience & Education',
  description:
    'Professional software engineering work history and academic foundation in Artificial Intelligence of Muhammad Talal.',
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Career Timeline"
        title="Professional Experience & Academic Background"
        description="A blend of high-velocity software engineering in production React applications, AI automation workflows, and a formal 4-year degree in Artificial Intelligence."
      />

      {/* Career Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {personalData.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-200/90 border border-white/[0.06] text-center"
          >
            <div className="text-xl sm:text-2xl font-bold font-mono text-primary-400 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 font-sans">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <ExperienceTimeline />
    </div>
  );
}
