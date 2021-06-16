import React, { useState } from 'react';
import ProductQuestions from './product-questions/ProductQuestions';
import ProductOverview from './product-overview/ProductOverview';
import ReviewsIndex from './reviews/reviewsIndex';
import styled from 'styled-components';

function App() {
  return (
    <>
      <ProductOverview />
      <ReviewsIndex productId={25178} />
      <ProductQuestions />
    </>
  );
}

export default App;
