import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import PreviewStyleContext from '../contexts/PreviewStyleContext';
import PhotoIndexContext from '../contexts/PhotoIndexContext';
import ThumbnailLeft from './ThumbnailLeft';

const ThumbnailSlideWrapper = styled.div`
  order: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 750px;
  margin-top: 30px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
`;

const StyledArrowContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;

function ThumbnailLeftNav() {
  const { previewStyle } = useContext(PreviewStyleContext);
  const { currentPhotoIndex, setCurrentPhotoIndex } = useContext(PhotoIndexContext);
  const sliderRef = useRef();

  function scrollSliderUp() {
    sliderRef.current.scrollTop -= 90;
  }

  function scrollSliderDown() {
    sliderRef.current.scrollTop += 90;
  }

  return (
    <ThumbnailSlideWrapper>
      <StyledArrowContainer onClick={scrollSliderUp}>
        <GoChevronUp />
      </StyledArrowContainer>
      <Slider ref={sliderRef}>
        {previewStyle.photos.map((photo, index) => (
          <ThumbnailLeft
            key={index}
            index={index}
            photo={photo}
          />
        ))}
      </Slider>
      <StyledArrowContainer onClick={scrollSliderDown}>
        <GoChevronDown />
      </StyledArrowContainer>
    </ThumbnailSlideWrapper>
  );
}

export default ThumbnailLeftNav;
