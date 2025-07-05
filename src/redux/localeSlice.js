import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: { lang: 'uk' },
  reducers: {
    setLocale(state, action) {
      state.lang = action.payload.lang;
    },
  },
});

export const { setLocale } = slice.actions;
export const localeReducer = slice.reducer;
