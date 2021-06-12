import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../contexts/CurrentStyleContext';
import ThumbnailLeft from './ThumbnailLeft';

const ThumbnailList = styled.div`
  order: -1;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: auto;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

function ThumbnailLeftNav() {
  const { currentStyle } = useContext(CurrentStyleContext);

  return (
    <ThumbnailList>
      <ThumbnailContainer>
        {currentStyle.photos.map((photo, index) => (
          <ThumbnailLeft
            key={index}
            index={index}
            photo={photo}
          />
        ))}
      </ThumbnailContainer>
    </ThumbnailList>
  );
}

export default ThumbnailLeftNav;
