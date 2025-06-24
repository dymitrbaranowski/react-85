import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashboardPage = () => {
  useLogOutRedirect();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      {/* Add more dashboard content here */}
    </div>
  );
};
