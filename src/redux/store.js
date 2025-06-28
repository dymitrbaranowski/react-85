import { configureStore } from '@reduxjs/toolkit';
// Import the clickSlice reducer
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { clicksReducer } from './clickSlice';

export const store = configureStore({
  reducer: {
    clicks: clicksReducer, // Use the clickSlice reducer
  },
  middleware(getDefaultMiddleware) {
    // Add any custom middleware here if needed
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
