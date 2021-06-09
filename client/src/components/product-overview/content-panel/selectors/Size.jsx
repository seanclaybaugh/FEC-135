import React from 'react';
import styled from 'styled-components';
// import Quantity from './Quantity';

const Button = styled.button`
  margin: 20px 2.5px;
  background-color: #E9EAEC;
  color: #000;
  border: solid 1px #E9EAEC;
  padding: 5px;
  width: 70px;
  height: 40px;

  :hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

function Size({ sku, quantity, size, updateSizeSelection }) {
  const status = quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK';

  function handleClick() {
    updateSizeSelection({
      size: size,
      sku: sku,
      status: status
    })
  }

  return (
    <div>
      <Button sku={sku}
              quantity={quantity}
              onClick={handleClick}>{size}</Button>
      {/* <Quantity /> */}
    </div>
  )
}

export default Size;

