import React from 'react';
import SkillBadge from '@/components/SkillBadge';
import { SkillGroup } from '@/data/portfolioData';
import { Cpu, Bot, Layout, Database, Network, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'AI & Agentic Systems': Bot,
  'Frontend Engineering': Layout,
  'State & Networking': Network,
  'Backend & Databases': Database,
  'Tools & DevOps': Wrench,
};

export default function SkillCategoryCard({ group }: { group: SkillGroup }) {
  const Icon = categoryIcons[group.category] || Cpu;
  const isAiGroup = group.category === 'AI & Agentic Systems';

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
        isAiGroup
          ? 'liquid-glass-accent md:col-span-2 shadow-liquid-glow-lg border-cyan-400/40'
          : 'liquid-glass shadow-liquid-glass hover:border-cyan-400/30'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-2xl liquid-glass text-cyan-300">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-100">{group.category}</h3>
          <p className="text-xs text-slate-400 font-mono">{group.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 pt-2">
        {group.skills.map((skill, sIdx) => (
          <SkillBadge key={sIdx} name={skill.name} highlight={skill.highlight} level={skill.level} />
        ))}
      </div>
    </div>
  );
}
