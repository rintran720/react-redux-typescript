import React, { lazy } from 'react';
// import NotFound from '~/modules/redirect/NotFound';
const NotFound = lazy(() => import('~/modules/redirect/NotFound'));

export default function NotFoundPage() {
  return <NotFound />;
}
