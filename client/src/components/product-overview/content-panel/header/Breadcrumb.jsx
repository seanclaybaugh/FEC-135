import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 12px;
`;

function Breadcrumb({ category }) {
  return <StyledHeader>{`COLLECTIONS > ${category}`}</StyledHeader>;
}

export default Breadcrumb;
