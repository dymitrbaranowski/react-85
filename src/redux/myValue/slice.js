import { createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// The above code imports necessary functions from Redux Toolkit to create a store and slices.

export const myValueSlice = createSlice({
  name: 'myValueQWE',
  initialState: 150,
  reducers: {
    increment: (state, action) => {
      return state + action.payload;
    },
    decrement: (state, action) => {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;
// The above code creates a slice of state called 'myValue' with an initial value of 150.
// It also creates two action creators: increment and decrement.
// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer([], builder => {
//   builder
//     .addCase(increment, (state, action) => state + action.payload)
//     .addCase(decrement, (state, action) => state - action.payload)
//     .addDefaultCase((state, action) => state);
// });
