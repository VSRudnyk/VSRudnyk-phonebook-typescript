import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../src/Components/Layout';
import { useFetchCurrentUserQuery } from '../src/redux/authAPI';
import { PrivateRoute } from '../src/Components/PrivateRoute';
import { PublicRoute } from './Components/PublicRout';
import { useSelector } from 'react-redux';
import authSelectors from '../src/redux/authSelectors';

const ContactsView = lazy(
  () => import('../src/views/ContactsView/ContactsView')
);
const RegisterView = lazy(
  () => import('../src/views/RegisterView/RegisterView')
);
const LoginView = lazy(() => import('../src/views/LoginView/LoginView'));

export const App = () => {
  const token = useSelector(authSelectors.getToken);
  useFetchCurrentUserQuery(null, { skip: !token });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
