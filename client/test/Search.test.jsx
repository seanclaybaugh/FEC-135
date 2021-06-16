/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchQuestions from '../src/components/product-questions/SearchQuestions/SearchQuestions.jsx';

describe('SearchQuestions', () => {
  test('search questions should have a placeholder string', () => {
    const placeholderTxt = 'HAVE A QUESTION? SEARCH FOR ANSWERS';

    render(<SearchQuestions
      placeholderTxt={placeholderTxt}
    />);

    const elementOne = screen.getByPlaceholderText(placeholderTxt);
    expect(elementOne).toBeInTheDocument();
  });
});
