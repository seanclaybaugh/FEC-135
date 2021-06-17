/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Price from '../../src/components/product-overview/content-panel/header/Price';
import CurrentStyleContext from '../../src/components/product-overview/contexts/CurrentStyleContext';
import sampleStyle from '../sampleData/sampleStyles';

describe('Price', () => {
  test('should render component with the original price of the current style', () => {
    const defaultPrice = '$100';
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <CurrentStyleContext.Provider value={style}>
        <Price price={defaultPrice} />
      </CurrentStyleContext.Provider>,
    );

    const originalPriceComponent = screen.getByTestId('original');

    expect(originalPriceComponent).toBeInTheDocument();
    expect(originalPriceComponent.textContent).toEqual('$99');
    expect(originalPriceComponent.textContent).not.toEqual(defaultPrice);
    expect(originalPriceComponent.textContent).not.toEqual(null);
  });
  test('should render component with the sale price if not null', () => {
    const defaultPrice = '$100';
    const style = {
      currentStyle: sampleStyle[1],
      setCurrentStyle: () => {},
    };

    render(
      <CurrentStyleContext.Provider value={style}>
        <Price price={defaultPrice} />
      </CurrentStyleContext.Provider>,
    );

    const originalPriceComponent = screen.getByTestId('original');
    const salePriceComponent = screen.getByTestId('sale');

    expect(originalPriceComponent).toBeInTheDocument();
    expect(originalPriceComponent.textContent).not.toEqual(defaultPrice);
    expect(originalPriceComponent.textContent).toEqual('$140');
    expect(salePriceComponent).toBeInTheDocument();
    expect(salePriceComponent.textContent).toEqual('$100');
  });
});
