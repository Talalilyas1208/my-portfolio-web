import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import uiReducer from './slices/uiSlice';
import interactiveReducer from './slices/interactiveSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    ui: uiReducer,
    interactive: interactiveReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
