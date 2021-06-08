import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

function StylesContainer({ styles, currentStyle, updateCurrentStyle }) {
  return (
    <div>
      <h6>{currentStyle.name}</h6>
      <Container>
        {styles.map((style, index) => {
          return <StyleThumbnail style={style} key={index} updateCurrentStyle={updateCurrentStyle} />
        })}
      </Container>
    </div>
  )
}

export default StylesContainer;