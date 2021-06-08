import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 2.5px;
  background-color: #EEEDE7;
  color: #868B8E;
  border: solid 1px #EEEDE7;
  padding: 5px;
  width: 40px;

  :hover {
    cursor: pointer;
  }
`;

function Size({ sku, quantity, size }) {
  return (
    <div>
      <Button sku={sku} quantity={quantity}>{size}</Button>
    </div>
  )
}

export default Size;

