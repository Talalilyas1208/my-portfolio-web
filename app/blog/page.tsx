import React from 'react';
import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { articlesData } from '@/data/portfolioData';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Articles & Insights',
  description:
    'Technical deep-dives on autonomous AI agents, Google Gemini LLM pipelines, React state normalization, and Next.js App Router performance by Muhammad Talal.',
};

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeading
        eyebrow="Technical Writing"
        title="Engineering Articles & Case Notes"
        description="Deep dives into practical AI agent architectures, self-healing developer tooling, and modern frontend state management."
      />

      <div className="space-y-8">
        {articlesData.map((article, idx) => (
          <article
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-surface-200/90 border border-white/[0.06] hover:border-primary-500/30 transition-all space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                    article.status === 'Published'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-primary-600/10 text-primary-400 border border-primary-500/20'
                  }`}
                >
                  {article.status}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 hover:text-primary-400 transition-colors">
              {article.title}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              {article.description}
            </p>

            {/* Article Outline / Key Takeaways */}
            {article.outline && article.outline.length > 0 && (
              <div className="p-4 rounded-xl bg-surface-300/80 border border-white/[0.04] space-y-2">
                <span className="text-xs font-mono text-primary-400 font-semibold uppercase tracking-wider block">
                  Article Breakdown & Takeaways:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  {article.outline.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary-400 mt-1.5 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags & Actions */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {article.slug === 'building-autonomous-self-healing-code-agents-with-gemini' ? (
                <a
                  href="/projects/autonomous-gemini-code-fixer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <span>Explore Associated Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500">Full paper publishing soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
