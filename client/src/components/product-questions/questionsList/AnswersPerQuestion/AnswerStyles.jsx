import styled from 'styled-components';

const Img = styled.img`
  width: 130px;
  height: 100px;
  padding-right: 8px;
  padding-top: 5px;
  border-radius: 10px;
  order: 2;

  &:hover,
  &:focus {
    border-radius: 20px;
  }
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const AnswerInfoWrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  font-weight: 100;
  font-size: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const Answer = styled.div`
  order: 1;
  flex-basis: 4%;
  font-weight: 500;
`;

const AnswerBody = styled.div`
  order: 2;
  font-weight: 350;
  flex-basis: 100%;
  justify-content: space-around;
`;

const AnswerInfo = styled.div`
  order: 1;
  flex-basis: 4%;
`;

const AnswerInfoName = styled.div`
  order: 2;
  flex-basis: 20%;
  border-right: solid;
  border-width: 1px
`;

const AnswerInfoHelp = styled.div`
  order: 3;
  padding-left: 7px;
  padding-right: 7px;
  border-right: solid;
  border-width: 1px
`;

const AnswerInfoReport = styled.button`
  order: 4;
  padding-left: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 20;
  font-size: 10px;
  &:hover {
    text-decoration: underline;
  }
  display: inline-block;

  font-family:  Roboto, Arial, Helvetica, sans-serif;
  letter-spacing: .05rem;
`;

const Image = styled.div`
  order: 1;
  flex-basis: 4%;
`;

export default {
  Img,
  AnswerWrapper,
  AnswerInfoWrapper,
  ImageWrapper,
  Answer,
  AnswerBody,
  AnswerInfo,
  AnswerInfoName,
  AnswerInfoHelp,
  AnswerInfoReport,
  Image,
};
