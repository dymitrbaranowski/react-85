import { createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// The above code imports necessary functions from Redux Toolkit to create a store and slices.

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.login = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logOut } = userSlice.actions;
// The above code creates a slice of state called 'user' with an initial value of an
