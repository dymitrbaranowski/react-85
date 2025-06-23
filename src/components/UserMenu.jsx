import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const login = useSelector(state => state.user.login);
  // Access the user state from the Redux store
  return (
    <div>
      {login}
      <button>Log Out</button>
    </div>
  );
};
// The UserMenu component serves as a navigation menu for the user, providing links to Home, About, and Login pages.
