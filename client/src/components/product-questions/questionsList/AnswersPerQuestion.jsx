import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HighLightedText from './HighlightedText';
import moment from 'moment';
import axios from 'axios';

const Img = styled.img`
  width: 130px;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
`

const AnswersPerQuestion = props => {

  let date = moment(props.answer.date).format('LL');
  const answerId = props.answer.id;
  const photos = props.answer.photos || [];
  const hasImg = props.answer.photos.length > 0;

  // console.log(props.answer)
  // console.log('photos');
  // console.log(photos);

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

    props.handleAnswerHelpful(answerId, props.questionId);
    console.log(answerId)
    console.log(props.questionId)

  }

  const handleReportAnswerClick = async () => {
    try {
      const res = axios.put(`/api/qa/answers/${answerId}/report`)
      console.log(res.data)
    } catch (error) {
      console.log('error with answer report click')
      console.log(error)
    }

    props.handleAnswerReport(answerId, props.questionId);

  }


  return (

    <span className="answerListItem">
      A: <HighLightedText
      textBody={props.answer.body}
      searchText={props.searchText}
      />
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
