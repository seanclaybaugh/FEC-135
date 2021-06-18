import React from 'react';
import styled from 'styled-components';
import Quantity from './Quantity';

const ContainerSubheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const QtyDropdownContainer = styled.div`
  margin-bottom: 20px;
`;

function QtyContainer() {
  return (
    <>
      <ContainerSubheader>
        <div><h5>QTY</h5></div>
      </ContainerSubheader>
      <QtyDropdownContainer>
        <Quantity />
      </QtyDropdownContainer>
    </>
  );
}

export default QtyContainer;
