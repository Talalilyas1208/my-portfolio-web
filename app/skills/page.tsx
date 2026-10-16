import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import SectionHeading from '@/components/SectionHeading';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import SkillCategoryCard from '@/components/SkillCategoryCard';
import SmoothLazyReveal from '@/components/SmoothLazyReveal';
import LazyLoadingPlaceholder from '@/components/LazyLoadingPlaceholder';
import { skillGroupsData } from '@/data/portfolioData';
import { Sparkles } from 'lucide-react';

const CompetencyRadarChart = dynamic(() => import('@/components/CompetencyRadarChart'), {
  loading: () => <LazyLoadingPlaceholder height="h-[440px]" label="Loading Competency Radar..." />,
});

const TechOrbitSystem = dynamic(() => import('@/components/TechOrbitSystem'), {
  loading: () => <LazyLoadingPlaceholder height="h-[520px]" label="Loading Planetary Tech Orbit..." />,
});

export const metadata: Metadata = {
  title: 'Skills & Technical Expertise',
  description:
    'Technical skill matrix of Muhammad Talal across AI & Agentic Systems, Frontend Engineering, State Management, Backend & DevOps.',
};

export default function SkillsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Skill Taxonomy"
        title="Technical Expertise &amp; Tooling"
        description="Comprehensive breakdown of skills grouped by domain, from closed-loop autonomous AI agent architectures to enterprise React state management."
      />

      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent shadow-liquid-glow space-y-3 border border-cyan-500/40">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
          Primary Specialization: AI Agents &amp; Modern React
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
          Holding a formal Bachelor of Science in Artificial Intelligence (BS AI), Talal bridges the gap between raw LLM capabilities (Gemini, OpenAI) and production software systems—building autonomous agents that don&apos;t just chat, but execute, verify, and heal code deterministically.
        </p>
      </div>

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 100" label="MULTIAXIAL RADAR" />
        <CompetencyRadarChart />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 200" label="ORBITAL STACK" />
        <TechOrbitSystem />
      </SmoothLazyReveal>

      <SmoothLazyReveal>
        <TechnicalRulerDivider station="STA 300" label="TAXONOMY MATRIX" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroupsData.map((group, idx) => (
            <SkillCategoryCard key={idx} group={group} />
          ))}
        </div>
      </SmoothLazyReveal>
    </div>
  );
}
