import { configureStore } from '@reduxjs/toolkit';
// Import the clickSlice reducer
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { clickSlice } from './clickSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['value'], // only persist the value slice
};

const persistedClicksReducer = persistReducer(
  persistConfig,
  clickSlice.reducer
);

export const store = configureStore({
  reducer: {
    clicks: persistedClicksReducer, // Use the clickSlice reducer
  },
});

export const persistor = persistStore(store);
