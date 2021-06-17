import React, { useState } from 'react';
import ProductQuestions from './product-questions/ProductQuestions';
import ProductOverview from './product-overview/ProductOverview';
import ReviewsIndex from './reviews/reviewsIndex';
import styled from 'styled-components';

function App() {
  const productId = 25167;

  return (
    <>
      <ProductOverview productId={productId} />
      <ReviewsIndex productId={productId} />
      <ProductQuestions />
    </>
  );
}

export default App;
