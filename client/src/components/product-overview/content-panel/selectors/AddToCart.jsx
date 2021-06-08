import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #000;
  color: #fff;
`;

function AddToCart() {
  return (
    <div>
      <Button>ADD TO CART</Button>
    </div>
  )
}

export default AddToCart;