import React from 'react';
import { RouterProvider } from 'react-router-dom'; // import '~/languages/i18n';
import router from './router';

function RootNavigation() {
  return <RouterProvider router={router} />;
}

export default RootNavigation;
