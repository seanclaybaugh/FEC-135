import React from 'react';
import moment from 'moment';
import axios from 'axios';

const AnswersPerQuestion = props => {

  let date = moment(props.answer.date).format('LL');
  const answerId = props.answer.id;
  console.log('answer id from answersPerQuestion')
  console.log(answerId)

  const handleHelpfulAnswerClick = async () => {

    try {
      const res = axios.put(`/api/qa/answers/${answerId}/helpful`)
      console.log(res.data)
    } catch (error) {
      console.log('error with answer helpful click')
      console.log(error)
    }
  }

  const handleReportAnswerClick = async () => {
    try {
      const res = axios.put(`/api/qa/answers/${answerId}/report`)
      console.log(res.data)
    } catch (error) {
      console.log('error with answer report click')
      console.log(error)
    }
  }


  return (

    <span className="answerListItem">
      A: {props.answer.body}
      <div>
      By: {props.answer.answerer_name} |
      {date} |
      Helpful?
      <button onClick={handleHelpfulAnswerClick}>Yes</button>
       #({props.answer.helpfulness}) |

      <button onClick={handleReportAnswerClick}>Report</button>
      </div>
      <br/>
    </span>

  )

}

export default AnswersPerQuestion;
