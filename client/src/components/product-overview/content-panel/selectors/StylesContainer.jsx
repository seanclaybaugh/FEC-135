import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const OuterContainer = styled.div`
  border-bottom: 2px solid #e2e2e2;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`;

function StylesContainer({ styles, currentStyle, updateCurrentStyle, previewCurrentStyle, revertCurrentStyle }) {
  return (
    <OuterContainer>
      <h5>{currentStyle.name.toUpperCase()}</h5>
      <InnerContainer>
        {styles.map((style, index) => {
          return <StyleThumbnail style={style}
                                 key={index}
                                 index={style.style_id}
                                 currentStyle={currentStyle}
                                 updateCurrentStyle={updateCurrentStyle}
                                 previewCurrentStyle={previewCurrentStyle}
                                 revertCurrentStyle={revertCurrentStyle} />
        })}
      </InnerContainer>
    </OuterContainer>
  );
}

export default StylesContainer;
