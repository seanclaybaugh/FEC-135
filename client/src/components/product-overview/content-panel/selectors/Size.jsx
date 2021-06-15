import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import MissingSkuContext from '../contexts/MissingSkuContext';

const Button = styled.button`
  margin: 20px 2.5px;
  background-color: ${(props) => props.bgColor};
  color: #000;
  border: solid 1px ${(props) => props.borderColor};
  padding: 5px;
  width: 70px;
  height: 40px;
  transition: background-color 0.5s ease;

  :hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }

  :disabled {
    background-color: #f7f7f7;
    color: #b3b4b5;

    :hover {
      cursor: not-allowed;
    }
  }
`;

function Size({ sku, size }) {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { selectedSku, setSelectedSku } = useContext(SelectedSkuContext);
  const { isMissingSku, setIsMissingSku } = useContext(MissingSkuContext);
  console.log(currentStyle);
  const isInStock = currentStyle.skus[sku].quantity > 0;

  function handleClick() {
    setSelectedSku(sku);
    setIsMissingSku(false);
  }

  return (
    <>
      <Button
        sku={sku}
        onClick={handleClick}
        bgColor={sku === selectedSku ? '#fff' : '#E9EAEC'}
        borderColor={sku === selectedSku ? '#000' : '#E9EAEC'}
        disabled={isInStock ? null : 'active'}>{size}
      </Button>
    </>
  );
}

export default Size;
