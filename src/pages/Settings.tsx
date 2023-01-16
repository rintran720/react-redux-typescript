import React, { lazy } from 'react';
const Settings = lazy(() => import('~/modules/setting/Settings'));

export default function SettingsPage() {
  return <Settings />;
}
