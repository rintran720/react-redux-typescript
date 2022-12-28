import React, { lazy } from 'react';
// import Dashboard from '~/modules/dashboard/Dashboard';
const Dashboard = lazy(() => import('~/modules/dashboard/Dashboard'));

export default function DashboardPage() {
  return <Dashboard />;
}
