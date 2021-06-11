import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';

const Img = styled.img`
  width: 70px;
  height: 70px;
  padding-right: 5px;
`

const AnswersPerQuestion = props => {

  let date = moment(props.answer.date).format('LL');
  const answerId = props.answer.id;
  const photos = props.answer.photos || [];
  const hasImg = props.answer.photos.length > 0;

  console.log(props.answer)
console.log('photos');
  console.log(photos);

  const handleHelpfulAnswerClick = async () => {

    try {
      const res = axios.put(`/api/qa/answers/${answerId}/helpful`)
      console.log(res.data)
      // props.answer.helpfulness
      // not good enough to update props
      // need to tell parent so it can update the list
      // ProductQuestions component needs to know
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

      <div>
        {photos.map((photo, index) => {
          return <Img key={index} src={photo}/>
        })}
      </div>
      </div>
      <br/>
    </span>

  )

}

export default AnswersPerQuestion;
