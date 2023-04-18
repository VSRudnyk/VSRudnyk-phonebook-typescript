import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/authSelectors';
import { ReactElement } from 'react';

interface RoutesPropsType {
  children: ReactElement;
  restricted: boolean;
}

export const PublicRoute = ({
  children,
  restricted = false,
}: RoutesPropsType) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
