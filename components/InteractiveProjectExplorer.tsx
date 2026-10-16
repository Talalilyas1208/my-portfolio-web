'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectFilteredProjects,
  selectSelectedCategory,
  selectSearchQuery,
  setCategoryFilter,
  setSearchQuery,
} from '@/store/slices/projectsSlice';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilterBar from '@/components/ProjectFilterBar';

export default function InteractiveProjectExplorer() {
  const dispatch = useAppDispatch();
  const filteredProjects = useAppSelector(selectFilteredProjects);
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const searchQuery = useAppSelector(selectSearchQuery);

  return (
    <div className="space-y-8">
      <ProjectFilterBar count={filteredProjects.length} />

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
        <div className="p-12 text-center rounded-3xl liquid-glass-subtle space-y-4">
          <p className="text-slate-600 text-sm">
            No projects found matching &ldquo;<span className="text-cyan-700 font-semibold">{searchQuery}</span>&rdquo; in category{' '}
            <span className="text-slate-900 font-medium">{selectedCategory}</span>.
          </p>
          <button
            onClick={() => {
              dispatch(setSearchQuery(''));
              dispatch(setCategoryFilter('All'));
            }}
            className="px-5 py-2.5 rounded-2xl liquid-btn-primary text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
