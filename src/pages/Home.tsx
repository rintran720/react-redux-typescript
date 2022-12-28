import React, { lazy } from 'react';
// import Home from '~/modules/home/Home';
const Home = lazy(() => import('~/modules/home/Home'));

export default function HomePage() {
  return <Home />;
}
