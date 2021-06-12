import React from 'react';
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

function SizeQtyContainer() {
  return (
    <StyledSizesContainer>
      <SizesContainer />
      <ContainerSubheader>
        <div>
          <h5>QTY</h5>
        </div>
      </ContainerSubheader>
      <QtyDropdownContainer>
        <Quantity />
      </QtyDropdownContainer>
    </StyledSizesContainer>
  );
}

export default SizeQtyContainer;
