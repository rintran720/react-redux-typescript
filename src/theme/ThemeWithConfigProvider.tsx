import React, { PropsWithChildren } from 'react';
import ThemeProvider from './ThemeProvider';
import useAppTheme from './useAppTheme';

export default function ThemeWithConfigProvider({ children }: PropsWithChildren) {
  const { theme } = useAppTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
