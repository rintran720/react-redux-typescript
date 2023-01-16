import { RootState } from '../config';

export function themeSelector(state: RootState) {
  return state.theme.mode;
}
