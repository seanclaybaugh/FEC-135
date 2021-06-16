import React, { useState } from 'react';
import ProductOverview from './product-overview/ProductOverview';
import ReviewsIndex from './reviews/reviewsIndex';
import styled from 'styled-components';



function App() {
  return (
    <>

      {/* <h1>What up my Quadratic Quokkas Q.Q</h1> */}
      <ProductOverview />
      <ReviewsIndex productId={25178} />

    </>
  );
}

export default App;


// 25178 - high quality - lots of reviews test item

// 25173 - 1 low quality review

//