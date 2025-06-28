import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const clickSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update: (state, action) => {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['value'], // only persist the value slice
};

export const clicksReducer = persistReducer(persistConfig, clickSlice.reducer);

export const { update } = clickSlice.actions;

//Selectors

export const getClicksValue = state => state.clicks.value;
