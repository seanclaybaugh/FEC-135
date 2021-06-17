/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleThumbnail from '../../src/components/product-overview/content-panel/selectors/StyleThumbnail';
import CurrentStyleContext from '../../src/components/product-overview/contexts/CurrentStyleContext';
import PreviewStyleContext from '../../src/components/product-overview/contexts/PreviewStyleContext';
import SelectedSkuContext from '../../src/components/product-overview/content-panel/contexts/SelectedSkuContext';
import SelectedQtyContext from '../../src/components/product-overview/content-panel/contexts/SelectedQtyContext';
import MissingSkuContext from '../../src/components/product-overview/content-panel/contexts/MissingSkuContext';
import sampleStyle from '../sampleData/sampleStyles';

describe('Style Thumbnails', () => {
  test('should allow users to select another style', () => {
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

    const item = preview.previewStyle;

    render(
      <CurrentStyleContext.Provider value={current}>
        <PreviewStyleContext.Provider value={preview}>
          <SelectedSkuContext.Provider value={sku}>
            <SelectedQtyContext.Provider value={qty}>
              <MissingSkuContext.Provider value={missingSku}>
                <StyleThumbnail style={item} index={142827} />
              </MissingSkuContext.Provider>
            </SelectedQtyContext.Provider>
          </SelectedSkuContext.Provider>
        </PreviewStyleContext.Provider>
      </CurrentStyleContext.Provider>,
    );

    const imageThumbnail = screen.getByAltText(/Ocean Blue & Grey/i);

    fireEvent.click(imageThumbnail);

    expect(current.currentStyle.name).toEqual(preview.previewStyle.name);
  });
});
