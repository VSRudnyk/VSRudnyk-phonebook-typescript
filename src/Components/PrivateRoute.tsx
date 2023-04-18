import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/authSelectors';
import { ReactElement } from 'react';

export interface RoutesPropsType {
  children: ReactElement;
  redirectTo?: string;
}

export const PrivateRoute = ({
  redirectTo = '/login',
  children,
}: RoutesPropsType) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
