import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const OuterContainer = styled.div`
  border-bottom: 2px solid #e2e2e2;
`;

const StyleNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyleNameTitleDiv = styled.div`
  margin-right: 20px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`;

function StylesContainer({ styles, currentStyle, updateCurrentStyle, previewCurrentStyle, revertCurrentStyle }) {
  const {name} = currentStyle;

  return (
    <OuterContainer>
      <StyleNameContainer>
        <StyleNameTitleDiv>
          <h5>STYLE</h5>
        </StyleNameTitleDiv>
        <div>
          <h5>{name}</h5>
        </div>
      </StyleNameContainer>
      <ThumbnailContainer>
        {styles.map((style, index) => (
          <StyleThumbnail key={index}
                          index={style.style_id}
                          style={style}
                          currentStyle={currentStyle}
                          updateCurrentStyle={updateCurrentStyle}
                          previewCurrentStyle={previewCurrentStyle}
                          revertCurrentStyle={revertCurrentStyle} />
        ))}
      </ThumbnailContainer>
    </OuterContainer>
  );
}

export default StylesContainer;
