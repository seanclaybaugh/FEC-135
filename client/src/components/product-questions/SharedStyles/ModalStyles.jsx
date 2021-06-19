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
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  text-align: center;
  font-weight: 20;
  font-size: 10px;
`;

const ModalSubmitBtn = styled.button`
  font-weight: 20;
  font-size: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled.button`
  padding:0.1em .2em;
  border:0.16em solid black;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  background-color: black;
  color: white;
  text-align: center;
  float: right;
  transition: all 0.15s;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border-color: white;
  }
  `

const QuestionBtn = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

export default {
  ModalBackground,
  ModalContent,
  CloseButton,
  QuestionBtn,
  ModalSubmitBtn,
};
