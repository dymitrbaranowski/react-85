import { configureStore } from '@reduxjs/toolkit';
// Import the clickSlice reducer
import { clickSlice } from './clickSlice';

export const store = configureStore({
  reducer: {
    clicks: clickSlice.reducer, // Use the clickSlice reducer
  },
});
