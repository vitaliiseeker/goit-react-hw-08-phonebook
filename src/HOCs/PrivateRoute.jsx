import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return <>{token ? children : <Navigate to="/login" />}</>;
};
