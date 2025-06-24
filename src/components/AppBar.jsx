import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  // Access the isLoggedIn state from the Redux store
  return (
    <header
      style={{
        padding: '10px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #ccc',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#333',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
        ':hover': {
          backgroundColor: '#e0e0e0',
        },
        ':active': {
          backgroundColor: '#d0d0d0',
        },
        ':focus': {
          outline: '2px solid #007bff',
          outlineOffset: '2px',
        },
        ':visited': {
          color: '#555',
        },
      }}
    >
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        {!isLoggedIn && <Link to="/login">Login</Link>}

        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
// The AppBar component serves as the top navigation bar of the application, providing links to Home, About, and Login pages.
