import React from 'react';

const AnswersPerQuestion = props => {

  return (

    <span className="answerListItem">
      A: {props.answer.body}
      <br/>
    </span>

  )

}

export default AnswersPerQuestion;
