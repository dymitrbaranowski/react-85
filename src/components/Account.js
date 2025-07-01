import { useDispatch, useSelector } from 'react-redux';

export const Account = () => {
  const dispatch = useDispatch();
  // This is a placeholder for the deposit action, you can use it to dispatch a deposit
  const balance = useSelector(state => state.account.balance);
  // This is a placeholder for the balance, you can use it to display the balance in the UI
  return (
    <div>
      <div>Balance: ${balance}</div>
      <button
        onClick={() => dispatch({ type: 'account/deposit', payload: 10 })}
      >
        Deposit
      </button>
      <button>Withdraw</button>
    </div>
  );
};
