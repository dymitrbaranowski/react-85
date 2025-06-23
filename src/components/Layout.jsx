import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

// import { useSelector, useDispatch } from 'react-redux';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// The Layout component serves as a wrapper for the main content of the application.
