import React from 'react';

export const App = () => {
  return (
    <div>
      <h1>Welcome to the Redux Click Counter App</h1>
      <p>Click the button below to increment the counter.</p>
      <button onClick={() => console.log('Button clicked!')}>Click Me!</button>
      <p>Check the console to see the click count.</p>
    </div>
  );
};
