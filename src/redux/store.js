import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  account: {
    balance: 500,
  },
};

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

const rootReducer = (state = initialState, action) => {
  return state;
};
const enchancer = devToolsEnhancer();

export const store = createStore(rootReducer, enchancer);
