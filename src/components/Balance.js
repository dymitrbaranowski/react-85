import { useSelector } from 'react-redux';

export const Balance = () => {
  const balance = useSelector(state => state.account.balance);

  return (
    <div>
      <h2>Balance</h2>
      <p>Your current balance is ${balance}</p>
    </div>
  );
};
