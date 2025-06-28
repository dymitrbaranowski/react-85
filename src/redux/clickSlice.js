import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0, a: 1, b: 2, c: 3 },
  reducers: {
    update: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { update } = clickSlice.actions;
