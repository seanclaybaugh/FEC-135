import React, { useState } from 'react';
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

function StyleThumbnail({ style, index, currentStyle, updateCurrentStyle }) {
  const [prevSelectedStyle, setPrevSelectedStyle] = useState(currentStyle);

  function handleClick() {
    setPrevSelectedStyle(style);
    updateCurrentStyle(style);
  }

  function handleMouseEnter() {
    updateCurrentStyle(style)
  }

  function handleMouseLeave() {
    updateCurrentStyle(prevSelectedStyle)
  }

  return (
    <Container boxShadow={index === currentStyle.style_id ? '0 0 0 1px #000' : '0 0 3px #888'}>
      <Img src={style.photos[2].thumbnail_url}
           alt=""
           onClick={handleClick}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave} />
    </Container>
  )
}

export default StyleThumbnail;