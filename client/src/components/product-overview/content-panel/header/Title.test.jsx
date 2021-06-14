/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title', () => {
  test('should render component', () => {
    const name = 'Camo Onesie';
    render(<Title name={name} />);
    const component = screen.getByText('Camo Onesie');

    expect(component).toBeInTheDocument();
  });
});
