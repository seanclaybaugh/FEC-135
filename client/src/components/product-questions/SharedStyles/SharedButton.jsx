import styled from 'styled-components';

// show more questions btn, add question btn
const Button = styled.button`
 display:inline-block;
 padding:0.5em 3em;
 border:0.16em solid black;
 margin:0 0.5em 0.5em 0;
 box-sizing: border-box;
 text-decoration:none;
 text-transform:uppercase;
 font-family:'Roboto',sans-serif;
 font-weight:400;
 background-color: black;
 color: white;
 text-align:center;
 transition: all 0.15s;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border-color: white;
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
