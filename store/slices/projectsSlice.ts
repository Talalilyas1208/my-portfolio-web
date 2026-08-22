import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Project, projectsData } from '@/data/portfolioData';

export type ProjectCategory = 'All' | 'AI & Agentic Systems' | 'Frontend Engineering' | 'Full-Stack';

interface ProjectsState {
  items: Project[];
  selectedCategory: ProjectCategory;
  searchQuery: string;
  previewSlug: string | null;
}

const initialState: ProjectsState = {
  items: projectsData,
  selectedCategory: 'All',
  searchQuery: '',
  previewSlug: null,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<ProjectCategory>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    openQuickPreview: (state, action: PayloadAction<string>) => {
      state.previewSlug = action.payload;
    },
    closeQuickPreview: (state) => {
      state.previewSlug = null;
    },
  },
});

export const { setCategoryFilter, setSearchQuery, openQuickPreview, closeQuickPreview } = projectsSlice.actions;

// Selectors
export const selectAllProjects = (state: { projects: ProjectsState }) => state.projects.items;
export const selectSelectedCategory = (state: { projects: ProjectsState }) => state.projects.selectedCategory;
export const selectSearchQuery = (state: { projects: ProjectsState }) => state.projects.searchQuery;
export const selectPreviewSlug = (state: { projects: ProjectsState }) => state.projects.previewSlug;

export const selectFilteredProjects = createSelector(
  [selectAllProjects, selectSelectedCategory, selectSearchQuery],
  (items, category, query) => {
    const trimmedQuery = query.toLowerCase().trim();

    return items.filter((project) => {
      const matchesCategory =
        category === 'All' || project.category === category;

      const matchesSearch =
        trimmedQuery === '' ||
        project.title.toLowerCase().includes(trimmedQuery) ||
        project.subtitle.toLowerCase().includes(trimmedQuery) ||
        project.summary.toLowerCase().includes(trimmedQuery) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(trimmedQuery));

      return matchesCategory && matchesSearch;
    });
  }
);

export const selectPreviewProject = createSelector(
  [selectAllProjects, selectPreviewSlug],
  (items, slug) => {
    if (!slug) return null;
    return items.find((item) => item.slug === slug) || null;
  }
);

export const selectFlagshipProject = createSelector(
  [selectAllProjects],
  (items) => items.find((item) => item.isFlagship) || items[0]
);

export default projectsSlice.reducer;
