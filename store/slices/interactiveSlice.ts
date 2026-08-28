'use client';

import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export interface TelemetryLog {
  id: string;
  action: string;
  timestamp: string;
  payload: string;
}

interface InteractiveState {
  activeOrbitTech: string | null;
  orbitPaused: boolean;
  activeRadarAxis: string;
  activeArchNode: string;
  activeArchTier: string;
  activeWorkbenchFile: string;
  workbenchStep: number;
  workbenchPlaying: boolean;
  soundEnabled: boolean;
  fps: number;
  telemetryLogs: TelemetryLog[];
}

const initialState: InteractiveState = {
  activeOrbitTech: null,
  orbitPaused: false,
  activeRadarAxis: 'ai-agents',
  activeArchNode: 'code-fixer-service',
  activeArchTier: 'ALL',
  activeWorkbenchFile: 'agent',
  workbenchStep: 3,
  workbenchPlaying: true,
  soundEnabled: false,
  fps: 60,
  telemetryLogs: [
    {
      id: 'init-1',
      action: 'REDUX_STORE_INITIALIZED',
      timestamp: '00:00:01',
      payload: 'Normalized entity stores ready',
    },
    {
      id: 'init-2',
      action: 'AI_AGENT_DAEMON_ONLINE',
      timestamp: '00:00:02',
      payload: 'Gemini 1.5 Pro AST listener active',
    },
  ],
};

function getTimestamp(): string {
  const now = new Date();
  return now.toTimeString().split(' ')[0];
}

export const interactiveSlice = createSlice({
  name: 'interactive',
  initialState,
  reducers: {
    setOrbitTech: (state, action: PayloadAction<string | null>) => {
      state.activeOrbitTech = action.payload;
      if (action.payload) {
        state.telemetryLogs.unshift({
          id: `orbit-${Date.now()}`,
          action: 'ORBIT_NODE_INSPECT',
          timestamp: getTimestamp(),
          payload: action.payload,
        });
        if (state.telemetryLogs.length > 20) state.telemetryLogs.pop();
      }
    },
    toggleOrbitPause: (state) => {
      state.orbitPaused = !state.orbitPaused;
    },
    setRadarAxis: (state, action: PayloadAction<string>) => {
      state.activeRadarAxis = action.payload;
      state.telemetryLogs.unshift({
        id: `radar-${Date.now()}`,
        action: 'RADAR_AXIS_SELECTED',
        timestamp: getTimestamp(),
        payload: action.payload,
      });
      if (state.telemetryLogs.length > 20) state.telemetryLogs.pop();
    },
    setArchNode: (state, action: PayloadAction<string>) => {
      state.activeArchNode = action.payload;
      state.telemetryLogs.unshift({
        id: `arch-${Date.now()}`,
        action: 'ARCH_SERVICE_INSPECT',
        timestamp: getTimestamp(),
        payload: action.payload,
      });
      if (state.telemetryLogs.length > 20) state.telemetryLogs.pop();
    },
    setArchTier: (state, action: PayloadAction<string>) => {
      state.activeArchTier = action.payload;
    },
    setWorkbenchFile: (state, action: PayloadAction<string>) => {
      state.activeWorkbenchFile = action.payload;
      state.telemetryLogs.unshift({
        id: `file-${Date.now()}`,
        action: 'WORKBENCH_FILE_SWITCH',
        timestamp: getTimestamp(),
        payload: action.payload,
      });
      if (state.telemetryLogs.length > 20) state.telemetryLogs.pop();
    },
    setWorkbenchStep: (state, action: PayloadAction<number>) => {
      state.workbenchStep = action.payload;
    },
    toggleWorkbenchPlaying: (state) => {
      state.workbenchPlaying = !state.workbenchPlaying;
    },
    toggleSound: (state) => {
      state.soundEnabled = !state.soundEnabled;
    },
    setFps: (state, action: PayloadAction<number>) => {
      state.fps = action.payload;
    },
  },
});

export const {
  setOrbitTech,
  toggleOrbitPause,
  setRadarAxis,
  setArchNode,
  setArchTier,
  setWorkbenchFile,
  setWorkbenchStep,
  toggleWorkbenchPlaying,
  toggleSound,
  setFps,
} = interactiveSlice.actions;

// Selectors
export const selectActiveOrbitTech = (state: { interactive: InteractiveState }) =>
  state.interactive.activeOrbitTech;
export const selectOrbitPaused = (state: { interactive: InteractiveState }) =>
  state.interactive.orbitPaused;
export const selectActiveRadarAxis = (state: { interactive: InteractiveState }) =>
  state.interactive.activeRadarAxis;
export const selectActiveArchNode = (state: { interactive: InteractiveState }) =>
  state.interactive.activeArchNode;
export const selectActiveArchTier = (state: { interactive: InteractiveState }) =>
  state.interactive.activeArchTier;
export const selectActiveWorkbenchFile = (state: { interactive: InteractiveState }) =>
  state.interactive.activeWorkbenchFile;
export const selectWorkbenchStep = (state: { interactive: InteractiveState }) =>
  state.interactive.workbenchStep;
export const selectWorkbenchPlaying = (state: { interactive: InteractiveState }) =>
  state.interactive.workbenchPlaying;
export const selectSoundEnabled = (state: { interactive: InteractiveState }) =>
  state.interactive.soundEnabled;
export const selectFps = (state: { interactive: InteractiveState }) =>
  state.interactive.fps;
export const selectTelemetryLogs = (state: { interactive: InteractiveState }) =>
  state.interactive.telemetryLogs;

export default interactiveSlice.reducer;
