import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  order: 2;
`;

const OriginalPrice = styled.div`
  line-height: 100%;
  font-size: 1.2em;
  text-decoration: ${(props) => (
    !props.currentStyle.sale_price ? 'none' : 'line-through'
  )};
  height: 100px;
  line-height: 100px;
  text-align: center;
`;

const NewPrice = styled.div`
  line-height: 100%;
  font-size: 1.2em;
  color: red;
  margin-left: 20px;
  height: 100px;
  line-height: 100px;
  text-align: center;
`;

function Price({ price }) {
  const { currentStyle } = useContext(CurrentStyleContext);
  const currentPrice = !currentStyle ? price : parseInt(currentStyle.original_price, 10);
  const salePrice = !currentStyle.sale_price ? null : parseInt(currentStyle.sale_price, 10);
  let newPriceDisplay;

  if (salePrice) {
    newPriceDisplay = <NewPrice>{`$${salePrice}`}</NewPrice>;
  } else {
    newPriceDisplay = '';
  }

  return (
    <StyledPriceContainer>
      <OriginalPrice currentStyle={currentStyle}>{`$${currentPrice}`}</OriginalPrice>
      {newPriceDisplay}
    </StyledPriceContainer>
  );
}

export default Price;
