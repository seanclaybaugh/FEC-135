import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h5`
  margin-bottom: 10px;
`;

const StyledParagraph = styled.div`
  font-size: 14px;
`;

function Description({ description }) {
  return (
    <>
      <StyledHeader>DESCRIPTION</StyledHeader>
      <StyledParagraph>{description}</StyledParagraph>
    </>
  );
}

export default Description;
