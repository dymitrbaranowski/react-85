import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'account',
  initialState: { balance: 500 },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    reset: state => {
      state.balance = 0;
    },
  },
});

export const { deposit, withdraw, reset } = slice.actions;
export const accountReducer = slice.reducer;
