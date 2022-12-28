/* eslint-disable no-duplicate-imports */
import { lazy, ReactElement } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/store/config';
import theme from '~/theme/config';
import ThemeProvider from '~/theme/ThemeProvider';
import withSuspense from '~/hocs/withSuspense';
const BrowserRootNavigation = lazy(() => import('~/navigation/BrowserRootNavigation'));

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>{withSuspense(BrowserRootNavigation)}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
