import { configureStore } from '@reduxjs/toolkit';
import { accountReduser } from './accountSlice';
import { localeReducer } from './localeSlice';

export const store = configureStore({
  reducer: {
    account: accountReduser,
    locale: localeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});
