import React, { useState, useEffect } from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';
import AddAnswerForm from './AddAnswerForm';
import axios from 'axios';

const QuestionListItem = props => {

  const [addAnswerClicked, setAddAnswerClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  let answers = props.question.answers || [];
  const questionId = props.question.question_id;


  const handleHelpfulClick = async () => {

    try {
      const res = await axios.put(`/api/qa/questions/${questionId}/helpful`);
      console.log(res.data);

    } catch(error) {
      console.log('error with question helpful click')
      console.log(error)
    }
  }

  const dismissAnswerForm = () => {
    setAddAnswerClicked(!addAnswerClicked);
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  //if state is expanded, we want all the answer, else we want to slice 0,2
  const allAnswers = Object.values(answers);
  const visibleAnswers = expanded ? allAnswers : allAnswers.slice(0, 2);
  const enoughAnswersToExpand = allAnswers.length > 2;
  const buttonText = expanded ? "Collapse Answers" : "Show More Answers";

  return (
    <>
      <div>
        <li className="QuestionItem">
          Q: {props.question.question_body} |
          Helpful?

          <button onClick={handleHelpfulClick}>Yes</button>

          #({props.question.question_helpfulness}) |
          <button onClick={dismissAnswerForm}> Add Answer </button>
            {addAnswerClicked && <AddAnswerForm
              questionId={questionId}
              dismissAnswerForm={dismissAnswerForm}
              question={props.question.question_body}
            />}
        <br/>
        </li>

        {visibleAnswers.map((answer, i) =>
          <AnswersPerQuestion
          key={i}
          answer={answer}
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
