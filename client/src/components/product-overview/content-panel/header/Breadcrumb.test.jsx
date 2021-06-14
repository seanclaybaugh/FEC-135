/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  test('should render component', () => {
    render(<Breadcrumb />);
    const component = screen.getByTestId('breadcrumb');

    expect(component).toBeInTheDocument();
  });
});
