import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../contexts/CurrentStyleContext';
import ThumbnailBottom from './ThumbnailBottom';

const StyledIndicatorContainer = styled.div`
  width: 200px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function ThumbnailBottomNav() {
  const { currentStyle } = useContext(CurrentStyleContext);

  return (
    <StyledIndicatorContainer>
      {currentStyle.photos.map((photo, index) => (
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
