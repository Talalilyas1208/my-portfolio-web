import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TerminalLog {
  id: string;
  type: 'cmd' | 'error' | 'ai' | 'sandbox' | 'success';
  text: string;
  timestamp: string;
}

interface UiState {
  terminalActive: boolean;
  terminalStep: number;
  toastMessage: string | null;
}

const initialState: UiState = {
  terminalActive: true,
  terminalStep: 1,
  toastMessage: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTerminal: (state) => {
      state.terminalActive = !state.terminalActive;
    },
    setTerminalStep: (state, action: PayloadAction<number>) => {
      state.terminalStep = action.payload;
    },
    showToast: (state, action: PayloadAction<string>) => {
      state.toastMessage = action.payload;
    },
    clearToast: (state) => {
      state.toastMessage = null;
    },
  },
});

export const { toggleTerminal, setTerminalStep, showToast, clearToast } = uiSlice.actions;

export const selectTerminalActive = (state: { ui: UiState }) => state.ui.terminalActive;
export const selectTerminalStep = (state: { ui: UiState }) => state.ui.terminalStep;
export const selectToastMessage = (state: { ui: UiState }) => state.ui.toastMessage;

export default uiSlice.reducer;
