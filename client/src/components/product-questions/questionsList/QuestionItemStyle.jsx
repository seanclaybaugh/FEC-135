import styled from 'styled-components';

const ShowAnswerBtn = styled.div`
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  // padding: 5px;

`
const Question = styled.div`
  order: 1;
  flex-basis: 5%;
  font-weight: bold;
`
const QuestionBody = styled.div`
  order: 2;
  flex-basis: 55%;
  font-weight: bold;

`

const QuestionHelpful = styled.div`
  order: 3;
  flex-basis: 22%;
  border-right: solid;
  border-width: 1px
`

const QuestionAddAnswer = styled.div`
  order: 4;
`

const List = styled.ul`
  list-style-type: none;
  padding: none;
`

const MoreWrapper = styled.div`
  display: flex;
`

const MoreAnswer = styled.div`
  order: 1;
  flex-basis: 5%;
`

const MoreTxt = styled.div`
  order: 2;

`

export default {
  ShowAnswerBtn,
  Wrapper,
  Question,
  QuestionBody,
  QuestionHelpful,
  QuestionAddAnswer,
  List,
  MoreWrapper,
  MoreAnswer,
  MoreTxt,
};
