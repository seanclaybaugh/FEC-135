import React, { useState } from 'react';
import Header from './header/Header';
import SelectedSkuContext from './contexts/SelectedSkuContext';
import SelectedQtyContext from './contexts/SelectedQtyContext';
import StylesContainer from './selectors/StylesContainer';
import SizeQtyContainer from './selectors/SizeQtyContainer';
import AddToCart from './selectors/AddToCart';
import Share from './Share';

function ContentPanel({ product, metaData, styles }) {
  const [selectedSku, setSelectedSku] = useState(null);
  const [selectedQty, setSelectedQty] = useState(null);

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
      <SelectedSkuContext.Provider value={{ selectedSku, setSelectedSku }}>
        <SelectedQtyContext.Provider value={{ selectedQty, setSelectedQty }}>
          <StylesContainer
            styles={styles}
          />
          <SizeQtyContainer />
          <AddToCart product={product.name} />
          <Share />
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>
    </>
  );
}

export default ContentPanel;
