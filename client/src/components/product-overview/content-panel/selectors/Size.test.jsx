/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Size from './Size';
import SelectedSkuContext from '../contexts/SelectedSkuContext';
import MissingSkuContext from '../contexts/MissingSkuContext';
import CurrentStyleContext from '../../contexts/CurrentStyleContext';
import sampleStyle from '../../../../../spec/sampleStyle';

describe('Quantity', () => {
  test('should not allow users to select a size if it is not in stock', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const missingSku = {
      isMissingSku: false,
      setIsMissingSku: () => {},
    };
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <MissingSkuContext.Provider value={missingSku}>
          <CurrentStyleContext.Provider value={style}>
            <Size sku={828952} size={8} />
          </CurrentStyleContext.Provider>
        </MissingSkuContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    expect(screen.getByRole('button', { name: /8/i })).toBeDisabled();
  });
  test('should allow users to select a size when it is in stock', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const missingSku = {
      isMissingSku: false,
      setIsMissingSku: () => {},
    };
    const style = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };

    render(
      <SelectedSkuContext.Provider value={sku}>
        <MissingSkuContext.Provider value={missingSku}>
          <CurrentStyleContext.Provider value={style}>
            <Size sku={828950} size={7} />
          </CurrentStyleContext.Provider>
        </MissingSkuContext.Provider>
      </SelectedSkuContext.Provider>,
    );

    expect(screen.getByRole('button', { name: /7/i })).not.toBeDisabled();
  });
});
