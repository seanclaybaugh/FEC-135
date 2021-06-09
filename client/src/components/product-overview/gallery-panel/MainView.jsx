import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const forwardImageAnimation = keyframes`

`

const MainViewContainer = styled.div`
  width: 800px;
`;

const StyledImageContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledArrowContainer = styled.div`
  font-size: 40px;
  color: #27231F;
  width: 50px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50%;
  top: ${props => props.topPosition};
  :hover {
    cursor: pointer;
    background-color: #E9EAEC;
  }
`;

function MainView({ currentPhoto, currentStyle }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  function nextPhoto() {
    setCurrentPhotoIndex(prevIndex => prevIndex + 1)
  }

  function prevPhoto() {
    setCurrentPhotoIndex(prevIndex => prevIndex - 1)
  }

  return (
    <MainViewContainer>
      {(currentPhotoIndex !== 0) && (
        <StyledArrowContainer onClick={prevPhoto} topPosition="10%" >
          <MdKeyboardArrowUp />
        </StyledArrowContainer>
      )}
      <StyledImageContainer>
        <StyledImage src={currentStyle.photos[currentPhotoIndex].url} />
      </StyledImageContainer>
      {(currentPhotoIndex !== currentStyle.photos.length - 1) && (
        <StyledArrowContainer onClick={nextPhoto} topPosition="90%" >
          <MdKeyboardArrowDown />
        </StyledArrowContainer>
      )}


    </MainViewContainer>
  )
}

export default MainView;
