import { useState } from 'react';
import { useDispatch} from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectName} from 'redux/auth/authSelectors';
import { login } from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const name = useSelector(selectName);
  // const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // Notify.success(`Welcome ${name}, you have successfully authenticated.`);
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="email@example.com"
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          placeholder="password"
          required
        />
      </label>
      <button>Login</button>
    </form>
  );
};
