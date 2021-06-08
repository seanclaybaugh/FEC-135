import React from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';

const QuestionListItem = props => {

  // console.log('ANSWERS')
  // // console.log(props.question.answers)
  let answers = props.question.answers;

  // Object.keys(answers).map((key) => {
  //   console.log(answers[key].body)
  // })


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
