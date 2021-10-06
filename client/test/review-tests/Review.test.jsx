import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddReviewModal from 'client/src/components/reviews/AddReviewModal.jsx';

describe('App', () => {
  test('search questions should have a placeholder string', () => {
    const placeholder = 'HAVE A QUESTION? SEARCH FOR ANSWERS';

    render(<AddReviewModal placeholderTxt={placeholderTxt} />);

    const elementOne = screen.getByPlaceholderText(placeholderTxt);
    expect(elementOne).toBeInTheDocument();
  });
});