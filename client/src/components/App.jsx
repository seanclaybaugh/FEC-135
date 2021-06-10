import React, { useState } from 'react';
import ReviewsIndex from './reviews/reviewsIndex';

function App() {
  return (
    <>
      <h1>Products N' Stuff</h1>
      <div>
        <ReviewsIndex productId={25178} />
      </div>
    </>
  );
}

export default App;
