import React, { useState } from 'react';
import ReviewsIndex from './reviews/reviewsIndex';
import styled from 'styled-components';



function App() {
  return (
    <>
      <h2>Reviews</h2>
      <div>
        <ReviewsIndex productId={25173} />
      </div>

    </>
  );
}

export default App;


// 25178 - high quality - lots of reviews test item

// 25173 - 1 low quality review

//