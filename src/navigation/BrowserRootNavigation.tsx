import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // import '~/languages/i18n';
import withSuspense from '~/hocs/withSuspense';
import './style.scss';
import { Box } from '~/components/core';
// const Box = lazy(() => {
//   import { Box } from '~/components/core';
//   return Box;
// });
const ErrorBoundary = lazy(() => import('~/containers/ErrorBoundary'));
const Home = lazy(() => import('~/pages/Home'));
const Dashboard = lazy(() => import('~/pages/Dashboard'));
const Settings = lazy(() => import('~/pages/Settings'));
const Profile = lazy(() => import('~/pages/Profile'));
const Notifications = lazy(() => import('~/pages/Notifications'));
const NotFound = lazy(() => import('~/pages/NotFound'));
const NavBar = lazy(() => import('~/containers/NavBar'));
const TopBar = lazy(() => import('~/containers/TopBar'));

function BrowserRootNavigation() {
  return (
    <BrowserRouter>
      <Box className='main-container'>
        <ErrorBoundary>
          <NavBar />
          <Box className='body-container'>
            <TopBar />
            <Box className='content-container'>
              <Routes>
                <Route path='/'>
                  <Route index element={withSuspense(Home)} />
                  <Route path='dashboard' element={withSuspense(Dashboard)} />
                  <Route path='settings' element={withSuspense(Settings)} />
                  <Route path='profile' element={withSuspense(Profile)} />
                  <Route path='notifications' element={withSuspense(Notifications)} />
                  <Route path='404' element={withSuspense(NotFound)} />
                  <Route path='*' element={withSuspense(NotFound)} />
                </Route>
              </Routes>
            </Box>
          </Box>
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  );
}

export default BrowserRootNavigation;
