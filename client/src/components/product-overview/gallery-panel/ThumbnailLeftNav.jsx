import React, { useContext } from 'react';
import styled from 'styled-components';
import PreviewStyleContext from '../contexts/PreviewStyleContext';
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
  const { previewStyle } = useContext(PreviewStyleContext);

  return (
    <ThumbnailList>
      <ThumbnailContainer>
        {previewStyle.photos.map((photo, index) => (
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
