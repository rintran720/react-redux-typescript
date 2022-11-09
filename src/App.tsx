/* eslint-disable no-duplicate-imports */
import type { ReactElement } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from '~/navigation/RootNavigation';
import { persistor, store } from '~/store/config';
import theme from '~/theme/config';
import ThemeProvider from '~/theme/ThemeProvider';

const App: () => ReactElement = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<RootNavigation />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
