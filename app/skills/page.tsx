import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import CompetencyRadarChart from '@/components/CompetencyRadarChart';
import TechOrbitSystem from '@/components/TechOrbitSystem';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import SkillCategoryCard from '@/components/SkillCategoryCard';
import { skillGroupsData } from '@/data/portfolioData';
import { Sparkles } from 'lucide-react';

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

      {/* Featured AI highlight box (Liquid Glass Accent) */}
      <div className="p-6 sm:p-8 rounded-3xl liquid-glass-accent shadow-liquid-glow space-y-3 border border-cyan-500/40">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
          Primary Specialization: AI Agents &amp; Modern React
        </div>
        <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
          Holding a formal Bachelor of Science in Artificial Intelligence (BS AI), Talal bridges the gap between raw LLM capabilities (Gemini, OpenAI) and production software systems—building autonomous agents that don&apos;t just chat, but execute, verify, and heal code deterministically.
        </p>
      </div>

      <TechnicalRulerDivider station="STA 100" label="MULTIAXIAL RADAR" />
      <CompetencyRadarChart />

      <TechnicalRulerDivider station="STA 200" label="ORBITAL STACK" />
      <TechOrbitSystem />

      <TechnicalRulerDivider station="STA 300" label="TAXONOMY MATRIX" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroupsData.map((group, idx) => (
          <SkillCategoryCard key={idx} group={group} />
        ))}
      </div>
    </div>
  );
}
