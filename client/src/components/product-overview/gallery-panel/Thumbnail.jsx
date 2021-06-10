import React, { useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.button`
  padding: 0;
  border: none;
  background: none;
  margin: 5px;

  :hover {
    display: block;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 65px;
  height: 100px;
  object-fit: cover;
`;

function Thumbnail({ index, photo, updateGalleryView }) {
  function handleClick() {
    updateGalleryView(index)
  }

  return (
    <ListItem onClick={handleClick} >
      <Img src={photo.thumbnail_url} />
    </ListItem>
  )
}

export default Thumbnail;
