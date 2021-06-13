import React, { useState, useEffect } from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';
import AddAnswerForm from './AddAnswerForm';
import HighlightedText from './HighlightedText';
import axios from 'axios';

const QuestionListItem = props => {

  const [addAnswerClicked, setAddAnswerClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  let answers = props.question.answers || [];
  const questionId = props.question.question_id;
  let answerLength = Object.keys(answers).length;


  const handleHelpfulClick = async () => {

    try {
      const res = await axios.put(`/api/qa/questions/${questionId}/helpful`);

    } catch(error) {
      console.log('error with question helpful click')
      console.log(error)
    }

    props.handleQuestionHelpful(questionId);
  }

  const dismissAnswerForm = () => {
    setAddAnswerClicked(!addAnswerClicked);
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }


  const handleAddedAnswer = async () => {
    //while loop here as well
    //pick a page size that is equal to the old numbers of answers plus  TWO!!
    let fetchingAnswers = true;
    let newAnswers = [];
    let count = answerLength + 2;
    let page = 1;

    try {

      while (fetchingAnswers) {
        const res = await axios.get(`/api/qa/questions/${questionId}/answers?page=${page}&count=${count}`);
        newAnswers = newAnswers.concat(res.data.results);
        fetchingAnswers = newAnswers.length > count;
        page++
      }

      props.handleAddedAnswer(questionId, newAnswers);

    } catch (error) {
      console.log('error with adding answer')
      console.log(error)
    }
  }


  //if state is expanded, we want all the answers, else we want to slice 0,2
  const allAnswers = Object.values(answers);
  const visibleAnswers = expanded ? allAnswers : allAnswers.slice(0, 2);
  const enoughAnswersToExpand = allAnswers.length > 2;
  const buttonText = expanded ? "Collapse Answers" : "Show More Answers";

  return (
    <>
      <div>
        <li className="QuestionItem">
          Q:
            <HighlightedText
            textBody={props.question.question_body}
            searchText={props.searchText}
            />
           |
          Helpful?

          <button onClick={handleHelpfulClick}>Yes</button>

          #({props.question.question_helpfulness}) |
          <button onClick={dismissAnswerForm}> Add Answer </button>
            {addAnswerClicked && <AddAnswerForm
              questionId={questionId}
              dismissAnswerForm={dismissAnswerForm}
              question={props.question.question_body}
              handleAddedAnswer={handleAddedAnswer}
            />}
        <br/>
        </li>

        {visibleAnswers.map((answer, i) =>
          <AnswersPerQuestion
          key={i}
          answer={answer}
          handleAnswerHelpful={props.handleAnswerHelpful}
          handleAnswerReport={props.handleAnswerReport}
          searchText={props.searchText}
          questionId={questionId}
          />
        )}

      {enoughAnswersToExpand && <button onClick={toggleExpanded}>{buttonText}</button>}

      <br/>
      <br/>
      </div>

    </>
  )
}

export default QuestionListItem;
