import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
