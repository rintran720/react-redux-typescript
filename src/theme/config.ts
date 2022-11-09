import { createTheme, Theme } from '@mui/material';
import { palette } from '~/constants/palette.const';
import './config.d';

const theme: Theme = createTheme({
	palette,
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

export default theme;
