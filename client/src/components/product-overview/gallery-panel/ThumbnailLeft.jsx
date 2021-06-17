import React, { useContext } from 'react';
import styled from 'styled-components';
import PhotoIndexContext from '../contexts/PhotoIndexContext';

const ListItem = styled.button`
  padding: 0;
  border: none;
  background: none;
  margin: 2px;

  :hover {
    display: block;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 90px;
  object-fit: cover;
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
`;

function ThumbnailLeft({ index, photo, forwardedRef }) {
  const { currentPhotoIndex, setCurrentPhotoIndex } = useContext(PhotoIndexContext);
  const isSelected = index === currentPhotoIndex;

  function handleClick() {
    setCurrentPhotoIndex(index);
  }

  return (
    <ListItem onClick={handleClick} aria-label="left-image-thumbnail">
      <Img
        src={photo.thumbnail_url}
        padding={isSelected ? '2px' : '1px'}
        border={isSelected ? 'solid 1px #000' : 'none'}
        alt="photo-thumbnail"
        ref={forwardedRef}
      />
    </ListItem>
  );
}

export default ThumbnailLeft;
