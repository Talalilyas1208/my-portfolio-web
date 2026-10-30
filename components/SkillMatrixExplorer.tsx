'use client';

import React, { useState } from 'react';
import { skillGroupsData } from '@/data/portfolioData';
import { Bot, Layers, Database, Cloud, Sparkles, Cpu } from 'lucide-react';

const iconsMap: Record<string, React.ElementType> = {
  'AI & Agentic Systems': Bot,
  'Frontend Engineering': Layers,
  'State & Networking': Cpu,
  'Backend & Databases': Database,
  'Tools & DevOps': Cloud,
};

const categoryColors: Record<string, { pill: string; icon: string }> = {
  'AI & Agentic Systems': { pill: 'liquid-pill-violet text-violet-200', icon: 'text-violet-300' },
  'Frontend Engineering': { pill: 'liquid-pill-primary text-cyan-200', icon: 'text-cyan-300' },
  'State & Networking': { pill: 'liquid-pill-amber text-amber-200', icon: 'text-amber-300' },
  'Backend & Databases': { pill: 'liquid-pill-emerald text-emerald-200', icon: 'text-emerald-300' },
  'Tools & DevOps': { pill: 'liquid-pill-rose text-rose-200', icon: 'text-rose-300' },
};

const levelBadgeStyles: Record<string, string> = {
  Core: 'liquid-pill-violet text-violet-200',
  Advanced: 'liquid-pill-emerald text-emerald-200',
  Proficient: 'liquid-pill-primary text-cyan-200',
};

export default function SkillMatrixExplorer() {
  const [activeCategory, setActiveCategory] = useState(skillGroupsData[0].category);

  const selectedGroup = skillGroupsData.find((g) => g.category === activeCategory) || skillGroupsData[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass-lg space-y-6 border border-white/[0.12]">
      <div className="flex flex-wrap gap-2.5 border-b border-white/[0.08] pb-5">
        {skillGroupsData.map((group) => {
          const Icon = iconsMap[group.category] || Sparkles;
          const isActive = activeCategory === group.category;
          const catColor = categoryColors[group.category] || categoryColors['AI & Agentic Systems'];

          return (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `${catColor.pill} font-semibold shadow-liquid-glow scale-[1.02]`
                  : 'liquid-glass-subtle text-slate-300 hover:text-white hover:border-white/25'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? catColor.icon : 'text-slate-400'}`} />
              <span>{group.category}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-5 animate-fade-in">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>{selectedGroup.category}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {selectedGroup.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {selectedGroup.skills.map((skill) => {
            const badgeClass = levelBadgeStyles[skill.level || 'Advanced'] || levelBadgeStyles.Advanced;
            return (
              <div
                key={skill.name}
                className="p-4 rounded-2xl liquid-glass-subtle liquid-glass-interactive flex flex-col justify-between space-y-2 group hover:border-violet-400/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold shrink-0 ${badgeClass}`}>
                    {skill.level}
                  </span>
                </div>
                {skill.highlight && (
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {skill.highlight}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
