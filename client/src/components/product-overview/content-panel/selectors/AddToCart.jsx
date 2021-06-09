import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.form`
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

function AddToCart({ sku, qty }) {

  function handleSubmit(e) {
    e.preventDefault()
    addItem()
  }

  function addItem() {
    axios.post('http://localhost:3000/api/cart', {
      sku_id: sku
    })
      .then(results => console.log(results))
      .catch(err => console.log(err))
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Button>ADD TO BAG</Button>
    </Container>
  )
}

export default AddToCart;