/* eslint-disable no-duplicate-imports */
import { lazy, ReactElement, useContext } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~/store/config';
import withSuspense from '~/hocs/withSuspense';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeWithConfigProvider from './theme/ThemeWithConfigProvider';

const RootNavigation = lazy(() => import('~/navigation/RootNavigation'));

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeWithConfigProvider>
          <CssBaseline enableColorScheme={true} />
          {withSuspense(RootNavigation)}
        </ThemeWithConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
