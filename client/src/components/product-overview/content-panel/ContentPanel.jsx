import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import StylesContainer from './selectors/StylesContainer';
import SizesContainer from './selectors/SizesContainer';

const Container = styled.div`
  flex-grow: 1;
  order: 2;
  width: 550px;
  margin: 20px 40px;
`;

function ContentPanel({ product, styles, updateCurrentStyle, currentStyle }) {
  return (
    <Container>
      <Header name={product.name} description={product.description} price={product.price} currentStyle={currentStyle} />
      <StylesContainer styles={styles} currentStyle={currentStyle} updateCurrentStyle={updateCurrentStyle} />
      <SizesContainer currentStyle={currentStyle} />
    </Container>
  )
}

export default ContentPanel;