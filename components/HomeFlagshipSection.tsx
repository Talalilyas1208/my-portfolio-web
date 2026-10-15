import React from 'react';
import { Sparkles } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import LiveAgentTerminal from '@/components/LiveAgentTerminal';
import TechnicalRulerDivider from '@/components/TechnicalRulerDivider';
import { projectsData } from '@/data/portfolioData';

export default function HomeFlagshipSection() {
  const flagshipProject = projectsData.find((p) => p.isFlagship) || projectsData[0];

  return (
    <>
      <TechnicalRulerDivider station="STA 200" label="AUTONOMOUS AI AGENT" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects">
        <div className="relative space-y-8">
          <SectionHeading
            eyebrow="Flagship AI Agent"
            title="Autonomous Gemini Code-Fixer & Test Runner"
            description="The core differentiator: an autonomous closed-loop agent that continuously monitors source code, captures runtime regressions, prompts Google Gemini with AST context, and validates sandboxed fixes before committing."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ProjectCard project={flagshipProject} featured={true} />
            </div>
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" /> Multi-File IDE Workbench
                </span>
                <span className="text-[10px] font-mono text-emerald-800 liquid-pill-emerald px-2.5 py-0.5 rounded-full font-bold">
                  LIVE WORKBENCH
                </span>
              </div>
              <LiveAgentTerminal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
