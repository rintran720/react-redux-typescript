import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/config';
import { themeSelector } from '~/store/theme/theme.selector';
import { ThemeMode } from '~/types';
import { themeActions } from '../store/theme/theme.slice';
import { darkTheme, lightTheme } from './config';

function useAppTheme() {
  const mode = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  const setAppTheme = useCallback(
    (themeStyle: ThemeMode) => {
      dispatch(themeActions.setTheme(themeStyle));
    },
    [dispatch],
  );

  return { theme: mode === 'dark' ? darkTheme : lightTheme, setAppTheme, mode };
}

export default useAppTheme;
