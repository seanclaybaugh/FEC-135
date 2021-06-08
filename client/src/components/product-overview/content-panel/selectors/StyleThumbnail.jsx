import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 5px;
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

function StyleThumbnail({ style, index, updateCurrentStyle }) {

  function handleClick() {
    updateCurrentStyle(style)
  }

  return (
    <Container>
      <Img src={style.photos[0].thumbnail_url} alt="" onClick={handleClick}/>
    </Container>
  )
}

export default StyleThumbnail;