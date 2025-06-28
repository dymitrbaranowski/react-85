import { useSelector, useDispatch } from 'react-redux';
import { update, getClicksValue } from '../redux/clickSlice';

console.log(update(5));

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClicksValue);

  return (
    <div>
      <h1>Welcome to the Redux Click Counter App</h1>
      <p> Click Me! {numberOfClicks}</p>
      <button onClick={() => dispatch(update(5))}>Add 5 Clicks!</button>
      <br />
      <button onClick={() => dispatch(update(10))}>Add 10 Clicks!</button>
      <br />
      <button onClick={() => dispatch(update(20))}>Add 20 Clicks!</button>
      <br />
      <p>Check the console to see the click count.</p>
    </div>
  );
};
