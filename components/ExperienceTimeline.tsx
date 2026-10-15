import React from 'react';
import { experienceData } from '@/data/portfolioData';
import { Briefcase } from 'lucide-react';
import ExperienceItemCard from '@/components/ExperienceItemCard';
import EducationCard from '@/components/EducationCard';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-16">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl liquid-glass text-cyan-300">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Engineering Work History</h3>
            <p className="text-xs text-slate-500 font-mono">Chronological track record in AI systems &amp; React frontends</p>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-slate-300 space-y-10">
          {experienceData.map((item, idx) => (
            <ExperienceItemCard key={idx} item={item} />
          ))}
        </div>
      </div>

      <EducationCard />
    </div>
  );
}
