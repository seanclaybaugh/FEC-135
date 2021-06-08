import React from 'react';
import styled from 'styled-components';
import Size from './Size';

const Container = styled.div`
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

  return (
    <Container>
      {skus.map((item, index) => {
        return <Size key={index} sku={item.sku} quantity={item.details.quantity} size={item.details.size} />
      })}
    </Container>
  )
}

export default SizesContainer;