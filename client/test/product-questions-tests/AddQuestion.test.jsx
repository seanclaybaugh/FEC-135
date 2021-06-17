/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddQuestionForm from '../../src/components/product-questions/questionsList/AddQuestion/AddQuestionForm.jsx';

describe('AddQuestionForm', () => {
  test('add question form should have a placeholder string', () => {
    const name = '';

    render(<AddQuestionForm
      name={name}
    />);

    const elementOne = screen.getByPlaceholderText(name);
    expect(elementOne).toBeInTheDocument();
  });
});
