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

const categoryAccents: Record<string, string> = {
  'AI & Agentic Systems': 'liquid-pill-violet text-slate-950',
  'Frontend Engineering': 'liquid-pill-primary text-slate-950',
  'State & Networking': 'liquid-pill-amber text-slate-950',
  'Backend & Databases': 'liquid-pill-emerald text-slate-950',
  'Tools & DevOps': 'liquid-pill-rose text-slate-950',
};

export default function SkillCategoryCard({ group }: { group: SkillGroup }) {
  const Icon = categoryIcons[group.category] || Cpu;
  const isAiGroup = group.category === 'AI & Agentic Systems';
  const iconStyle = categoryAccents[group.category] || 'liquid-pill-violet text-slate-950';

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
        isAiGroup
          ? 'liquid-glass-accent md:col-span-2 shadow-md border-slate-300'
          : 'liquid-glass shadow-sm hover:border-slate-300'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-2xl ${iconStyle}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-950">{group.category}</h3>
          <p className="text-xs text-slate-700 font-mono">{group.description}</p>
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
