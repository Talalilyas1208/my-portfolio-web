'use client';

import React, { useState } from 'react';
import { skillGroupsData } from '@/data/portfolioData';
import { Bot, Layers, Database, Cloud, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

const iconsMap: Record<string, React.ElementType> = {
  'Agentic AI & LLM Systems': Bot,
  'Frontend & React Architecture': Layers,
  'State Management & Data Flow': Cpu,
  'Backend & Database Engineering': Database,
  'DevOps, Cloud & Quality Assurance': Cloud,
};

export default function SkillMatrixExplorer() {
  const [activeCategory, setActiveCategory] = useState(skillGroupsData[0].category);

  const selectedGroup = skillGroupsData.find((g) => g.category === activeCategory) || skillGroupsData[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface-200/80 border border-white/[0.08] shadow-2xl space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/[0.06] pb-4">
        {skillGroupsData.map((group) => {
          const Icon = iconsMap[group.category] || Sparkles;
          const isActive = activeCategory === group.category;

          return (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 font-semibold'
                  : 'bg-surface-300 text-slate-300 hover:text-white hover:bg-surface-100 border border-white/[0.04]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{group.category}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Category Content */}
      <div className="space-y-4 animate-fade-in">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>{selectedGroup.category}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {selectedGroup.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {selectedGroup.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-[#090d16] border border-white/[0.06] hover:border-primary-500/40 transition-all flex flex-col justify-between space-y-2 group"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-slate-100 text-sm group-hover:text-primary-400 transition-colors">
                  {skill.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-primary-600/15 text-primary-300 border border-primary-500/20 shrink-0">
                  {skill.level}
                </span>
              </div>
              {skill.highlight && (
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {skill.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
