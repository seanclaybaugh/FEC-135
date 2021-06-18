import React, { useContext } from 'react';
import styled from 'styled-components';
import { PhotoIndexContext } from '../contexts';

const StyledIndicator = styled.div`
  width: 15px;
  height: 15px;
  margin: 2px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50px;
  transition: background-color 0.5s ease;
  :hover {
    cursor: pointer;
  }
`;

function ThumbnailBottom({ index, imageRefs }) {
  const { currentPhotoIndex, setCurrentPhotoIndex } = useContext(PhotoIndexContext);

  function handleClick() {
    setCurrentPhotoIndex(index);
    imageRefs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'center',
    });
  }

  return (
    <StyledIndicator
      onClick={handleClick}
      bgColor={index === currentPhotoIndex ? '#27231F' : '#E9EAEC'}
    />
  );
}

export default ThumbnailBottom;
