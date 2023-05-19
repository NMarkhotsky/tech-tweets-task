import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './Layout.styled';
import { Toaster } from 'react-hot-toast';

function Layout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading.....</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
}

export default Layout;
