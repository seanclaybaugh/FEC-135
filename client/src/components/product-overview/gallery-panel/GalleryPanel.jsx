import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 2;
  order: 1;
  margin: 20px;
`;

const Img = styled.img`
  width: 500px;
`;

function GalleryPanel({currentStyle}) {
  let url = !currentStyle ? '' : currentStyle.photos[0].url;

  return (
    <Container>
      <Img src={url} />
    </Container>
  )
}

export default GalleryPanel;