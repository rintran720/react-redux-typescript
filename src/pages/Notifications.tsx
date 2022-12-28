import React, { lazy } from 'react';
// import Notifications from '~/modules/notification/Notifications';
const Notifications = lazy(() => import('~/modules/notification/Notifications'));

export default function NotificationsPage() {
  return <Notifications />;
}
