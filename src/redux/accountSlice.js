import { createAction, createReducer } from '@reduxjs/toolkit';

export const deposit = createAction('account/deposit');

export const withdraw = createAction('account/withdraw');

export const accountReduser = createReducer({ balance: 500 }, builder =>
  builder
    .addCase(deposit, (state, action) => {
      state.balance += action.payload;
    })
    .addCase(withdraw, (state, action) => {
      state.balance -= action.payload;
    })
);

export const resetAccount = createAction('account/reset');
