import React, { useEffect, useRef, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import SelectedQtyContext from '../contexts/SelectedQtyContext';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fff;
  width: 700px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  z-index: 10;
  border: solid 1px #000;
  position: relative;
`;

const ModalHeader = styled.div`
  grid-column: 1 / 5;
  text-align: center;
`;

const HeaderText = styled.div`
  font-size: 32px;
  margin-top: 20px;
`;

const ModalImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
`;

const ModalImg = styled.img`
  grid-column: 1 / 2;
  width: 200px;
  height: 200px;
  object-fit: cover;
  background: #000;
`;

const ModalProductDetails = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-right: solid 1px #000;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  grid-column: 3 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin: 0 20px 30px 20px;

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: solid 1px #141414;
    margin: 10px 5px 3px 5px;
    width: 100%;

    :hover {
      cursor: pointer;
      background: #fff;
      color: #000;
      border: solid 1px #000;
    }
  }
`;

const StyledTable = styled.table`
  width: 100%;
  font-size: 16px;

  td:last-child {
    text-align: right;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  :hover {
    opacity: 50%;
  }
`;

function CartModal({ showModal, setShowModal, product }) {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { selectedSku, setSelectedSku } = useContext(SelectedSkuContext);
  const { selectedQty, setSelectedQty } = useContext(SelectedQtyContext);

  const price = currentStyle.sale_price || currentStyle.original_price;
  const name = product;
  const style = currentStyle.name;
  const imgUrl = currentStyle.photos[0].url;
  let size;

  if (currentStyle.skus[selectedSku]) {
    size = currentStyle.skus[selectedSku].size;
  }

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback((e) => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  function resetCart() {
    setSelectedSku(null);
    setSelectedQty(null);
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalContentWrapper showModal={showModal}>
              <ModalHeader>
                {<HeaderText>Your items have been added!</HeaderText>}
              </ModalHeader>
              <ModalImgWrapper>
                <ModalImg src={imgUrl} alt="product image" />
              </ModalImgWrapper>
              <ModalProductDetails>
                {`${name} // ${style} // ${size}`}
              </ModalProductDetails>
              <ModalContent>
                <h4>YOUR BAG</h4>
                  {selectedQty > 1 ? `${selectedQty} items` : `${selectedQty} item`} <br />
                <StyledTable>
                  <tbody>
                    <tr>
                        <td>Total Product Cost:</td>
                        <td></td>
                        <td>${(price * selectedQty).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Total Delivery Cost:</td>
                        <td></td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td>Total:</td>
                        <td></td>
                        <td>${(price * selectedQty).toFixed(2)}</td>
                      </tr>
                  </tbody>
                </StyledTable>
                <button onClick={resetCart}>VIEW BAG</button>
                <button onClick={resetCart}>CHECKOUT</button>
              </ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
            </ModalContentWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default CartModal;
