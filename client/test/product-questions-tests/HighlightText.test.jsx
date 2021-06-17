/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HighlightedText from '../../src/components/product-questions/questionsList/Helpers/HighlightedTextHelper.jsx';

describe('HighlightedTextHelper', () => {
  test('nothing is highlighted when search text is not found', () => {
    const textBody = 'test text';

    render(<HighlightedText
      textBody={textBody}
      searchText="search text"
    />);

    const element = screen.getByText(textBody);
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toEqual('span');
  });

  test('matching text is highlighted when search text is found', () => {
    const textBody = 'test text with search and stuff';
    const searchText = 'search';

    render(<HighlightedText
      textBody={textBody}
      searchText={searchText}
    />);

    const elementOne = screen.getByText('test text with');
    expect(elementOne).toBeInTheDocument();
    expect(elementOne.tagName.toLowerCase()).toEqual('span');

    const elementTwo = screen.getByText(searchText);
    expect(elementTwo).toBeInTheDocument();
    expect(elementTwo.tagName.toLowerCase()).toEqual('mark');

    const elementThree = screen.getByText('and stuff');
    expect(elementThree).toBeInTheDocument();
    expect(elementThree.tagName.toLowerCase()).toEqual('span');
  });

  test('nothing is highlighted when searchText is less than 3 characters', () => {
    const textBody = 'test text';

    render(<HighlightedText
      textBody={textBody}
      searchText="t"
    />);

    const element = screen.getByText(textBody);
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toEqual('span');
  });
});
