import React, { useState, useEffect } from 'react';

function Summary(props) {
  function ratingHelper(rating) {
    let count = 0;
    let sum = 0;
    const keys = Object.keys(rating);
    const vals = Object.values(rating);
    for (let i = 0; i < keys.length; i + 1) {
      sum += Number(keys[i]) * Number(vals[i]);
      count += Number(vals[i]);
    }
    return sum / count;
  }

  let rateNum = 0;
  if (props.metaData.ratings !== undefined) {
    //rateNum = ratingHelper(props.metaData.ratings);
    console.log(props.metaData.ratings);
  }
  return (
    <>
      <h3> Meta Review Summary</h3>
      <div>% of people recommend this product</div>
      <div>{`Rating: ${rateNum} - ADD STARBAR`}</div>
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
