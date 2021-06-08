import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThumbnailNav from './ThumbnailNav';
import MainView from './MainView';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function Gallery({ currentStyle }) {
  const [selectedMain, setSelectedMain] = useState(currentStyle.photos[0]);
  const [selectedStyle, setSelectedStyle] = useState(currentStyle);

  function updateGalleryView(index) {
    setSelectedMain(currentStyle.photos[index])
  }

  useEffect(() => {
    setSelectedMain(currentStyle.photos[0])
  }, [currentStyle])

  return (
    <Container>
      <MainView currentPhoto={selectedMain} />
      <ThumbnailNav currentStyle={currentStyle}
                    updateGalleryView={updateGalleryView} />
    </Container>
  )
}

export default Gallery;