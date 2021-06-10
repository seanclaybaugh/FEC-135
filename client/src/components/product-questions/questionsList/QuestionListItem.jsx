import React from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';
import AddAnswerForm from './AddAnswerForm';
import AddAnswerModal from './AddAnswerModal';
import axios from 'axios';

const QuestionListItem = props => {

  let answers = props.question.answers || [];
  const questionId = props.question.question_id;

  console.log('question id from question listitem')
  console.log(questionId)


  const handleHelpfulClick = async () => {

    try {
      const res = await axios.put(`/api/qa/questions/${questionId}/helpful`);
      console.log(res.data);

    } catch(error) {
      console.log('error with question helpful click')
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <li className="QuestionItem">
          Q: {props.question.question_body} |
          Helpful?

          <button onClick={handleHelpfulClick}>Yes</button>

          #({props.question.question_helpfulness}) |
          {!props.isModalShowing &&
          <button onClick={props.toggleModal}>
            Add Answer
            <AddAnswerModal
            questionId={questionId}
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
