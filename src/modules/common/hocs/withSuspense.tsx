import React, { LazyExoticComponent, Suspense } from 'react';
import { Spinner } from '~/components/core';

export default function withSuspense(Component: LazyExoticComponent<() => JSX.Element>, props?: any) {
  return (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );
}
