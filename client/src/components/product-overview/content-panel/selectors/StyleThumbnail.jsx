import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 5px;
  border: solid 2px #fff;
  box-shadow: ${props => props.boxShadow};
`;

const Img = styled.img`
  position: absolute;
  top: 25%;
  left: 25%;
  height: auto;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);

  :hover {
    cursor: pointer;
  }
`;

function StyleThumbnail({ style, index, currentStyle, updateCurrentStyle, previewCurrentStyle, revertCurrentStyle }) {
  const [prevSelectedStyle, setPrevSelectedStyle] = useState(currentStyle);

  function handleClick() {
    updateCurrentStyle(style);
  }

  function handleMouseOver() {
    previewCurrentStyle(style)
  }

  function handleMouseLeave() {
    revertCurrentStyle()
  }

  return (
    <Container onClick={handleClick}
               onMouseOver={handleMouseOver}
               onMouseLeave={handleMouseLeave}
               boxShadow={index === currentStyle.style_id ? '0 0 0 1px #000' : '0 0 3px #888'}>
      <Img src={style.photos[2].thumbnail_url}
           alt={style.name} />
    </Container>
  )
}

export default StyleThumbnail;