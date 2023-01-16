import React, { lazy } from 'react';
// import Profile from '~/modules/profile/Profile';
const Profile = lazy(() => import('~/modules/profile/Profile'));

export default function ProfilePage() {
  return <Profile />;
}
