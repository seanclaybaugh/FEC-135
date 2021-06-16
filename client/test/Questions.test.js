/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen, waitFor } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import ProductQuestions from '../src/components/product-questions/ProductQuestions.jsx';

describe('Product Questions Component', () => {

  test('it displays list of questions', async () => {
    render(<ProductQuestions/>);

    const questionList = await waitFor(() => screen.getByTestId('question-list'));
    expect(questionList).toBeInTheDocument();
  })
})