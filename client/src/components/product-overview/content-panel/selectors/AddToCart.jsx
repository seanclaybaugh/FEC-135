import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CartModal from './CartModal';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #e2e2e2;
  margin-top: 20px;
`;

const Container = styled.form`
  margin: 10px;
`;

const Button = styled.button`
  background-color: #27231F;
  color: #fff;
  margin: 2.5px;
  border: solid 1px #27231F;
  padding: 5px;
  display: inline-block;
  width: 200px;
  line-height: 40px;
  letter-spacing: 1px;
  position: relative;
  -webkit-transition: all 0.3s;
     -moz-transition: all 0.3s;
          transition: all 0.3s;

  :after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
         transition: all 0.3s;
  }

  :before {
    speak: none;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  :active {
    background: #000;
    top: 2px;
  }

  :hover {
    cursor: pointer;
    background-color: #000;
    border: solid 1px #000;
  }
`;

function AddToCart({ product, currentStyle, sku, qty }) {
  const [items, setItems] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isMissingSku, setIsMissingSku] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsMissingSku(false);
  }, [sku]);

  function addToCart() {
    return axios.post('http://localhost:3000/api/cart', { sku_id: sku });
  }

  function addAllItems(quantity) {
    const promises = [];

    for (let i = 0; i < quantity; i++) {
      promises.push(addToCart());
    }

    Promise.all(promises)
      .then((responses) => (
        Promise.all(responses.map((response) => response))
      ))
      .then((data) => {
        setItems(data.length);
        revealModal();
      })
      .then(() => {
        // clear items
      })
      .catch(() => setIsError(true));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (sku === '') {
      setIsMissingSku(true);
    } else {
      addAllItems(qty);
      revealModal();
    }
  }

  function revealModal() {
    setShowModal(true);
  }

  return (
    <OuterContainer>
      <Container onSubmit={handleSubmit}>
        <Button>ADD TO BAG</Button>
        {isMissingSku ? <h5>Please select a size</h5> : <h5> </h5>}
      </Container>
      {sku ? (
        <CartModal showModal={showModal}
                   setShowModal={setShowModal}
                   currentStyle={currentStyle}
                   product={product}
                   items={items}
                   sku={sku}
                   qty={qty}
                   isError={isError} />
      ) : null}

    </OuterContainer>
  );
}

export default AddToCart;
