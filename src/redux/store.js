import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  account: {
    balance: 500,
  },
};

// const deposit = {
//     type: 'account/deposit',
//     payload: 10,
// }

export const deposit = amount => ({
  type: 'account/deposit',
  payload: amount,
});

const rootReduser = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);
