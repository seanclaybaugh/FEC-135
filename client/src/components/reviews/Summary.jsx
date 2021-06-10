import React, { useState, useEffect } from 'react';
import ratingHelper from './helpers/ratingHelper';
import percentageHelper from './helpers/percentageHelper';
import SumRatingDistItem from './SumRatingDistItem';
import getRatingDistArray from './helpers/getRatingDistArr';
import characteristicsHelper from './helpers/characteristicsHelper';
import CharacteristicItem from './CharacteristicItem';

function Summary({metaData}) {
  let numRate = 0;
  let percentage = 0;
  let distArray = [];
  let chars = [];
  if (metaData.ratings) {
    numRate = ratingHelper(metaData.ratings);
    percentage = percentageHelper(metaData.recommended);
    distArray = getRatingDistArray(metaData.ratings);
    chars = characteristicsHelper(metaData.characteristics);
  }
  return (
    <>
      <h3> Meta Review Summary</h3>
      <div>{`${percentage}% of people recommend this product`}</div>
      <div>{`Rating: ${numRate} - ADD STARBAR`}</div>
      <div>
        <div>Ratings Distribution</div>
        {distArray.map((val) => <SumRatingDistItem percent={val[0]} id={val[1]} key={val[1]} />)}
      </div>
      <div>
        <div>Relative Sizes and Comfort Rating</div>
        {chars.map((val) => <CharacteristicItem char={val[0]} key={val[1]} per={val[2]} />)}
      </div>

    </>
  );
}

export default Summary;

/*
Component build out:

1. Rating # with Starbar
2.

*/
