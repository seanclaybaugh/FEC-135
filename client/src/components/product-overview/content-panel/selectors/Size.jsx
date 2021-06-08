import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 20px 2.5px;
  background-color: #E9EAEC;
  color: #000;
  border: solid 1px #E9EAEC;
  padding: 5px;
  width: 50px;

  :hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
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

