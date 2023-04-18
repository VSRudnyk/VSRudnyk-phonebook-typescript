import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation/Navigation';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
