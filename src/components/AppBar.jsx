import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header
      style={{
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#333',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '20px',
        textDecoration: 'none',
      }}
    >
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};
