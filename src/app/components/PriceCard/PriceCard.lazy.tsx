import React, { lazy, Suspense } from 'react';

const LazyPriceCard = lazy(() => import('./PriceCard'));

const PriceCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPriceCard {...props} />
  </Suspense>
);

export default PriceCard;
