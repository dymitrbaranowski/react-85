import { configureStore } from '@reduxjs/toolkit';
// Import the clickSlice reducer
import { persistStore } from 'redux-persist';
import { clicksReducer } from './clickSlice';

export const store = configureStore({
  reducer: {
    clicks: clicksReducer, // Use the clickSlice reducer
  },
});

export const persistor = persistStore(store);
