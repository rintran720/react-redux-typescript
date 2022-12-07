import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '~/pages/Home';
import NotificationsPage from '../pages/Notifications';
import ProfilePage from '../pages/Profile';
import SettingsPage from '../pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/notifications',
    element: <NotificationsPage />,
  },
]);

export default router;
