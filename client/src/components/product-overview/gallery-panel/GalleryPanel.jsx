import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoIndexContext from '../contexts/PhotoIndexContext';
import ThumbnailLeftNav from './ThumbnailLeftNav';
import MainView from './MainView';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function GalleryPanel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <PhotoIndexContext.Provider value={{ currentPhotoIndex, setCurrentPhotoIndex }}>
      <GalleryContainer>
        <MainView />
        <ThumbnailLeftNav />
      </GalleryContainer>
    </PhotoIndexContext.Provider>
  );
}

export default GalleryPanel;
