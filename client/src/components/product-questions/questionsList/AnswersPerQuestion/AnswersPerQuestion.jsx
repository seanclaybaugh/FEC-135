import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';
import moment from 'moment';
import axios from 'axios';
import HighLightedText from '../Helpers/HighlightedTextHelper';
import SharedButton from '../../SharedStyles/SharedButton';
import AnswerStyles from './AnswerStyles';

const AnswersPerQuestion = (props) => {
  const date = moment(props.answer.date).format('LL');
  const answerId = props.answer.id;
  const photos = props.answer.photos || [];

  const handleHelpfulAnswerClick = async () => {
    try {
      const res = axios.put(`/api/qa/answers/${answerId}/helpful`);
    } catch (error) {
      console.log(error);
    }

    props.handleAnswerHelpful(answerId, props.questionId);
  };

  const handleReportAnswerClick = async () => {
    try {
      const res = axios.put(`/api/qa/answers/${answerId}/report`);
    } catch (error) {
      console.log(error);
    }

    props.handleAnswerReport(answerId, props.questionId);
  };

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
        <AnswerStyles.AnswerInfo />
        <AnswerStyles.AnswerInfoName>
          Answered By:
          {' '}
          {props.answer.answerer_name}
          ,
          {' '}
          {date}
        </AnswerStyles.AnswerInfoName>

        <AnswerStyles.AnswerInfoHelp>
          Helpful?
          <SharedButton.QuestionItem onClick={handleHelpfulAnswerClick}>
            <AiFillCaretUp />
          </SharedButton.QuestionItem>

          #(
          {props.answer.helpfulness}
          )
        </AnswerStyles.AnswerInfoHelp>

        <AnswerStyles.AnswerInfoReport onClick={handleReportAnswerClick}>
          Report
          <BsFlagFill />
        </AnswerStyles.AnswerInfoReport>
      </AnswerStyles.AnswerInfoWrapper>

      <AnswerStyles.ImageWrapper>
        <AnswerStyles.Image />
        {photos.map((photo, index) => <AnswerStyles.Img key={index} src={photo} />)}
      </AnswerStyles.ImageWrapper>

      <br />
    </>
  );
};

export default AnswersPerQuestion;
