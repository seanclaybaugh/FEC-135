import React, { useState } from 'react';
import styled from 'styled-components';

const StyledIndicator = styled.div`
  width: 15px;
  height: 15px;
  margin: 2px;
  background-color: ${props => props.bgColor};
  border-radius: 50px;
  transition: background-color 0.5s ease;
  :hover {
    cursor: pointer;
  }
`;

// const Img = styled.img`
//   width: 75px;
// `;


function ThumbnailBottom({ index, currentPhotoIndex, photo, updateSelectedIndex }) {
  function handleClick() {
    updateSelectedIndex(index)
  }

  return (
    <StyledIndicator onClick={handleClick}
                     bgColor={index === currentPhotoIndex ? '#27231F' : '#E9EAEC'}>
      {/* <Img src={photo.thumbnail_url} /> */}
    </StyledIndicator>
  )
}

export default ThumbnailBottom;
