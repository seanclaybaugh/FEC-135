import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SharedStyles from '../SharedStyles';
import HighLightedText from './HighlightedText';
import moment from 'moment';
import axios from 'axios';

const Img = styled.img`
  width: 130px;
  height: 100px;
  padding-right: 8px;
  padding-top: 5px;
  border-radius: 10px;
  order: 2;

  &:hover,
  &:focus {
    border-radius: 20px;
  }
`

const AnswerWrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  // padding: 5px;

`
const AnswerInfoWrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  font-weight: lighter;

`

const ImageWrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

`

const Answer = styled.div`
  order: 1;
  flex-basis: 5%;
  font-weight: bold;
`

const AnswerBody = styled.div`
  order: 2;

`

const AnswerInfo = styled.div`
  order: 1;
  flex-basis: 5%;
`

const AnswerInfoName = styled.div`
  order: 2;
  flex-basis: 40%;
  border-right: solid;
  border-width: 1px
`

const AnswerInfoHelp = styled.div`
  order: 3;
  padding-left: 10px;
  padding-right: 10px;
  border-right: solid;
  border-width: 1px
`

const AnswerInfoReport = styled.div`
  order: 4;
`

const Image = styled.div`
  order: 1;
  flex-basis: 5%;
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
    <>
      <AnswerWrapper>
        <Answer>A:</Answer>

        <AnswerBody>
          <HighLightedText
          textBody={props.answer.body}
          searchText={props.searchText}
          />
        </AnswerBody>
      </AnswerWrapper>

      <AnswerInfoWrapper>
        <AnswerInfo></AnswerInfo>

        <AnswerInfoName>
          By: {props.answer.answerer_name}, {date}
        </AnswerInfoName>

        <AnswerInfoHelp>
          Helpful?
          <SharedStyles.QuestionBtn onClick={handleHelpfulAnswerClick}>Yes</SharedStyles.QuestionBtn>
          #({props.answer.helpfulness})
        </AnswerInfoHelp>

        <AnswerInfoReport>
          <SharedStyles.QuestionBtn onClick={handleReportAnswerClick}>Report</SharedStyles.QuestionBtn>
        </AnswerInfoReport>

      </AnswerInfoWrapper>

      <ImageWrapper>

        <Image></Image>

        {photos.map((photo, index) => {
          return <Img key={index} src={photo}/>
        })}
      </ImageWrapper>

      <br/>
</>
  )

}

export default AnswersPerQuestion;
