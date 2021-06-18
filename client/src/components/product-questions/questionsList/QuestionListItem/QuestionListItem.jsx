import React, { useState, useContext } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import moment from 'moment';
import axios from 'axios';
import AnswersPerQuestion from '../AnswersPerQuestion/AnswersPerQuestion';
import AddAnswerForm from '../AddAnswer/AddAnswerForm';
import HighlightedText from '../Helpers/HighlightedTextHelper';
import QuestionItemStyle from './QuestionItemStyle';
import SharedButton from '../../SharedStyles/SharedButton';
import { QuestionHelpfulContext } from '../../ProductQuestionContexts';

const QuestionListItem = (props) => {
  const [addAnswerClicked, setAddAnswerClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleQuestionHelpful = useContext(QuestionHelpfulContext);

  const answers = props.question.answers || [];
  const questionId = props.question.question_id;
  const answerLength = Object.keys(answers).length;
  const date = moment(props.question.question_date).format('LL');

  const handleHelpfulClick = async () => {
    try {
      const res = await axios.put(`/api/qa/questions/${questionId}/helpful`);
    } catch (error) {
      console.log(error);
    }

    handleQuestionHelpful(questionId);
  };

  const dismissAnswerForm = () => {
    setAddAnswerClicked(!addAnswerClicked);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleAddedAnswer = async () => {
    let fetchingAnswers = true;
    let newAnswers = [];
    const count = answerLength + 2;
    let page = 1;

    try {
      while (fetchingAnswers) {
        const res = await axios.get(`/api/qa/questions/${questionId}/answers?page=${page}&count=${count}`);
        newAnswers = newAnswers.concat(res.data.results);
        fetchingAnswers = newAnswers.length > count;
        page++;
      }

      props.handleAddedAnswer(questionId, newAnswers);
    } catch (error) {
      console.log(error);
    }
  };

  const allAnswers = Object.values(answers);
  const visibleAnswers = expanded ? allAnswers : allAnswers.slice(0, 2);
  const enoughAnswersToExpand = allAnswers.length > 2;
  const buttonText = expanded ? 'SHOW LESS' : `${allAnswers.length - 2} MORE ANSWERS`;

  return (
    <QuestionItemStyle.Container>

      <QuestionItemStyle.Wrapper>
        <QuestionItemStyle.Question>Q:</QuestionItemStyle.Question>

        <QuestionItemStyle.QuestionBody>
          <HighlightedText
            textBody={props.question.question_body}
            // searchText={props.searchText}
          />
        </QuestionItemStyle.QuestionBody>

        <QuestionItemStyle.QuestionHelpful>
          Helpful?
          <SharedButton.QuestionItem onClick={handleHelpfulClick}>
            <AiFillCaretUp />
          </SharedButton.QuestionItem>

          #(
          {props.question.question_helpfulness}
          )
        </QuestionItemStyle.QuestionHelpful>

        <QuestionItemStyle.QuestionAddAnswer onClick={dismissAnswerForm}>
          Answer this Question
        </QuestionItemStyle.QuestionAddAnswer>

        {addAnswerClicked && (
          <AddAnswerForm
            questionId={questionId}
            dismissAnswerForm={dismissAnswerForm}
            question={props.question.question_body}
            handleAddedAnswer={handleAddedAnswer}
          />
        )}

      </QuestionItemStyle.Wrapper>

      <QuestionItemStyle.QuestionAskerWrapper>
        <QuestionItemStyle.QuestionAsker />

        <QuestionItemStyle.QuestionAskerInfo>
          Asked by:
          {' '}
          {props.question.asker_name}
          ,
          {' '}
          {date}
        </QuestionItemStyle.QuestionAskerInfo>
      </QuestionItemStyle.QuestionAskerWrapper>

      <br />
      {visibleAnswers.map((answer, i) => (
        <AnswersPerQuestion
          key={i}
          answer={answer}
          // handleAnswerHelpful={props.handleAnswerHelpful}
          // handleAnswerReport={props.handleAnswerReport}
          // searchText={props.searchText}
          questionId={questionId}
        />
      ))}

      {enoughAnswersToExpand
          && (
          <QuestionItemStyle.MoreWrapper>

            <QuestionItemStyle.MoreAnswer />

            <QuestionItemStyle.MoreTxt>
              <QuestionItemStyle.ShowAnswerBtn onClick={toggleExpanded}>
                {buttonText}
              </QuestionItemStyle.ShowAnswerBtn>

            </QuestionItemStyle.MoreTxt>

          </QuestionItemStyle.MoreWrapper>
          )}

    </QuestionItemStyle.Container>
  );
};

export default QuestionListItem;
