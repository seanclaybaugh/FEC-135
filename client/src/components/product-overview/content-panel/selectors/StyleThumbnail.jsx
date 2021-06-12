import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 5px;
  border: solid 2px #fff;
  box-shadow: ${(props) => props.boxShadow};
`;

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  top: 25%;
  left: 50%;
  height: 80px;
  width: 80px;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);

  :hover {
    cursor: pointer;
  }
`;

function StyleThumbnail({ style, index }) {
  const { currentStyle, setCurrentStyle } = useContext(CurrentStyleContext);
  const [originalStyle, setOriginalStyle] = useState(currentStyle);

  function handleClick() {
    setCurrentStyle(style);
  }

  function handleMouseOver() {
    setOriginalStyle(currentStyle);
    setCurrentStyle(style);
  }

  function handleMouseLeave() {
    setCurrentStyle(originalStyle);
  }

  return (
    <Container onClick={handleClick}
               onMouseOver={handleMouseOver}
               onMouseLeave={handleMouseLeave}
               boxShadow={index === currentStyle.style_id ? '0 0 0 1px #000' : '0 0 3px #888'}>
      <Img src={style.photos[0].thumbnail_url}
           alt={style.name} />
    </Container>
  );
}

export default StyleThumbnail;
