import React, { lazy, Suspense, useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import SelectedQtyContext from '../contexts/SelectedQtyContext';
const CartModal = lazy(() => import('./CartModal'));

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #e7e7e7;
  border-right: 2px solid #e7e7e7;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  background: transparent;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #e2e2e2;
  margin-top: 20px;
`;

const Container = styled.form`
  margin: 10px;
  align-contents: center;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  margin: 2.5px;
  border: solid 1px #000;
  padding: 5px;
  display: inline-block;
  width: 390px;
  height: 60px;
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
    top: 3px;
  }

  :hover {
    cursor: pointer;
    background-color: #555555;
    border: solid 1px #555555;
    letter-spacing: .09rem;
  }
`;

function AddToCart({ product, handleMissingSku }) {
  const { selectedSku } = useContext(SelectedSkuContext);
  const { selectedQty } = useContext(SelectedQtyContext);
  const [items, setItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMissingSku, setIsMissingSku] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsMissingSku(false);
  }, [selectedSku]);

  function addToCart() {
    setIsLoading(true);
    return axios.post('api/cart', { sku_id: selectedSku });
  }

  function revealModal() {
    setShowModal(true);
  }

  function addAllItems(qty) {
    const promises = [];

    for (let i = 0; i < qty; i++) {
      promises.push(addToCart());
    }

    Promise.all(promises)
      .then((responses) => (
        Promise.all(responses.map((response) => response))
      ))
      .then((data) => {
        setItems(data.length);
        setIsLoading(false);
        revealModal();
      })
      .catch(() => setIsError(true));
  }

  function handleClick(e) {
    e.preventDefault();
    if (!selectedSku) {
      setIsMissingSku(true);
      handleMissingSku(true);
    } else {
      addAllItems(selectedQty);
      revealModal();
    }
  }

  return (
    <OuterContainer data-testid="checkout-container">
      <Container onSubmit={handleClick} name="checkout-form">
        <Button>{isLoading ? <Spinner /> : 'ADD TO BAG'}</Button>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        {!isMissingSku
          && selectedSku
          && (
            <CartModal
              showModal={showModal}
              setShowModal={setShowModal}
              product={product}
              items={items}
              isError={isError}
            />
          )}
      </Suspense>
    </OuterContainer>
  );
}

export default AddToCart;
