import React from 'react';
import { RouterProvider } from 'react-router-dom'; // import '~/languages/i18n';
import theme from '~/theme/config';
import ThemeProvider from '~/theme/ThemeProvider';
import router from './router';

function RootNavigation() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default RootNavigation;
