import React, { useState } from 'react';
import styled from 'styled-components';
import Size from './Size';

const OuterContainer = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

function SizesContainer({ currentStyle }) {
  let skus = [];

  for (const sku in currentStyle.skus) {
    skus.push({
      sku: sku,
      details: currentStyle.skus[sku]
    });
  }

  const [selectedSize, setSelectedSize] = useState('SELECT SIZE')

  return (
    <OuterContainer>
      <h6>{selectedSize}</h6>
      <InnerContainer>
        {skus.map((item, index) => {
          return <Size key={index} sku={item.sku} quantity={item.details.quantity} size={item.details.size} />
        })}
      </InnerContainer>
    </OuterContainer>
  )
}

export default SizesContainer;