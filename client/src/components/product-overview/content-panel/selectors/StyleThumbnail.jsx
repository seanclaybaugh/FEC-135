import React, { useContext } from 'react';
import styled from 'styled-components';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import PreviewStyleContext from '../../contexts/PreviewStyleContext';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import SelectedQtyContext from '../contexts/SelectedQtyContext';
import MissingSkuContext from '../contexts/MissingSkuContext';

const ThumbnailContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 5px;
  border: solid 2px #fff;
  box-shadow: ${(props) => props.boxShadow};
`;

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  top: 25%;
  left: 50%;
  height: 80px;
  width: 80px;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);

  :hover {
    cursor: pointer;
  }
`;

function StyleThumbnail({ style, index }) {
  const { currentStyle, setCurrentStyle } = useContext(CurrentStyleContext);
  const { setPreviewStyle } = useContext(PreviewStyleContext);
  const { setSelectedSku } = useContext(SelectedSkuContext);
  const { setSelectedQty} = useContext(SelectedQtyContext);
  const { setIsMissingSku } = useContext(MissingSkuContext);

  function handleClick() {
    setCurrentStyle(style);
    setSelectedSku(null);
    setSelectedQty(null);
    setIsMissingSku(false);
  }

  function handleMouseOver() {
    setPreviewStyle(style);
  }

  function handleMouseLeave() {
    setPreviewStyle(currentStyle);
  }

  return (
    <ThumbnailContainer
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      boxShadow={index === currentStyle.style_id ? '0 0 0 1px #000' : '0 0 3px #888'}
    >
      <Img
        src={style.photos[0].thumbnail_url}
        alt={style.name}
      />
    </ThumbnailContainer>
  );
}

export default StyleThumbnail;
