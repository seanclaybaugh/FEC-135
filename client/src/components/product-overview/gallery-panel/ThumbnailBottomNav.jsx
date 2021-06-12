import React, { useContext } from 'react';
import styled from 'styled-components';
import PreviewStyleContext from '../contexts/PreviewStyleContext';
import ThumbnailBottom from './ThumbnailBottom';

const StyledIndicatorContainer = styled.div`
  width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function ThumbnailBottomNav() {
  const { previewStyle } = useContext(PreviewStyleContext);

  return (
    <StyledIndicatorContainer>
      {previewStyle.photos.map((photo, index) => (
        <ThumbnailBottom
          key={index}
          index={index}
          photo={photo}
        />
      ))}
    </StyledIndicatorContainer>
  );
}

export default ThumbnailBottomNav;
