import { Palette, PaletteColor } from '@mui/material';
import { PaletteAugmentColorOptions } from '@mui/material/styles/createPalette';

export const lightPalette: Palette = {
  mode: 'light',
  common: { black: '#000', white: '#fff' },
  primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0', contrastText: '#fff' },
  secondary: { main: '#9c27b0', light: '#ba68c8', dark: '#7b1fa2', contrastText: '#fff' },
  error: { main: '#d32f2f', light: '#ef5350', dark: '#c62828', contrastText: '#fff' },
  warning: { main: '#ed6c02', light: '#ff9800', dark: '#e65100', contrastText: '#fff' },
  info: { main: '#0288d1', light: '#03a9f4', dark: '#01579b', contrastText: '#fff' },
  success: { main: '#2e7d32', light: '#4caf50', dark: '#1b5e20', contrastText: '#fff' },
  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: { paper: '#fff', default: '#fff' },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  getContrastText: function (background: string): string {
    return '#fff';
  },
  augmentColor: function (options: PaletteAugmentColorOptions): PaletteColor {
    throw new Error('Function not implemented.');
  },
};

export const darkPalette: any = {
  mode: 'dark',
  common: { black: '#000', white: '#fff' },
  primary: { main: '#add', light: '#312', dark: '#541', contrastText: '#fff' },
  secondary: { main: '#9c27b0', light: '#ba68c8', dark: '#7b1fa2', contrastText: '#fff' },
  error: { main: '#d32f2f', light: '#ef5350', dark: '#c62828', contrastText: '#fff' },
  warning: { main: '#ed6c02', light: '#ff9800', dark: '#e65100', contrastText: '#fff' },
  info: { main: '#0288d1', light: '#03a9f4', dark: '#01579b', contrastText: '#fff' },
  success: { main: '#2e7d32', light: '#4caf50', dark: '#1b5e20', contrastText: '#fff' },
};
