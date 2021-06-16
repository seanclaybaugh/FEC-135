/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import QuestionListItem from '../src/components/product-questions/questionsList/QuestionListItem/QuestionListItem.jsx';

describe('QuestionListItem', () => {

  test('each question list item should have an answers property and a question id', () => {
    let question = {question_body: 'why', sker_name: "no", question_date: "", question_helpfulness: 2};
    question.question_id = 123;
    let questionID = parseInt(question.question_id);
    question.answers = { 23: { id: 23, body: 'test body', date: '', helpfulness: 2, answerer_name: 'sandy', photos: []} };
    let searchText = 'hi';

    render(<QuestionListItem
            question={question}
            questionId={questionID}
            answers={question.answers}
            searchText={searchText}
            />);

    const elementOne = screen.getByText(question.question_body);
    expect(elementOne).toBeInTheDocument();
  });
})
