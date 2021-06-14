import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  font-size: 1.2em;
  margin-left: 5px;
`;

function Title({ name }) {
  return (
    <TitleContainer>
      {name}
    </TitleContainer>
  );
}

export default Title;
