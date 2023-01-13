import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { BookState, ThemeState } from '~/types';
import { Storage } from '~/utils/localStorage';
import { isProduction } from '../utils/env';
import { bookReducers } from './book/book.slice';
import { themeReducers } from './theme/theme.slice';

const rootReducer = combineReducers({
  book: bookReducers,
  theme: themeReducers,
});

const persistConfig = {
  version: 1,
  key: 'root',
  storage: Storage,
  stateReconciler: autoMergeLevel2,
};

export type CombinedAppState = CombinedState<{ book: BookState; theme: ThemeState }>;

const persistedReducer = persistReducer<CombinedAppState, AnyAction>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: !isProduction(),
  middleware: (getDefaultMiddleware: any) => {
    const defaultMiddlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    // if (!isProduction()) {
    // 	const createDebugger = require('redux-flipper').default;
    // 	defaultMiddlewares.push(createDebugger());
    // }
    return defaultMiddlewares;
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
