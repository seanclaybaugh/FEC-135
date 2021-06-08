import React from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';

const QuestionListItem = props => {

  let answers = props.question.answers;

  return (
    <>
      <div>
        <li className="QuestionItem">
          Q: {props.question.question_body}
        <br/>
        </li>

        {Object.keys(answers).map((keyName, i) =>
          <AnswersPerQuestion
          key={i}
          answer={answers[keyName]}
          />
        )}
        <br/>
      </div>

    </>
  )
}

export default QuestionListItem;
