import { createTheme, Theme } from '@mui/material';
import { darkPalette, lightPalette } from './palette.const';
import './config.d';

export const lightTheme: Theme = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        color: '#FF9914', // No more ripple, on the whole application 💣!
      },
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: darkPalette,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        color: '#FF9914', // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default { lightTheme, darkTheme };
