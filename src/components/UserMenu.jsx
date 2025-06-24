import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  // Access the user state from the Redux store
  return (
    <div>
      {login}
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};
// The UserMenu component serves as a navigation menu for the user, providing links to Home, About, and Login pages.
