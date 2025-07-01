import { useDispatch, useSelector } from 'react-redux';
import { deposit } from '../redux/store';
export const Account = () => {
  const dispatch = useDispatch();
  // This is a placeholder for the deposit action, you can use it to dispatch a deposit
  const balance = useSelector(state => state.account.balance);
  // This is a placeholder for the balance, you can use it to display the balance in the UI
  return (
    <div>
      <div>Balance: ${balance}</div>
      <button
        onClick={() => dispatch(deposit(10))}
        style={{ marginRight: '10px' }}
      >
        Deposit
      </button>
      <button>Withdraw</button>
    </div>
  );
};
