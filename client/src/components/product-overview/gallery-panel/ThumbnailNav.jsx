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

function ThumbnailNav({ currentStyle, updateGalleryView }) {
return (
  <ThumbnailList>
    <ThumbnailContainer>
      {currentStyle.photos.map((photo, index) => {
        return <Thumbnail key={index}
                          index={index}
                          photo={photo}
                          updateGalleryView={updateGalleryView} />
      })}
    </ThumbnailContainer>
  </ThumbnailList>
  )
}

export default ThumbnailNav;