import styled from 'styled-components';

//show more questions btn, add question btn
const Button = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid teal;
  color: teal;
  margin: 0.5em 1em;
  padding: 1rem 1rem;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }

`

//helpfulness, add answer, report answer
const QuestionItem = styled.button`
  background: transparent;
  border: none;
  // text-decoration: underline;
  cursor: pointer;
  // font-weight: 20;
  // font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`

export default {
  Button,
  QuestionItem,
}