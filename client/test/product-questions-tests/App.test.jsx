/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/components/App.jsx';

describe('App', () => {
  test('search questions should have a placeholder string', () => {
    const placeholderTxt = 'HAVE A QUESTION? SEARCH FOR ANSWERS';

    render(<App
      placeholderTxt={placeholderTxt}
    />);

    const elementOne = screen.getByPlaceholderText(placeholderTxt);
    expect(elementOne).toBeInTheDocument();
  });
});
