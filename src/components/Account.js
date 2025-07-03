import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/accountSlice';
import { Balance } from './Balance';

export const Account = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  return (
    <div>
      <Balance />
      <input
        type="number"
        placeholder="Enter amount"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => dispatch(deposit(Number(value)))}
        style={{ marginRight: '10px', marginLeft: '10px' }}
      >
        Deposit
      </button>
      <button onClick={() => dispatch(withdraw(Number(value)))}>
        Withdraw
      </button>
    </div>
  );
};
