import React, { useState } from 'react';
import styled from 'styled-components';
import ThumbnailNav from './ThumbnailNav';
import MainView from './MainView';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function Gallery({ currentStyle }) {
  const [selectedMain, setSelectedMain] = useState(currentStyle.photos[0]);

  function updateGalleryView(index) {
    setSelectedMain(currentStyle.photos[index])
  }

  return (
    <Container>
      <MainView currentPhoto={selectedMain} />
      <ThumbnailNav currentStyle={currentStyle}
                    updateGalleryView={updateGalleryView} />
    </Container>
  )
}

export default Gallery;