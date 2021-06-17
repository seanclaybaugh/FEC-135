import styled from 'styled-components';

// show more questions btn, add question btn
const Button = styled.button`
color: white;
  background-color: black;
  margin: 0.5em 1em;
  padding: 1rem 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background-position: 100% center;
    border: none;
    color: black;
    background-color: white;
  }
`;

// helpfulness, add answer, report answer
const QuestionItem = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default {
  Button,
  QuestionItem,
};
