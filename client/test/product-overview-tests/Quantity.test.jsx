/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quantity from '../../src/components/product-overview/content-panel/selectors/Quantity';
import SelectedSkuContext from '../../src/components/product-overview/content-panel/contexts/SelectedSkuContext';
import SelectedQtyContext from '../../src/components/product-overview/content-panel/contexts/SelectedQtyContext';
import CurrentStyleContext from '../../src/components/product-overview/contexts/CurrentStyleContext';
import sampleStyle from '../sampleData/sampleStyles';

describe('Quantity', () => {
  test('should not allow users to select from the dropdown when a size is not selected', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <SelectedQtyContext.Provider value={qty}>
          <CurrentStyleContext.Provider value={style}>
            <Quantity />
          </CurrentStyleContext.Provider>
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    const dropdown = screen.getByTestId('dropdown');

    expect(dropdown).toBeDisabled();
  });
  test('should allow users to select from the dropdown when a size is selected', () => {
    const sku = {
      selectedSku: 828950,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <SelectedQtyContext.Provider value={qty}>
          <CurrentStyleContext.Provider value={style}>
            <Quantity />
          </CurrentStyleContext.Provider>
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    const dropdown = screen.getByTestId('dropdown');

    expect(dropdown).not.toBeDisabled();
  });
  test('should update the selected quantity when a user selects from the dropdown', () => {
    const sku = {
      selectedSku: 828950,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <SelectedQtyContext.Provider value={qty}>
          <CurrentStyleContext.Provider value={style}>
            <Quantity />
          </CurrentStyleContext.Provider>
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    const dropdown = screen.getByTestId('dropdown');

    fireEvent.click(dropdown);
    fireEvent.change(dropdown, { target: { value: 4 } });

    let options = screen.getAllByTestId('option');

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeTruthy();
    expect(options[4].selected).toBeFalsy();
  });
  test('should update the selected quantity when a user selects from the dropdown', () => {
    const sku = {
      selectedSku: 828950,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <SelectedQtyContext.Provider value={qty}>
          <CurrentStyleContext.Provider value={style}>
            <Quantity />
          </CurrentStyleContext.Provider>
        </SelectedQtyContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    const dropdown = screen.getByTestId('dropdown');

    fireEvent.click(dropdown);
    fireEvent.change(dropdown, { target: { value: 4 } });

    let options = screen.getAllByTestId('option');

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeTruthy();
    expect(options[4].selected).toBeFalsy();
  });
});
