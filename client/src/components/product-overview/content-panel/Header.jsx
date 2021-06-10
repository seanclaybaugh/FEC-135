import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  border-bottom: 2px solid #e2e2e2;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PriceContainer = styled.div`
  order: 2;
  margin-left: 100px;
`;

const PriceTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const OriginalPrice = styled.div`
  line-height: 100%;
  font-size: 1.2em;
  text-decoration: ${props => !props.currentStyle.sale_price? 'none' : 'line-through'};
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

function Header({ name, category, description, price, currentStyle }) {
  const currentPrice = !currentStyle ? price : currentStyle.original_price;
  const salePrice = !currentStyle.sale_price ? null : currentStyle.sale_price;
  let newPriceDisplay;

  if (salePrice) {
    newPriceDisplay = <NewPrice>{'$' + parseInt(salePrice)}</NewPrice>;
  } else {
    newPriceDisplay = '';
  }

  return (
    <HeaderContainer>
      <h5>{'COLLECTIONS > ' + category}</h5>
      <HeaderTextContainer>
        <div>
          <h2>{name}</h2>
        </div>
        <PriceContainer>
          <PriceTextContainer>
            <OriginalPrice currentStyle={currentStyle}>{'$' + parseInt(currentPrice)}</OriginalPrice> {newPriceDisplay}
          </PriceTextContainer>
        </PriceContainer>
      </HeaderTextContainer>
      <h5>DESCRIPTION</h5>
      <p>{description}</p>
    </HeaderContainer>
  )
}

export default Header;