/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import AddAnswerForm from '../src/components/product-questions/questionsList/AddAnswer/AddAnswerForm.jsx';

describe('AddAnswerForm', () => {

  test('add answer form should have a placeholder string', () => {

    let name = '';

    render(<AddAnswerForm
            name={name}
           />);


    const elementOne = screen.getByPlaceholderText(name);
    expect(elementOne).toBeInTheDocument();
  });

})
