import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { myValueSlice } from './myValue/slice';
import { itemSlice } from './item/slice';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// The above code imports necessary functions from Redux Toolkit to create a store and slices.

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    // myValue: myReducer,
    items: itemSlice.reducer,
    // items: itemsReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
