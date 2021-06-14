import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SharedStyles from '../SharedStyles';
import HighLightedText from './HighlightedText';
import moment from 'moment';
import axios from 'axios';

const Img = styled.img`
  width: 130px;
  height: 100px;
  padding: 5px;
  border-radius: 10px;

  // &:hover,
  // &:focus {
  //   border-radius: 20px;
  // }

`

const AnswersPerQuestion = props => {

  let date = moment(props.answer.date).format('LL');
  const answerId = props.answer.id;
  const photos = props.answer.photos || [];
  const hasImg = props.answer.photos.length > 0;

  const handleHelpfulAnswerClick = async () => {

    try {
      const res = axios.put(`/api/qa/answers/${answerId}/helpful`)
    } catch (error) {
      console.log('error with answer helpful click')
      console.log(error)
    }

    props.handleAnswerHelpful(answerId, props.questionId);

  }

  const handleReportAnswerClick = async () => {

    try {
      const res = axios.put(`/api/qa/answers/${answerId}/report`)
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
      <SharedStyles.QuestionBtn onClick={handleHelpfulAnswerClick}>Yes</SharedStyles.QuestionBtn>
       #({props.answer.helpfulness}) |

      <SharedStyles.QuestionBtn onClick={handleReportAnswerClick}>Report</SharedStyles.QuestionBtn>

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
