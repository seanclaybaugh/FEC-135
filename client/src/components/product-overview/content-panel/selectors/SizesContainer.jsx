import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Size from './Size';
import Quantity from './Quantity';

const OuterContainer = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextBoxSize = styled.div`
  margin: 0 10px;
  width: 100px;
`;

const TextBoxStock = styled.div`
  margin: 0 20px;
`;

const TextBoxSku = styled.div`
  margin-left: 100px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px 20px 10px;
`;

function SizesContainer({ currentStyle }) {
  let skus = [];

  for (const sku in currentStyle.skus) {
    skus.push({
      sku: sku,
      details: currentStyle.skus[sku]
    });
  }

  const [selectedStyle, setSelectedStyle] = useState(currentStyle);
  const [selectedSize, setSelectedSize] = useState('Select a size');
  const [selectedSku, setSelectedSku] = useState('');
  const [inStock, setStockStatus] = useState('');

  useEffect(() => {
    setSelectedSize('Select a size')
    setSelectedSku('')
    setStockStatus('')
  }, [currentStyle])

  function updateSizeSelection(sku) {
    const size = currentStyle.skus[sku].size;
    const quantity = currentStyle.skus[sku].quantity;
    const status = quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK';

    setSelectedSize(size)
    setSelectedSku(sku)
    setStockStatus(status)
  }

  return (
    <OuterContainer>
      <TextContainer>
        <div>
          <h5>{'SIZE'}</h5>
        </div>
        <TextBoxSize>
          <h5>{selectedSize}</h5>
        </TextBoxSize>
        <TextBoxStock>
          <h5>{inStock}</h5>
        </TextBoxStock>
        <TextBoxSku>
          <h5>{selectedSku > 0 ? '# ' + selectedSku : ''}</h5>
        </TextBoxSku>
      </TextContainer>
      <InnerContainer>
        {skus.map((item, index) => {
          return <Size key={index}
                       sku={item.sku}
                       size={item.details.size}
                       updateSizeSelection={updateSizeSelection}
                       isSelected={selectedSku === item.sku} />
        })}
      </InnerContainer>
      <TextContainer>
        <div>
          <h5>{'QTY'}</h5>
        </div>
      </TextContainer>
      <InnerContainer>
        <Quantity selectedSku={selectedSku}
                  selectedStyle={selectedStyle} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default SizesContainer;