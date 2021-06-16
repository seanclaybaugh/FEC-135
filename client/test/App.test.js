/**
 * @jest-environment jsdom
 */

//  import React from 'react';
//  import { render, screen } from '@testing-library/react';
//  import '@testing-library/jest-dom';
//  import App from '../src/components/App.jsx';

//  describe('App', () => {
//    test('renders App component', () => {
//      render(<App />);
//      // screen.getByText('What up my Quadratic Quokkas Q.Q');
//      expect(screen.getByText('Question and Answers')).toBeInTheDocument();
//    });
//  });

 // ideas
 // we know that productQuestions component is difficult to test (hits the server, we're not doing mocking yet)
 // just saw how much easier it is to test every other component (e.g. highlightText)
 // because we can just set props

 // answersPerQuestion (props: answer={} question_id={})
 //     const answer = { body: ... , id: ..., etc }
 //     render(<AnswersPerQuestion answer={answer} question_id=<your unit test's question_id you define> />)
 //     select(answer.body), expect answer body is in DOM

 // same pattern questionListItem, questionList, addAnswer, addQuestion
 // const unitTestHandleX = () => { do something interesting or expect something }
 // <QuestionList handleX=unitTestHandleX />