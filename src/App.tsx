/* eslint-disable no-duplicate-imports */
import { lazy, ReactElement } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/store/config';
import withSuspense from '~/hocs/withSuspense';
import { ThemeWithConfigProvider } from '~/theme/core';

const RootNavigation = lazy(() => import('~/navigation/RootNavigation'));

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeWithConfigProvider>{withSuspense(RootNavigation)}</ThemeWithConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
