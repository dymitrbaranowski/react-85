import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = itemSlice.actions;
