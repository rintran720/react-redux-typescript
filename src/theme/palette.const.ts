import { PaletteOptions } from '@mui/material/styles/createPalette';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  common: { black: '#353535', white: '#f5f1ed' },
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
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  common: { black: '#f5f1ed', white: '#353535' },
  primary: { main: '#9f86c0', light: '#be95c4', dark: '#5e548e', contrastText: '#fff' },
  secondary: { main: '#e5989b', light: '#ffb4a2', dark: '#b5838d', contrastText: '#fff' },
  error: { main: '#d32f2f', light: '#ef5350', dark: '#c62828', contrastText: '#fff' },
  warning: { main: '#ed6c02', light: '#ff9800', dark: '#e65100', contrastText: '#fff' },
  info: { main: '#0288d1', light: '#03a9f4', dark: '#01579b', contrastText: '#fff' },
  success: { main: '#99d98c', light: '#b5e48c', dark: '#76c893', contrastText: '#fff' },
};
