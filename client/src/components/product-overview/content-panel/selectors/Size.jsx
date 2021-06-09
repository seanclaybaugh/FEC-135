import React from 'react';
import styled from 'styled-components';
// import Quantity from './Quantity';

const Button = styled.button`
  margin: 20px 2.5px;
  background-color: ${props => props.bgColor};
  color: #000;
  border: solid 1px ${props => props.borderColor};
  padding: 5px;
  width: 70px;
  height: 40px;
  transition: background-color 0.5s ease;

  :hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;

function Size({ sku, quantity, size, updateSizeSelection, isSelected }) {
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
              onClick={handleClick}
              bgColor={isSelected ? '#fff' : '#E9EAEC'}
              borderColor={isSelected ? '#000' : '#E9EAEC'}>{size}</Button>
      {/* <Quantity /> */}
    </div>
  )
}

export default Size;

