import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CurrentStyleContext from '../contexts/CurrentStyleContext';
import PhotoIndexContext from '../contexts/PhotoIndexContext';
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
  object-fit: cover;
  width: 700px;
  height: 1000px;
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

const StyledImageModalContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1%;
  overflow: hidden;
`;

const StyledImageModal = styled.img`
  width: 1200px;
  height: auto;
  border-radius: 1%;
  transform: scale(1.0);
  transition: transform 0.2s;

  :hover {
    cursor: zoom-out;
    transform: scale(2.5);
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
  left: ${(props) => props.position};
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

function MainView() {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentPhotoIndex, setCurrentPhotoIndex } = useContext(PhotoIndexContext);
  const [modal, setModal] = useState(false);

  function nextPhoto() {
    setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
  }

  function prevPhoto() {
    setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
  }

  function viewModal() {
    setModal((prevState) => !prevState);
  }

  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [currentStyle]);

  return (
    <>
      <MainViewContainer>
        <StyledImageContainer>
          <StyledArrowContainer
            onClick={prevPhoto}
            position="10%"
          >
            {currentPhotoIndex !== 0 && <MdKeyboardArrowLeft />}
          </StyledArrowContainer>
          <StyledImage
            src={currentStyle.photos[currentPhotoIndex].url}
            onClick={viewModal}
          />
          {modal && (
          <Dialog open>
            <StyledImageModalContainer>
              <StyledImageModal
                src={currentStyle.photos[currentPhotoIndex].url}
                onClick={viewModal}
              />
            </StyledImageModalContainer>
          </Dialog>
          )}
          <StyledArrowContainer
            onClick={nextPhoto}
            position="90%"
          >
            {currentPhotoIndex !== currentStyle.photos.length - 1 && <MdKeyboardArrowRight />}
          </StyledArrowContainer>
        </StyledImageContainer>
        <StyledIndicatorContainer>
          {currentStyle.photos.map((photo, index) => (
            <ThumbnailBottom
              key={index}
              index={index}
              photo={photo}
            />
          ))}
        </StyledIndicatorContainer>
      </MainViewContainer>
    </>
  );
}

export default MainView;
