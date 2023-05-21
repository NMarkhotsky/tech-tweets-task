import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle';
import SharedLayout from './SharedLayout/SharedLayout';
import { ScrollToTopArrow } from './ScrollToTop/ScrollToTop';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ScrollToTopArrow />
      <GlobalStyle />
    </>
  );
};
