import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  // height: 60%;
  width: 50%;

  text-align: center;
`
const CloseButton = styled.button`
  display: inline;
  float: right;
`

// const Button = styled.button`
//   background-color: transparent;
//   border-radius: 3px;
//   border: 2px solid teal;
//   color: teal;
//   margin: 0.5em 1em;
//   padding: 1rem 2rem;
// `
const QuestionBtn = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`



export default {
  ModalBackground,
  ModalContent,
  CloseButton,

  QuestionBtn,
}