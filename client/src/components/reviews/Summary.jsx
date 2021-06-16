import React, { useState, useEffect } from 'react';
import ratingHelper from './helpers/ratingHelper';
import percentageHelper from './helpers/percentageHelper';
import SumRatingDistItem from './SumRatingDistItem';
import getRatingDistArray from './helpers/getRatingDistArr';
import characteristicsHelper from './helpers/characteristicsHelper';
import CharacteristicItem from './CharacteristicItem';
import styled from 'styled-components';
import StarsContainer from './StarContainer';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: .8em;
  font-weight: 200;
  margin: 0px 0px 1em 1em;
  width: 13em;
  `

const CharColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
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
    <SummaryContainer>
      <h3> Summary</h3>
      <h4>{`${percentage}% of people recommend this product`}</h4>
      <h3>{`Rating: ${numRate}`}</h3>
      <StarsContainer rating={numRate}/>
      <div>
        <h4>Rating Breakdown</h4>
        {distArray.map((val) => <SumRatingDistItem percent={val[0]} id={val[1]} key={val[1]} />)}
      </div>
      <div>
        <h4>Characteristics</h4>
        <CharColumn>
        {chars.map((val) => <CharacteristicItem char={val[0]} key={val[1]} per={val[2]} />)}
        </CharColumn>
      </div>
      </SummaryContainer>
    </>
  );
}

export default Summary;

/*
Component build out:

1. Rating # with Starbar
2.

*/
