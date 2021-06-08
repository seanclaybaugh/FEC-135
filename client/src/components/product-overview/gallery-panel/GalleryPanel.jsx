import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';
import ThumbnailNav from './ThumbnailNav';

const Panel = styled.div`
  flex-grow: 2;
  order: 1;
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function GalleryPanel({currentStyle}) {
  let url = !currentStyle ? '' : currentStyle.photos[0].url;

  return (
    <Panel>
      <Container>
        <Gallery currentStyle={currentStyle} />
        <ThumbnailNav currentStyle={currentStyle} />
      </Container>
    </Panel>
  )
}

export default GalleryPanel;