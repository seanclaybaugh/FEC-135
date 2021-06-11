import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getQtyList from './helpers/getQtyList';

const Select = styled.select`
  width: 70px;
  height: 35px;
  background: #fff;
  color: #000;
  padding-left: 5px;
  font-size: 14px;
  border: solid 1px #000;
  margin-left: 10px;
  text-align-last: center;

  :disabled {
    background: #f7f7f7;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

function Quantity({ selectedSku, currentStyle, updateQty }) {
  const [qtyAvailable, setQtyAvailable] = useState(0);

  useEffect(() => {
    const qty = selectedSku === '' ? 0 : currentStyle.skus[selectedSku].quantity;
    setQtyAvailable(qty);
  }, [selectedSku]);

  const options = qtyAvailable > 0 ? getQtyList(qtyAvailable) : ['---'];

  const [qtySelected, setQtySelected] = useState(null);
  const [skuSelected, setSkuSelected] = useState('');

  useEffect(() => {
    if (selectedSku > 0) {
      setSkuSelected(selectedSku);
    }
    if (!qtySelected) {
      setQtySelected(1);
    }
  }, [selectedSku]);

  useEffect(() => {
    updateQty(qtySelected);
  }, [skuSelected]);

  function handleChange(e) {
    const value = Number(e.target.value);
    setQtySelected(value);
    updateQty(value);
  }

  const isActive = qtyAvailable > 0 ? null : true;

  return (
    <div>
      <Select onChange={handleChange} disabled={isActive}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </Select>
    </div>
  );
}

export default Quantity;
