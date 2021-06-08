import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const ThumbnailList = styled.div`
  order: -1;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function ThumbnailNav({ currentStyle }) {
return (
  <ThumbnailList>
    <ThumbnailContainer>
      {currentStyle.photos.map((photo, index) => {
        return <Thumbnail key={index} photo={photo} />
      })}
    </ThumbnailContainer>
  </ThumbnailList>
  )
}

export default ThumbnailNav;