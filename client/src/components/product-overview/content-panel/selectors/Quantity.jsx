import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import SelectedQtyContext from '../contexts/SelectedQtyContext';
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

function Quantity() {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { selectedSku } = useContext(SelectedSkuContext);
  const { setSelectedQty } = useContext(SelectedQtyContext);
  const [qtyAvailable, setQtyAvailable] = useState(0);

  useEffect(() => {
    const qty = selectedSku ? currentStyle.skus[selectedSku].quantity : 0;
    setQtyAvailable(qty);
    setSelectedQty(1);
  }, [selectedSku]);

  const options = qtyAvailable > 0 ? getQtyList(qtyAvailable) : ['---'];

  function handleChange(e) {
    const value = Number(e.target.value);
    setSelectedQty(value);
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
