import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Link, Paragraph } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';

function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer>
        <Paragraph>
          Created by <b>Mykola Markhotskyi</b>
        </Paragraph>
      </Footer>
      <Toaster />
    </>
  );
}

export default SharedLayout;
