/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from '../../src/components/product-overview/content-panel/header/Breadcrumb';

describe('Breadcrumb', () => {
  test('should render component', () => {
    render(<Breadcrumb />);
    const component = screen.getByTestId('breadcrumb');

    expect(component).toBeInTheDocument();
  });
  test('should update with the product category name when the prop value updates', () => {
    const category = 'Pants';
    render(<Breadcrumb category={category} />);
    const { textContent } = screen.getByTestId('breadcrumb');

    expect(textContent).toContain('Pants');
  });
});
