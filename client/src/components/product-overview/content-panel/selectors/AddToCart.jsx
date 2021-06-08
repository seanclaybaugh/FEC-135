import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
`;

const Button = styled.button`
  background-color: #27231F;
  color: #fff;
  margin: 2.5px;
  border: solid 1px #27231F;
  padding: 5px;
  width: 200px;
  line-height: 40px;

  :hover {
    cursor: pointer;
    background-color: #000;
    border: solid 1px #000;
  }
`;

function AddToCart() {
  return (
    <Container>
      <Button>ADD TO BAG</Button>
    </Container>
  )
}

export default AddToCart;