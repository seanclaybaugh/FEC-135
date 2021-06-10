import React from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';
import AddAnswerForm from './AddAnswerForm';
import AddAnswerModal from './AddAnswerModal';

const QuestionListItem = props => {

  let answers = props.question.answers || [];
  console.log('question id from question listitem')
  console.log(props.question.question_id)

  return (
    <>
      <div>
        <li className="QuestionItem">
          Q: {props.question.question_body} |
          Helpful? Yes ({props.question.question_helpfulness}) |
          {!props.isModalShowing &&
          <button onClick={props.toggleModal}>
            Add Answer
            <AddAnswerModal
            questionId={props.question.question_id}
            />
            </button>}
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
      {/* <AddAnswerForm
      questionId={props.question.question_id}
      /> */}
      <br/>
      </div>

    </>
  )
}

export default QuestionListItem;
