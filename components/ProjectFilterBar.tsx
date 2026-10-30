'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectSelectedCategory,
  selectSearchQuery,
  setCategoryFilter,
  setSearchQuery,
  ProjectCategory,
} from '@/store/slices/projectsSlice';
import { Search, Cpu, Layers, Bot, X } from 'lucide-react';

const categories: { label: string; value: ProjectCategory; icon: React.ElementType; color: string }[] = [
  { label: 'All Projects', value: 'All', icon: Layers, color: 'text-violet-700' },
  { label: 'AI & Agentic Systems', value: 'AI & Agentic Systems', icon: Bot, color: 'text-violet-700' },
  { label: 'Frontend Engineering', value: 'Frontend Engineering', icon: Layers, color: 'text-emerald-700' },
  { label: 'Full-Stack', value: 'Full-Stack', icon: Cpu, color: 'text-amber-700' },
];

export default function ProjectFilterBar({ count }: { count: number }) {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const searchQuery = useAppSelector(selectSearchQuery);

  return (
    <div className="p-4 sm:p-6 rounded-3xl liquid-glass shadow-sm space-y-4 border border-slate-200">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-700" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder="Instant search by technology, keyword, or architecture..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => dispatch(setSearchQuery(''))}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-slate-950"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono text-slate-900 liquid-pill px-3.5 py-2 rounded-2xl">
            <strong className="text-violet-800 font-bold">{count}</strong> matching {count === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          const Icon = cat.icon;

          return (
            <button
              key={cat.value}
              onClick={() => dispatch(setCategoryFilter(cat.value))}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-medium transition-all duration-300 ${
                isActive
                  ? 'liquid-pill-violet text-slate-950 font-bold shadow-sm scale-[1.02]'
                  : 'liquid-glass-subtle text-slate-800 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? cat.color : 'text-slate-600'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
