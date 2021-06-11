import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThumbnailNav from './ThumbnailNav';
import MainView from './MainView';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function GalleryPanel({ currentStyle }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function updateGalleryView(index) {
    setSelectedIndex(index)
  }

  useEffect(() => {
    setSelectedIndex(0)
  }, [currentStyle])

  return (
    <GalleryContainer>
      <MainView selectedIndex={selectedIndex} currentStyle={currentStyle} />
      <ThumbnailNav currentStyle={currentStyle}
                    updateGalleryView={updateGalleryView} />
    </GalleryContainer>
  )
}

export default GalleryPanel;