/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Price from './Price';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import sampleStyle from '../../../../../spec/sampleStyle';

function renderStyleContext(style, props) {
  return render(
    <CurrentStyleContext.Provider value={style}>
      <Price price={props} />
    </CurrentStyleContext.Provider>,
  );
}

describe('Price', () => {
  test('should render component', () => {
    const style = sampleStyle;
    const defaultPrice = '$100';
    const original = '$90';
    const sale = null;
    render(renderStyleContext(style, defaultPrice));

    const originalPriceComponent = screen.getByTestId('original');
    const salePriceComponent = screen.getByTestId('sale');

    expect(originalPriceComponent).toBeInTheDocument();
    expect(originalPriceComponent.textContent).not.toEqual(defaultPrice);
    expect(originalPriceComponent.textContent).toEqual(original);
    expect(salePriceComponent).not.toBeInTheDocument();
  });
});
