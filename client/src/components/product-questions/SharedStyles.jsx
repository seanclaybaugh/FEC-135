import styled from 'styled-components';

//show more questions btn, add question btn
const Button = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid red;
  color: red;
  margin: 0.5em 1em;
  padding: 1rem 1rem;
  transition: border-color 0.2s ease 0s;
`

//helpfulness, add answer, report answer
const QuestionItem = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 100;
  font-size: 12px;
`

export default {
  Button,
  QuestionItem,
}