import React, { useContext } from 'react';
import styled from 'styled-components';
import PreviewStyleContext from '../../contexts/PreviewStyleContext';
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

function StylesContainer({ styles }) {
  const { previewStyle } = useContext(PreviewStyleContext);

  return (
    <OuterContainer>
      <StyleNameContainer>
        <StyleNameTitleDiv><h5>STYLE</h5></StyleNameTitleDiv>
        <div><h5>{previewStyle.name}</h5></div>
      </StyleNameContainer>
      <ThumbnailContainer>
        {styles.map((style, index) => (
          <StyleThumbnail
            key={index}
            index={style.style_id}
            style={style}
          />
        ))}
      </ThumbnailContainer>
    </OuterContainer>
  );
}

export default StylesContainer;
