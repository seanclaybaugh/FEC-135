/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleThumbnail from '../src/components/product-overview/content-panel/selectors/StyleThumbnail';
import CurrentStyleContext from '../../src/components/product-overview/contexts/CurrentStyleContext';
import PreviewStyleContext from '../../src/components/product-overview/contexts/PreviewStyleContext';
import SelectedSkuContext from '../../src/components/product-overview/content-panel/contexts/SelectedSkuContext';
import SelectedQtyContext from '../../src/components/product-overview/content-panel/contexts/SelectedQtyContext';
import MissingSkuContext from '../../src/components/product-overview/content-panel/contexts/MissingSkuContext';
import sampleStyle from '../sampleData/sampleStyle';

describe('Style Thumbnails', () => {
  xtest('should select the default style on page load', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const missingSku = {
      isMissingSku: false,
      setIsMissingSku: () => {},
    };
    const current = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };
    const preview = {
      previewStyle: sampleStyle[1],
      setPreviewStyle: () => {},
    };

    render(
      <CurrentStyleContext.Provider value={}>
        <PreviewStyleContext.Provider value ={}>
          <SelectedSkuContext.Provider value ={}>
            <SelectedQtyContext.Provider value={}>
              <MissingSkuContext.Provider value={}>
                <StyleThumbnail style={style} index={0} />
              </MissingSkuContext.Provider>
            </SelectedQtyContext.Provider>
          </SelectedSkuContext.Provider>
        </PreviewStyleContext.Provider>
      </CurrentStyleContext.Provider>,
    );

    // expect(screen.getByRole('button', { name: /8/i })).toBeDisabled();
  });
  xtest('should allow users to preview a style on hover', () => {
    const sku = {
      selectedSku: null,
      setSelectedSku: () => {},
    };
    const qty = {
      selectedQty: null,
      setSelectedQty: () => {},
    };
    const missingSku = {
      isMissingSku: false,
      setIsMissingSku: () => {},
    };
    const current = {
      currentStyle: sampleStyle[0],
      setCurrentStyle: () => {},
    };
    const preview = {
      previewStyle: sampleStyle[1],
      setPreviewStyle: () => {},
    };

    render(
      <CurrentStyleContext.Provider value={}>
        <PreviewStyleContext.Provider value ={}>
          <SelectedSkuContext.Provider value ={}>
            <SelectedQtyContext.Provider value={}>
              <MissingSkuContext.Provider value={}>
                <StyleThumbnail style={style} index={1} />
              </MissingSkuContext.Provider>
            </SelectedQtyContext.Provider>
          </SelectedSkuContext.Provider>
        </PreviewStyleContext.Provider>
      </CurrentStyleContext.Provider>,
    );

    // expect(screen.getByRole('button', { name: /7/i })).not.toBeDisabled();
  });
});
