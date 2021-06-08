import React from 'react';
import styled from 'styled-components';

const ListItem = styled.button`
  :hover {
    display: block;
    opacity: 1;
    visibility: visible;
  }
`;

function Thumbnail({ photo }) {
  return (
    <ListItem>
      <img src={photo.thumbnail_url} />
    </ListItem>
  )
}

export default Thumbnail;
