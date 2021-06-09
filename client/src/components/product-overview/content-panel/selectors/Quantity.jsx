import React from 'react';
import styled from 'styled-components';
import getQtyList from './helpers/getQtyList';
// import QuantityItem from './QuantityItem';

function Quantity({ selectedSku, selectedStyle }) {
  let quantity = 0;
  let options = ['-'];

  if (selectedSku) {
    quantity = selectedStyle.skus[selectedSku].quantity;
    options = getQtyList(quantity);
  }

  console.log(options);

  return (
    <div>
      <select>

      </select>
    </div>
  )
}

export default Quantity;