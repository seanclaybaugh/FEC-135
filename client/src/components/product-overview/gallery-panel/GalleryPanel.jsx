import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';

const Panel = styled.div`
  order: 1;
  margin: 50px;
`;

function GalleryPanel({ currentStyle }) {

  return (
    <Panel>
      <Gallery currentStyle={currentStyle} />
    </Panel>
  )
}

export default GalleryPanel;