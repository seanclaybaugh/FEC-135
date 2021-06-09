import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThumbnailNav from './ThumbnailNav';
import MainView from './MainView';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

function Gallery({ currentStyle }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function updateGalleryView(index) {
    setSelectedIndex(index)
  }

  useEffect(() => {
    setSelectedIndex(0)
  }, [currentStyle])

  return (
    <Container>
      <MainView selectedIndex={selectedIndex} currentStyle={currentStyle} />
      <ThumbnailNav currentStyle={currentStyle}
                    updateGalleryView={updateGalleryView} />
    </Container>
  )
}

export default Gallery;