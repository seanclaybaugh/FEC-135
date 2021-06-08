import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const OuterContainer = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

function StylesContainer({ styles, currentStyle, updateCurrentStyle }) {
  return (
    <OuterContainer>
      <h6>{currentStyle.name}</h6>
      <InnerContainer>
        {styles.map((style, index) => {
          return <StyleThumbnail style={style}
                                 key={index}
                                 currentStyle={currentStyle}
                                 updateCurrentStyle={updateCurrentStyle} />
        })}
      </InnerContainer>
    </OuterContainer>
  )
}

export default StylesContainer;