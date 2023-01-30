import React, { ComponentProps, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // import '~/languages/i18n';
import withSuspense from '~/hocs/withSuspense';
// import './style.scss';
import { Box } from '~/components/core';
import { styled } from '~/theme/core';

const ErrorBoundary = lazy(() => import('~/containers/ErrorBoundary'));
const Home = lazy(() => import('~/pages/Home'));
const Dashboard = lazy(() => import('~/pages/Dashboard'));
const Settings = lazy(() => import('~/pages/Settings'));
const Profile = lazy(() => import('~/pages/Profile'));
const Notifications = lazy(() => import('~/pages/Notifications'));
const NotFound = lazy(() => import('~/pages/NotFound'));
const NavBar = lazy(() => import('~/containers/NavBar'));
const TopBar = lazy(() => import('~/containers/TopBar'));

const PREFIX = 'App';
const classes = {
  root: `${PREFIX}-root`,
  body: `${PREFIX}-body`,
  content: `${PREFIX}-content`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    minWidth: '100wh',
    minHeight: '100vh',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
  },
  [`&.${classes.body}`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  [`&.${classes.content}`]: {
    flex: 1,
    width: '100%',
  },
}));

function RootNavigation() {
  return (
    <BrowserRouter>
      <StyledBox className={classes.root}>
        <ErrorBoundary>
          <NavBar />
          <StyledBox className={classes.body}>
            <TopBar />
            <StyledBox className={classes.content}>
              <Routes>
                <Route path='/'>
                  <Route index element={withSuspense<ComponentProps<typeof Home>>(Home, { name: 'John Smith' })} />
                  <Route path='dashboard' element={withSuspense(Dashboard)} />
                  <Route path='settings' element={withSuspense(Settings)} />
                  <Route path='profile' element={withSuspense(Profile)} />
                  <Route path='notifications' element={withSuspense(Notifications)} />
                  <Route path='404' element={withSuspense(NotFound)} />
                  <Route path='*' element={withSuspense(NotFound)} />
                </Route>
              </Routes>
            </StyledBox>
          </StyledBox>
        </ErrorBoundary>
      </StyledBox>
    </BrowserRouter>
  );
}

export default RootNavigation;
