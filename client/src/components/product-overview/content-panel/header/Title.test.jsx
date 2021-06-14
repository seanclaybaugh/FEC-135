/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title', () => {
  test('should render component', () => {
    render(<Title />);
    const component = screen.getByTestId('title');

    expect(component).toBeInTheDocument();
  });
  test('should display a product name', () => {
    const name = 'Camo Onesie';

    render(<Title name={name} />);
    const { textContent } = screen.getByTestId('title');

    expect(textContent).toEqual(name);
  });
});
