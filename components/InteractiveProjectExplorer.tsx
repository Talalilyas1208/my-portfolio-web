'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectFilteredProjects,
  selectSelectedCategory,
  selectSearchQuery,
  setCategoryFilter,
  setSearchQuery,
  ProjectCategory,
} from '@/store/slices/projectsSlice';
import ProjectCard from '@/components/ProjectCard';
import { Search, Sparkles, Filter, Layers, Bot, X } from 'lucide-react';

const categories: { label: string; value: ProjectCategory; icon: React.ElementType }[] = [
  { label: 'All Projects', value: 'All', icon: Layers },
  { label: 'AI & Agentic Systems', value: 'AI & Agentic Systems', icon: Bot },
  { label: 'Frontend Engineering', value: 'Frontend Engineering', icon: Layers },
  { label: 'Full-Stack', value: 'Full-Stack', icon: Sparkles },
];

export default function InteractiveProjectExplorer() {
  const dispatch = useAppDispatch();
  const filteredProjects = useAppSelector(selectFilteredProjects);
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const searchQuery = useAppSelector(selectSearchQuery);

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search + Category Pills */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surface-200/90 border border-white/[0.06] shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Real-Time Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              placeholder="Instant search by technology, keyword, or architecture (e.g. Gemini, Redux, AST, TypeScript)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface-300 border border-white/[0.06] text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => dispatch(setSearchQuery(''))}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Result Count Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-slate-400 bg-surface-300 px-3 py-1.5 rounded-xl border border-white/[0.04]">
              <strong className="text-primary-400 font-semibold">{filteredProjects.length}</strong> matching{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-white/[0.04]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            const Icon = cat.icon;

            return (
              <button
                key={cat.value}
                onClick={() => dispatch(setCategoryFilter(cat.value))}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                    : 'bg-surface-300 text-slate-300 hover:text-white hover:bg-surface-100 border border-white/[0.04]'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.isFlagship}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-surface-200/50 border border-white/[0.06] space-y-3">
          <p className="text-slate-400 text-sm">
            No projects found matching &ldquo;<span className="text-primary-400">{searchQuery}</span>&rdquo; in category{' '}
            <span className="text-white font-medium">{selectedCategory}</span>.
          </p>
          <button
            onClick={() => {
              dispatch(setSearchQuery(''));
              dispatch(setCategoryFilter('All'));
            }}
            className="px-4 py-2 rounded-xl bg-primary-600 text-white text-xs font-medium hover:bg-primary-500 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
