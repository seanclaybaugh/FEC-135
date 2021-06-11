import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Size from './Size';

const ContainerSubheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SelectedSizeInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  width: auto;
`;

const SizeInfoDiv = styled.div`
  width: 100px;
  margin-right: 50px;
`;

const StyledSizesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
`;

function SizesContainer({ currentStyle, updateSelectedSku, updateCartSku }) {
  const skus = [];

  for (const sku in currentStyle.skus) {
    skus.push({
      sku: sku,
      details: currentStyle.skus[sku]
    });
  }

  const [selectedSize, setSelectedSize] = useState('Select a size');
  const [selectedSku, setSelectedSku] = useState('');
  const [inStock, setStockStatus] = useState('');

  useEffect(() => {
    setSelectedSize('Select a size');
    setSelectedSku('');
    setStockStatus('');
  }, [currentStyle]);

  useEffect(() => {
    updateSelectedSku(selectedSku);
    updateCartSku(selectedSku);
  }, [selectedSize]);

  function updateSizeSelection(sku) {
    const {size} = currentStyle.skus[sku];
    const {quantity} = currentStyle.skus[sku];
    const status = quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK';

    setSelectedSize(size);
    setSelectedSku(sku);
    setStockStatus(status);
  }

  return (
    <>
      <ContainerSubheader>
        <div>
          <h5>SIZE</h5>
        </div>
        <SelectedSizeInfoContainer>
          <SizeInfoDiv>
            <h5>{selectedSize}</h5>
          </SizeInfoDiv>
          <SizeInfoDiv>
            <h5>{inStock}</h5>
          </SizeInfoDiv>
          <SizeInfoDiv>
            <h5>{selectedSku > 0 ? `#${selectedSku}` : ''}</h5>
          </SizeInfoDiv>
        </SelectedSizeInfoContainer>
      </ContainerSubheader>
      <StyledSizesContainer>
        {skus.map((item, index) => (
          <Size key={index}
                sku={item.sku}
                size={item.details.size}
                updateSizeSelection={updateSizeSelection}
                isSelected={selectedSku === item.sku} />
        ))}
      </StyledSizesContainer>
    </>
  );
}

export default SizesContainer;