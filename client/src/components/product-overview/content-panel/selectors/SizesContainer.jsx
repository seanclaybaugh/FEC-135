import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import MissingSkuContext from '../contexts/MissingSkuContext';
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

const shake = keyframes`
  0% {
    left: -5px;
  }
  100% {
    right: -5px;
  }
`;

const SizeErrorDiv = styled.div`
  width: 200px;
  margin-right: 50px;
  color: red;
  position: relative;
  animation: ${shake} 0.1s linear;
  animation-iteration-count: 3;
`;

const StyledSizesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
`;

function SizesContainer() {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { selectedSku } = useContext(SelectedSkuContext);
  const { isMissingSku, setIsMissingSku } = useContext(MissingSkuContext);
  const skus = [];

  for (const sku in currentStyle.skus) {
    skus.push({
      sku,
      details: currentStyle.skus[sku],
    });
  }

  let size,
      quantity,
      status;

  if (currentStyle.skus[selectedSku]) {
    size = currentStyle.skus[selectedSku].size;
    quantity = currentStyle.skus[selectedSku].quantity;
    status = quantity > 0 ? 'IN STOCK' : 'OUT OF STOCK';
  }

  return (
    <>
      <ContainerSubheader>
        <div>
          <h5>SIZE</h5>
        </div>
        <SelectedSizeInfoContainer>
          {!isMissingSku
            ? (
              <SizeInfoDiv>
                <h5>{size || 'Select a size'}</h5>
              </SizeInfoDiv>
            )
            : (
              <SizeErrorDiv>
                <h5>Please select a size</h5>
              </SizeErrorDiv>
            )}
          <SizeInfoDiv>
            <h5>{status || null}</h5>
          </SizeInfoDiv>
          <SizeInfoDiv>
            <h5>{selectedSku ? `#${selectedSku}` : null}</h5>
          </SizeInfoDiv>
        </SelectedSizeInfoContainer>
      </ContainerSubheader>
      <StyledSizesContainer>
        {skus.map((item, index) => (
          <Size
            key={index}
            sku={item.sku}
            size={item.details.size}
          />
        ))}
      </StyledSizesContainer>
    </>
  );
}

export default SizesContainer;
