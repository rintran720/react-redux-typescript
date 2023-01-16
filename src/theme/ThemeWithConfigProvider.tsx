import React, { PropsWithChildren } from 'react';
import { useAppTheme } from './core';
import ThemeProvider from './ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

export function ThemeWithConfigProvider({ children }: PropsWithChildren) {
  const { theme } = useAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      {children}
    </ThemeProvider>
  );
}
