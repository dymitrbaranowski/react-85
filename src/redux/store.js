import { legacy_createStore as createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReduser } from './accountSlice';
import { localeReducer } from './localeSlice';

const rootReduser = combineReducers({
  account: accountReduser,
  locale: localeReducer,
});

// Enhancer for Redux DevTools
// This allows you to use the Redux DevTools extension in your browser for debugging
const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);
