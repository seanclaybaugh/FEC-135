/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCart from './AddToCart';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import SelectedQtyContext from '../contexts/SelectedQtyContext';

describe('Add Item(s) To Cart', () => {
  test('should render `Add To Cart` button', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <SelectedQtyContext.Provider value={qty}>
          <AddToCart />
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    const button = screen.getByRole('button', { name: /ADD TO BAG/i });

    expect(button).toBeInTheDocument();
  });
  test('should call `handleMissingSku` function when `Add To Cart` button is clicked and sku item has not been selected', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const handleMissingSku = jest.fn();

    render(
      <SelectedSkuContext.Provider value={sku}>
        <SelectedQtyContext.Provider value={qty}>
          <AddToCart handleMissingSku={handleMissingSku} />
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    fireEvent.submit(screen.getByRole('form'));

    expect(handleMissingSku).toHaveBeenCalled();
  });
});
