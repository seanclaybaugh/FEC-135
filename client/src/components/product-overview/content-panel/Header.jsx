import React from 'react';
import styled from 'styled-components';

const PriceContainer = styled.div`
display: flex;
flex-direction: row;
`;

const NewPrice = styled.div`
color: red;
`;

function Header({ name, description, price, currentStyle }) {
  const currentPrice = !currentStyle ? price : currentStyle.original_price;
  const salePrice = !currentStyle.sale_price ? null : currentStyle.sale_price;
  let newPriceDisplay;

  const OriginalPrice = styled.div`
    text-decoration: ${!salePrice ? 'none' : 'line-through'};
  `;

  if (salePrice) {
    newPriceDisplay = <NewPrice>{'$' + parseInt(salePrice)}</NewPrice>;
  } else {
    newPriceDisplay = '';
  }

  return (
    <div>
      <h3>{name}</h3>
      <PriceContainer>
        <OriginalPrice>{'$' + parseInt(currentPrice)}</OriginalPrice> {newPriceDisplay}
      </PriceContainer>
      <h6>DESCRIPTION</h6>
      <p>{description}</p>
    </div>
  )
}

export default Header;