import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice'; // Adjust the import path as necessary

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // The LoginForm component is a form that allows users to log in by entering their username and password.

  const handleSubmit = event => {
    event.preventDefault();
    // Here you would typically handle the login logic, e.g., API call
    const form = event.currentTarget;
    // For demonstration, we log the values to the console
    console.log('Form submitted');
    console.log('Username:', form.login.value);
    console.log('Password:', form.password.value);
    // Dispatch the login action with the form values
    dispatch(login({ login: form.login.value, password: form.password.value }));
    navigate('/dashboard', { replace: true });
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="login" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
