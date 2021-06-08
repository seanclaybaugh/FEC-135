import React from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';

const QuestionListItem = props => {

  let answers = props.question.answers;

  return (
    <>
      <div>
        <li className="QuestionItem">
          Q: {props.question.question_body} | Helpful? Yes ({props.question.question_helpfulness}) | Add Answer
        <br/>
        </li>

        {Object.keys(answers).map((keyName, i) =>
          <AnswersPerQuestion
          key={i}
          answer={answers[keyName]}
          />
        )}
        <div>Load more answers (if more than 2 answers)</div>
      <br/>
      <br/>
      </div>

    </>
  )
}

export default QuestionListItem;
