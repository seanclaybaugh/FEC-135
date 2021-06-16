import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionListItem from './QuestionListItem/QuestionListItem';
import AddQuestionForm from './AddQuestion/AddQuestionForm';
import SharedButton from '../SharedStyles/SharedButton';

const Container = styled.div`
  overflow-y: scroll;
  height: 500px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
`;

const QuestionsList = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [addQuestionClicked, setAddQuestionClicked] = useState(false);

  const handleExpand = () => {
    props.handleExpandQuestions();
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleAddQuestionClicked = () => {
    setAddQuestionClicked(!addQuestionClicked);
  };

  const handleDismissAddQuestion = () => {
    setAddQuestionClicked(false);
  };

  const visibleQuestions = expanded ? props.questions : props.questions.slice(0, props.questionsPerPage - 1);
  const enoughQuestionsToShowExpand = props.questions.length > props.questionsPerPage - 1;
  const buttonText = expanded ? 'SHOW LESS' : 'SHOW MORE QUESTIONS & ANSWERS';
  const toggleFunction = expanded ? handleCollapse : handleExpand;

  return (
    <>
      {props.isQuestionList
        && (
        <Container>
          <ul>
            {visibleQuestions.map((question, index) => (
              <QuestionListItem
                key={index}
                question={question}
                handleAddedAnswer={props.handleAddedAnswer}
                handleAnswerReport={props.handleAnswerReport}
                handleAnswerHelpful={props.handleAnswerHelpful}
                handleQuestionHelpful={props.handleQuestionHelpful}
                searchText={props.searchText}
              />
            ))}
          </ul>
        </Container>
        )}

      <div>
        {enoughQuestionsToShowExpand
          && (
          <SharedButton.Button onClick={toggleFunction}>
            {buttonText}
          </SharedButton.Button>
          )}

        <SharedButton.Button onClick={handleAddQuestionClicked}>ASK A QUESTION</SharedButton.Button>

        {addQuestionClicked && (
        <AddQuestionForm
          handleDismissAddQuestion={handleDismissAddQuestion}
          productId={props.productId}
          handleAddedQuestion={props.handleAddedQuestion}
        />
        )}
      </div>
    </>
  );
};

export default QuestionsList;
