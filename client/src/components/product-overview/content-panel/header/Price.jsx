import React, { useContext } from 'react';
import styled from 'styled-components';
import { CurrentStyleContext } from '../../contexts';

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  order: 2;
`;

const OriginalPrice = styled.div`
  text-decoration: ${(props) => (
    !props.currentStyle.sale_price ? 'none' : 'line-through'
  )};
  text-align: center;
`;

const NewPrice = styled.div`
  color: red;
  margin-left: 20px;
  text-align: center;
`;

function Price({ price }) {
  const { currentStyle } = useContext(CurrentStyleContext);
  const currentPrice = !currentStyle ? price : parseInt(currentStyle.original_price, 10);
  const salePrice = !currentStyle.sale_price ? null : parseInt(currentStyle.sale_price, 10);
  let newPriceDisplay;

  if (salePrice) {
    newPriceDisplay = <NewPrice data-testid="sale">{`$${salePrice}`}</NewPrice>;
  } else {
    newPriceDisplay = '';
  }

  return (
    <StyledPriceContainer>
      <OriginalPrice data-testid="original" currentStyle={currentStyle}>{`$${currentPrice}`}</OriginalPrice>
      {newPriceDisplay}
    </StyledPriceContainer>
  );
}

export default Price;
