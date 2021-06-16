import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//onclick create modal window w full size img
const Thumbnail = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 80px;
  height: 80px;
  margin-right: 1em;
  object-fit: cover;
  &:hover {
    border-radius: 6px;
    border-color: black;
  }
`

function reviewPhotoItem({ url }) {
  return (
    <Thumbnail src={url}></Thumbnail>
  );
}

export default reviewPhotoItem;
