import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

const myReducer = createReducer([], builder => {
  builder.addCase(increment, (state, action) => state + action.payload);
  builder.addCase(decrement, (state, action) => state - action.payload);
  builder.addDefaultCase((state, action) => state);
});

export const add = createAction('items/add');
export const remove = createAction('items/remove');

// IMMER is a library that allows you to work with immutable state in a more convenient way.
// It allows you to write code that appears to mutate the state, but under the hood,
// it creates a new state object, ensuring immutability.
// The createReducer function from Redux Toolkit uses Immer to handle state updates.
const itemsReducer = createReducer([], builder => {
  // builder.addCase(add, (state, action) => [...state, action.payload]);
  builder.addCase(add, (state, action) => state.push(action.payload));
  builder.addCase(remove, (state, action) =>
    state.filter(item => item.id !== action.payload.id)
  );
  // builder.addDefaultCase((state, action) => state);
});
export const store = configureStore({
  reducer: {
    myValue: myReducer,
    items: itemsReducer,
  },
});
