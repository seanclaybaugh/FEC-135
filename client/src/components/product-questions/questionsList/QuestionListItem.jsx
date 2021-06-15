import React, { useState } from 'react';
import AnswersPerQuestion from './AnswersPerQuestion';
import AddAnswerForm from './AddAnswerForm';
import HighlightedText from './HighlightedText';
import styled from 'styled-components';
import QuestionItemStyle from './QuestionItemStyle';
import SharedStyles from '../SharedStyles';
import { AiFillCaretUp } from "react-icons/ai";
import moment from 'moment';
import axios from 'axios';


const QuestionListItem = props => {

  const [addAnswerClicked, setAddAnswerClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  let answers = props.question.answers || [];
  const questionId = props.question.question_id;
  let answerLength = Object.keys(answers).length;
  let date = moment(props.question.question_date).format('LL');


  const handleHelpfulClick = async () => {

    try {
      const res = await axios.put(`/api/qa/questions/${questionId}/helpful`);

    } catch(error) {
      console.log('error with question helpful click')
      console.log(error)
    }

    props.handleQuestionHelpful(questionId);
  }

  const dismissAnswerForm = () => {
    setAddAnswerClicked(!addAnswerClicked);
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }


  const handleAddedAnswer = async () => {
    //while loop here as well
    //pick a page size that is equal to the old numbers of answers plus  TWO!!
    let fetchingAnswers = true;
    let newAnswers = [];
    let count = answerLength + 2;
    let page = 1;

    try {

      while (fetchingAnswers) {
        const res = await axios.get(`/api/qa/questions/${questionId}/answers?page=${page}&count=${count}`);
        newAnswers = newAnswers.concat(res.data.results);
        fetchingAnswers = newAnswers.length > count;
        page++
      }

      props.handleAddedAnswer(questionId, newAnswers);

    } catch (error) {
      console.log('error with adding answer')
      console.log(error)
    }
  }

  //if state is expanded, we want all the answers, else we want to slice 0,2
  const allAnswers = Object.values(answers);
  const visibleAnswers = expanded ? allAnswers : allAnswers.slice(0, 2);
  const enoughAnswersToExpand = allAnswers.length > 2;
  const buttonText = expanded ? "SHOW LESS" : `${allAnswers.length -2} MORE ANSWERS`;

  return (
    <QuestionItemStyle.Container>

      <QuestionItemStyle.Wrapper>
        <QuestionItemStyle.Question>Q:</QuestionItemStyle.Question>

        <QuestionItemStyle.QuestionBody>
          <HighlightedText
          textBody={props.question.question_body}
          searchText={props.searchText}
          />
        </QuestionItemStyle.QuestionBody>

        <QuestionItemStyle.QuestionHelpful>
          Helpful?
          <SharedStyles.QuestionItem onClick={handleHelpfulClick}><AiFillCaretUp/></SharedStyles.QuestionItem>
          #({props.question.question_helpfulness})
        </QuestionItemStyle.QuestionHelpful>


          <QuestionItemStyle.QuestionAddAnswer onClick={dismissAnswerForm}> Answer this Question </QuestionItemStyle.QuestionAddAnswer>
            {addAnswerClicked && <AddAnswerForm
              questionId={questionId}
              dismissAnswerForm={dismissAnswerForm}
              question={props.question.question_body}
              handleAddedAnswer={handleAddedAnswer}
            />}

        </QuestionItemStyle.Wrapper>

        <QuestionItemStyle.QuestionAskerWrapper>
          <QuestionItemStyle.QuestionAsker></QuestionItemStyle.QuestionAsker>

          <QuestionItemStyle.QuestionAskerInfo>
            Asked by: {props.question.asker_name}, {date}
          </QuestionItemStyle.QuestionAskerInfo>
        </QuestionItemStyle.QuestionAskerWrapper>

          <br/>
          {visibleAnswers.map((answer, i) =>
            <AnswersPerQuestion
            key={i}
            answer={answer}
            handleAnswerHelpful={props.handleAnswerHelpful}
            handleAnswerReport={props.handleAnswerReport}
            searchText={props.searchText}
            questionId={questionId}
            />
          )}

        {enoughAnswersToExpand &&
          <QuestionItemStyle.MoreWrapper>

            <QuestionItemStyle.MoreAnswer></QuestionItemStyle.MoreAnswer>

            <QuestionItemStyle.MoreTxt>
              <QuestionItemStyle.ShowAnswerBtn onClick={toggleExpanded}>{buttonText}</QuestionItemStyle.ShowAnswerBtn>
            </QuestionItemStyle.MoreTxt>

          </QuestionItemStyle.MoreWrapper>
        }

    </QuestionItemStyle.Container>
  )
}

export default QuestionListItem;
