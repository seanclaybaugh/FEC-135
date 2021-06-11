import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import StylesContainer from './selectors/StylesContainer';
import SizesContainer from './selectors/SizesContainer';
import AddToCart from './selectors/AddToCart';
import Share from './Share';

function ContentPanel({ product, metaData, styles, currentStyle, updateCurrentStyle, previewCurrentStyle, revertCurrentStyle }) {
  const [cartSku, setCartSku] = useState(null);
  const [cartQty, setCartQty] = useState(0);

  function updateCartSku(sku) {
    setCartSku(sku)
  }

  function updateCartQty(qty) {
    setCartQty(qty)
  }

  return (
    <>
      <Header name={product.name}
              category={product.category}
              metaData={metaData}
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
    </>
  )
}

export default ContentPanel;