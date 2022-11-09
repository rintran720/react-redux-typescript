/* eslint-disable no-duplicate-imports */
import type { ReactElement } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigation from '~/navigation/RootNavigation';
import { persistor, store } from '~/store/config';

const App: () => ReactElement = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<RootNavigation />
			</PersistGate>
		</Provider>
	);
};

export default App;
