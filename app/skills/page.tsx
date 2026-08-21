import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import SkillBadge from '@/components/SkillBadge';
import { skillGroupsData } from '@/data/portfolioData';
import { Cpu, Bot, Layout, Database, Network, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills & Technical Expertise',
  description:
    'Technical skill matrix of Muhammad Talal across AI & Agentic Systems, Frontend Engineering, State Management, Backend & DevOps.',
};

const categoryIcons: Record<string, React.ElementType> = {
  'AI & Agentic Systems': Bot,
  'Frontend Engineering': Layout,
  'State & Networking': Network,
  'Backend & Databases': Database,
  'Tools & DevOps': Wrench,
};

export default function SkillsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Skill Taxonomy"
        title="Technical Expertise & Tooling"
        description="Comprehensive breakdown of skills grouped by domain, from closed-loop autonomous AI agent architectures to enterprise React state management."
      />

      {/* Featured AI highlight box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-950/80 via-surface-200/90 to-surface-200/60 border border-primary-500/30 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          Primary Specialization: AI Agents & Modern React
        </div>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          Holding a formal Bachelor of Science in Artificial Intelligence (BS AI), Talal bridges the gap between raw LLM capabilities (Gemini, OpenAI) and production software systems—building autonomous agents that don&apos;t just chat, but execute, verify, and heal code deterministically.
        </p>
      </div>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroupsData.map((group, idx) => {
          const Icon = categoryIcons[group.category] || Cpu;

          return (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-surface-200/90 border transition-all ${
                group.category === 'AI & Agentic Systems'
                  ? 'border-primary-500/30 bg-gradient-to-b from-[#141d2e] to-[#0d1424] md:col-span-2'
                  : 'border-white/[0.06] hover:border-primary-500/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-600/10 border border-primary-500/20 text-primary-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <SkillBadge
                    key={sIdx}
                    name={skill.name}
                    highlight={skill.highlight}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
