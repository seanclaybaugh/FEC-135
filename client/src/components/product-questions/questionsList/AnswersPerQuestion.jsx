import React from 'react';
import moment from 'moment';

const AnswersPerQuestion = props => {

  let date = moment(props.answer.date).format('LL');

  return (

    <span className="answerListItem">
      A: {props.answer.body}
      <div>
      By: {props.answer.answerer_name} | {date} | Helpful? Yes ({props.answer.helpfulness}) | Report
      </div>
      <br/>
    </span>

  )

}

export default AnswersPerQuestion;
