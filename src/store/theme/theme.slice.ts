import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { ThemeMode, ThemeState, ReduxAction } from '~/types';

const initialState: ThemeState = {
  mode: 'dark',
};

const themeSlice = createSlice<ThemeState, SliceCaseReducers<ThemeState>, string>({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: ReduxAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducers = themeSlice.reducer;
export default themeSlice;
