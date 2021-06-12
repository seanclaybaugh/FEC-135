import React, { useState } from 'react';
import Header from './header/Header';
import StylesContainer from './selectors/StylesContainer';
import SizeQtyContainer from './selectors/SizeQtyContainer';
import AddToCart from './selectors/AddToCart';
import Share from './Share';

function ContentPanel({ product, metaData, styles }) {
  const [cartSku, setCartSku] = useState(null);
  const [cartQty, setCartQty] = useState(0);

  function updateCartSku(sku) {
    setCartSku(sku);
  }

  function updateCartQty(qty) {
    setCartQty(qty);
  }

  return (
    <>
      <Header
        name={product.name}
        category={product.category}
        metaData={metaData}
        description={product.description}
        price={product.price}
      />
      <StylesContainer
        styles={styles}
      />
      <SizeQtyContainer
        updateCartSku={updateCartSku}
        updateCartQty={updateCartQty}
      />
      <AddToCart
        product={product.name}
        sku={cartSku}
        qty={cartQty}
      />
      <Share />
    </>
  );
}

export default ContentPanel;
