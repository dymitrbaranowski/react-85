export const accountReduser = (state = { balance: 500 }, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};

export const deposit = amount => ({
  type: 'account/deposit',
  payload: amount,
});

export const withdraw = amount => ({
  type: 'account/withdraw',
  payload: amount,
});
