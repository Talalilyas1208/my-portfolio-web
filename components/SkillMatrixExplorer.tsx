'use client';

import React, { useState } from 'react';
import { skillGroupsData } from '@/data/portfolioData';
import { Bot, Layers, Database, Cloud, Cpu } from 'lucide-react';

const iconsMap: Record<string, React.ElementType> = {
  'AI & Agentic Systems': Bot,
  'Frontend Engineering': Layers,
  'State & Networking': Cpu,
  'Backend & Databases': Database,
  'Tools & DevOps': Cloud,
};

const categoryColors: Record<string, { pill: string; icon: string }> = {
  'AI & Agentic Systems': { pill: 'liquid-pill-violet text-slate-950', icon: 'text-slate-800' },
  'Frontend Engineering': { pill: 'liquid-pill-primary text-slate-950', icon: 'text-slate-800' },
  'State & Networking': { pill: 'liquid-pill-amber text-slate-950', icon: 'text-slate-800' },
  'Backend & Databases': { pill: 'liquid-pill-emerald text-slate-950', icon: 'text-slate-800' },
  'Tools & DevOps': { pill: 'liquid-pill-rose text-slate-950', icon: 'text-slate-800' },
};

const levelBadgeStyles: Record<string, string> = {
  Core: 'liquid-pill-violet text-slate-950',
  Advanced: 'liquid-pill-emerald text-slate-950',
  Proficient: 'liquid-pill-primary text-slate-950',
};

export default function SkillMatrixExplorer() {
  const [activeCategory, setActiveCategory] = useState(skillGroupsData[0].category);

  const selectedGroup = skillGroupsData.find((g) => g.category === activeCategory) || skillGroupsData[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-md space-y-6 border border-slate-200">
      <div className="flex flex-wrap gap-2.5 border-b border-slate-200 pb-5">
        {skillGroupsData.map((group) => {
          const Icon = iconsMap[group.category] || Cpu;
          const isActive = activeCategory === group.category;
          const catColor = categoryColors[group.category] || categoryColors['AI & Agentic Systems'];

          return (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `${catColor.pill} font-bold shadow-sm scale-[1.02]`
                  : 'liquid-glass-subtle text-slate-800 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? catColor.icon : 'text-slate-600'}`} />
              <span>{group.category}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-5 animate-fade-in">
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2">
            <span>{selectedGroup.category}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 mt-1">
            {selectedGroup.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {selectedGroup.skills.map((skill) => {
            const badgeClass = levelBadgeStyles[skill.level || 'Advanced'] || levelBadgeStyles.Advanced;
            return (
              <div
                key={skill.name}
                className="p-4 rounded-2xl liquid-glass-subtle liquid-glass-interactive flex flex-col justify-between space-y-2 group hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-slate-950 text-sm group-hover:text-slate-950 transition-colors">
                    {skill.name}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0 ${badgeClass}`}>
                    {skill.level}
                  </span>
                </div>
                {skill.highlight && (
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
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
