import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 500px;
`;

function Gallery({ currentStyle }) {
  let url = !currentStyle ? '' : currentStyle.photos[0].url;

  return (
    <div>
      <Img src={url} />
    </div>
  )
}

export default Gallery;