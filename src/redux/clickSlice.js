import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { update } = clickSlice.actions;
