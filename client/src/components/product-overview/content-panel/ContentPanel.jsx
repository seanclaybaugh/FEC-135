import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import StylesContainer from './selectors/StylesContainer';
import SizesContainer from './selectors/SizesContainer';
import AddToCart from './selectors/AddToCart';

const Container = styled.div`
  order: 2;
  width: 550px;
  margin: 20px 40px;
`;

function ContentPanel({ product, styles, updateCurrentStyle, currentStyle }) {
  return (
    <Container>
      <Header name={product.name}
              description={product.description}
              price={product.price}
              currentStyle={currentStyle} />
      <StylesContainer styles={styles}
                       currentStyle={currentStyle}
                       updateCurrentStyle={updateCurrentStyle} />
      <SizesContainer currentStyle={currentStyle} />
      <AddToCart />
    </Container>
  )
}

export default ContentPanel;