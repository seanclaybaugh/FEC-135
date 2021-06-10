import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import ThumbnailBottom from './ThumbnailBottom';

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

const Dialog = styled.dialog`
  position: absolute;
  z-index: 100;
  border: solid 1px #e2e2e2;
  padding: 5px;
`;

const StyledImageModal = styled.img`
  width: 1200px;
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
    opacity: 75%;
  }
`;

const StyledIndicatorContainer = styled.div`
  width: 200px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function MainView({ selectedIndex, currentStyle }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [modal, setModal] = useState(false);

  function nextPhoto() {
    setCurrentPhotoIndex(prevIndex => prevIndex + 1)
  }

  function prevPhoto() {
    setCurrentPhotoIndex(prevIndex => prevIndex - 1)
  }

  function updateSelectedIndex(index) {
    setCurrentPhotoIndex(index)
  }

  function viewModal() {
    setModal(prevState => !prevState)
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
          <StyledImage src={currentStyle.photos[currentPhotoIndex].url}
                       onClick={viewModal} />
          {modal && (
            <Dialog open>
              <StyledImageModal src={currentStyle.photos[currentPhotoIndex].url}
                                onClick={viewModal} />
            </Dialog>
          )}
          <StyledArrowContainer onClick={nextPhoto} position="90%" >
            {currentPhotoIndex !== currentStyle.photos.length - 1 &&  <MdKeyboardArrowRight />}
          </StyledArrowContainer>
        </StyledImageContainer>
        <StyledIndicatorContainer>
          {currentStyle.photos.map((photo, index) => {
            return <ThumbnailBottom updateSelectedIndex={updateSelectedIndex}
                                    key={index}
                                    index={index}
                                    currentPhotoIndex={currentPhotoIndex}
                                    photo={photo} />
          })}
        </StyledIndicatorContainer>
      </MainViewContainer>
    </>
  )
}

export default MainView;
