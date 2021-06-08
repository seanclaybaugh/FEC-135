import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 500px;
`;

function MainView({ currentPhoto }) {
  return (
    <div>
      <Img src={currentPhoto.url} />
    </div>
  )
}

export default MainView;
