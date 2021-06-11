import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SizesContainer from './SizesContainer';
import Quantity from './Quantity';

const StyledSizesContainer = styled.div`
  border-bottom: 2px solid #e2e2e2;
`;

const ContainerSubheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const QtyDropdownContainer = styled.div`
  margin-bottom: 20px;
`;

function SizeQtyContainer({ currentStyle, updateCartSku, updateCartQty }) {
  const [selectedSku, setSelectedSku] = useState('');
  const [selectedQty, setSelectedQty] = useState(null);

  function updateSelectedSku(sku) {
    setSelectedSku(sku);
  }

  useEffect(() => {
    setSelectedQty(null);
  }, [currentStyle]);

  function updateQty(qty) {
    setSelectedQty(qty);
  }

  useEffect(() => {
    updateCartQty(selectedQty);
  }, [selectedQty]);

  return (
    <StyledSizesContainer>
      <SizesContainer currentStyle={currentStyle}
                      updateSelectedSku={updateSelectedSku}
                      updateCartSku={updateCartSku} />
      <ContainerSubheader>
        <div>
          <h5>QTY</h5>
        </div>
      </ContainerSubheader>
      <QtyDropdownContainer>
        <Quantity selectedSku={selectedSku}
                  currentStyle={currentStyle}
                  updateQty={updateQty} />
      </QtyDropdownContainer>
    </StyledSizesContainer>
  );
}

export default SizeQtyContainer;
