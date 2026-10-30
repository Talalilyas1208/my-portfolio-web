import React from 'react';
import Link from 'next/link';
import { ArticlePreview } from '@/data/portfolioData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function ArticleCard({ article }: { article: ArticlePreview }) {
  return (
    <article className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass space-y-4 border border-white/[0.12] hover:border-violet-400/45 transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold ${
              article.status === 'Published'
                ? 'liquid-pill-emerald text-emerald-200'
                : 'liquid-pill-violet text-violet-200'
            }`}
          >
            {article.status}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-violet-400" />
            {article.date}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          {article.readTime}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-300 transition-colors">
        {article.title}
      </h2>

      <p className="text-sm text-slate-300 leading-relaxed font-sans">{article.description}</p>

      {article.outline && article.outline.length > 0 && (
        <div className="p-5 rounded-2xl liquid-glass-subtle space-y-2 border border-white/[0.08]">
          <span className="text-xs font-mono text-violet-300 font-semibold uppercase tracking-wider block">
            Article Breakdown &amp; Takeaways:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            {article.outline.map((point, pIdx) => (
              <li key={pIdx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_4px_#22d3ee]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08]">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-xl text-[11px] font-mono liquid-glass-subtle text-slate-200">
              #{tag}
            </span>
          ))}
        </div>

        {article.slug === 'building-autonomous-self-healing-code-agents-with-gemini' ? (
          <Link
            href="/projects/autonomous-gemini-code-fixer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-violet-300 transition-colors"
          >
            <span>Explore Associated Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span className="text-xs font-mono text-slate-400">Full paper publishing soon</span>
        )}
      </div>
    </article>
  );
}
