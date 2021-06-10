import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import StylesContainer from './selectors/StylesContainer';
import SizesContainer from './selectors/SizesContainer';
import AddToCart from './selectors/AddToCart';
import Share from './Share';

const Container = styled.div`
  order: 2;
  width: 450px;
  margin: 10px 20px;
`;

function ContentPanel({ product, styles, currentStyle, updateCurrentStyle, previewCurrentStyle, revertCurrentStyle }) {
  const [cartSku, setCartSku] = useState(null);
  const [cartQty, setCartQty] = useState(0);

  function updateCartSku(sku) {
    setCartSku(sku)
  }

  function updateCartQty(qty) {
    setCartQty(qty)
  }

  return (
    <Container>
      <Header name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
              currentStyle={currentStyle} />
      <StylesContainer styles={styles}
                       currentStyle={currentStyle}
                       updateCurrentStyle={updateCurrentStyle}
                       previewCurrentStyle={previewCurrentStyle}
                       revertCurrentStyle={revertCurrentStyle} />
      <SizesContainer currentStyle={currentStyle}
                      updateCartSku={updateCartSku}
                      updateCartQty={updateCartQty} />
      <AddToCart sku={cartSku}
                 qty={cartQty} />
      <Share />
    </Container>
  )
}

export default ContentPanel;