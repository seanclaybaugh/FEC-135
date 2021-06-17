import React, { lazy, Suspense, useState } from 'react';
import ProductOverview from './product-overview/ProductOverview';
import Spinner from './product-overview/spinner/LoadingSpinner';

const ProductQuestions = lazy(() => import('./product-questions/ProductQuestions'));
const ProductReviews = lazy(() => import('./reviews/reviewsIndex'));



  const productId = 25171;
  const [overviewLoaded, setOverviewLoaded] = useState(false);

  function loadNextComponents(val) {
    setOverviewLoaded(val);
  }


  return (
    <>
      <ProductOverview loadNextComponents={loadNextComponents} productId={productId} />
      <Suspense fallback={<Spinner />}>
        {overviewLoaded
        && (
          <>
            <ProductReviews productId={productId} />
            <ProductQuestions productId={productId} />
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
