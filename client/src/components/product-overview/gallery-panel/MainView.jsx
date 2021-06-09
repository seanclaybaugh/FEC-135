import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const forwardImageAnimation = keyframes`
  0% {
    transform: translateX();
  }
  100% {

  }
`

const MainViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 700px;
  :hover {
    cursor: zoom-in;
  }
`;

const StyledArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #27231F;
  width: 50px;
  height: 100%;
  left: ${props => props.position};
  :hover {
    cursor: pointer;
    background-color: #E9EAEC;
    opacity: 75%;
  }
`;

const StyledIndicatorContainer = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledIndicator = styled.div`
  width: 15px;
  height: 15px;
  margin: 2px;
  background-color: ${props => props.bgColor};
  border-radius: 50px;
`;


function MainView({ selectedIndex, currentStyle }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  function nextPhoto() {
    setCurrentPhotoIndex(prevIndex => prevIndex + 1)
  }

  function prevPhoto() {
    setCurrentPhotoIndex(prevIndex => prevIndex - 1)
  }

  useEffect(() => {
    setCurrentPhotoIndex(0)
  }, [currentStyle])

  useEffect(() => {
    if (!selectedIndex) {
      setCurrentPhotoIndex(0)
    } else {
      setCurrentPhotoIndex(selectedIndex)
    }
  }, [selectedIndex])

  return (
    <>
      <MainViewContainer>
        <StyledImageContainer>
          <StyledArrowContainer onClick={prevPhoto} position="10%" >
            {currentPhotoIndex !== 0 && <MdKeyboardArrowLeft />}
          </StyledArrowContainer>
          <StyledImage src={currentStyle.photos[currentPhotoIndex].url} />
          <StyledArrowContainer onClick={nextPhoto} position="90%" >
            {currentPhotoIndex !== currentStyle.photos.length - 1 &&  <MdKeyboardArrowRight />}
          </StyledArrowContainer>
        </StyledImageContainer>
        <StyledIndicatorContainer>
          {currentStyle.photos.map((photo, index) => {
            return <StyledIndicator key={index} bgColor={index === currentPhotoIndex ? '#27231F' : '#E9EAEC'} />
          })}
        </StyledIndicatorContainer>
      </MainViewContainer>
    </>
  )
}

export default MainView;
