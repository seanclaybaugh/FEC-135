import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  line-height: 100%;
  font-size: 1.2em;
  margin-left: 5px;
  height: 100px;
  line-height: 100px;
`;

function Title({ name }) {
  return (
    <TitleContainer>
      {name}
    </TitleContainer>
  );
}

export default Title;
