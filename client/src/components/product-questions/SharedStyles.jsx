import styled from 'styled-components';

//show more questions btn, add question btn
const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid teal;
  color: teal;
  margin: 0.5em 1em;
  padding: 1rem 2rem;
`

//helpfulness, add answer, report answer
const QuestionItem = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`

export default {
  Button,
  QuestionItem,
}