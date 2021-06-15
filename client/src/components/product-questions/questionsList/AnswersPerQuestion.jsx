import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnswerStyles from './AnswerStyles.jsx';
import SharedStyles from '../SharedStyles';
import HighLightedText from './HighlightedText';
import { AiFillCaretUp } from "react-icons/ai";
import { BsFlagFill } from "react-icons/bs";
import moment from 'moment';
import axios from 'axios';


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
    <>
      <AnswerStyles.AnswerWrapper>
        <AnswerStyles.Answer>A:</AnswerStyles.Answer>

        <AnswerStyles.AnswerBody>
          <HighLightedText
          textBody={props.answer.body}
          searchText={props.searchText}
          />
        </AnswerStyles.AnswerBody>
      </AnswerStyles.AnswerWrapper>

      <AnswerStyles.AnswerInfoWrapper>
        <AnswerStyles.AnswerInfo></AnswerStyles.AnswerInfo>

        <AnswerStyles.AnswerInfoName>
          By: {props.answer.answerer_name}, {date}
        </AnswerStyles.AnswerInfoName>

        <AnswerStyles.AnswerInfoHelp>
          Helpful?
          <SharedStyles.QuestionItem onClick={handleHelpfulAnswerClick}><AiFillCaretUp/></SharedStyles.QuestionItem>
          #({props.answer.helpfulness})
        </AnswerStyles.AnswerInfoHelp>

        <AnswerStyles.AnswerInfoReport onClick={handleReportAnswerClick}>Report <BsFlagFill/></AnswerStyles.AnswerInfoReport>

      </AnswerStyles.AnswerInfoWrapper>

      <AnswerStyles.ImageWrapper>

        <AnswerStyles.Image></AnswerStyles.Image>

        {photos.map((photo, index) => {
          return <AnswerStyles.Img key={index} src={photo}/>
        })}
      </AnswerStyles.ImageWrapper>

      <br/>
    </>
  )

}

export default AnswersPerQuestion;
