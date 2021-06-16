/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, fireEvent } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import SearchQuestions from '../src/components/product-questions/SearchQuestions/SearchQuestions.jsx';



    test('renders placeholder text', () => {
      // const {getByPlaceholderText} = render(<SearchQuestions
      //                                 placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
      //                                 />);

      //   const inputNode = getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS');

      //   expect(inputNode.value).toMatch('') //tests input value is empty
      //   fireEvent.change(inputNode, { target: { value: 'Some text' } });

      //   expect(inputNode.value).toMatch('Some text');


    })

