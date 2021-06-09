import React, { useState, useEffect } from 'react';
import ratingHelper from './helpers/ratingHelper';
import percentageHelper from './helpers/percentageHelper';
function Summary(props) {
  let numRate = 0;
  let percentage = 0;
  if (props.metaData.ratings) {
    numRate = ratingHelper(props.metaData.ratings);
    percentage = percentageHelper(props.metaData.recommended);
  }
  return (
    <>
      <h3> Meta Review Summary</h3>
      <div>{`${percentage}% of people recommend this product`}</div>
      <div>{`Rating: ${numRate} - ADD STARBAR`}</div>
      <div>Ratings Distribution</div>
      <div>Relative Size bars</div>
    </>
  );
}

export default Summary;

/*
Component build out:

1. Rating # with Starbar
2.

*/
