import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/config';
import { themeSelector } from '~/store/theme/theme.selector';
import { ThemeMode } from '~/types';
import { themeActions } from '../store/theme/theme.slice';
import { darkTheme, lightTheme } from './config';

export function useAppTheme() {
  const mode = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  const setAppTheme = useCallback(
    (themeStyle: ThemeMode) => {
      dispatch(themeActions.setTheme(themeStyle));
    },
    [dispatch],
  );

  const isDark = useMemo(() => mode === 'dark', [mode]);

  return { theme: mode === 'dark' ? darkTheme : lightTheme, setAppTheme, mode, isDark };
}
