import React, { LazyExoticComponent, Suspense } from 'react';
import { Spinner } from '~/components/core';

export default function withSuspense<T = any>(Component: LazyExoticComponent<() => JSX.Element>, props?: T) {
  return (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );
}
