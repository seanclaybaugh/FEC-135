import React from 'react';
import styled from 'styled-components';
import SizesContainer from './SizesContainer';
import QtyContainer from './QtyContainer';

const StyledSizesContainer = styled.div`
  border-bottom: 2px solid #e2e2e2;
`;

function SizeQtyContainer() {
  return (
    <StyledSizesContainer>
      <SizesContainer />
      <QtyContainer />
    </StyledSizesContainer>
  );
}

export default SizeQtyContainer;
