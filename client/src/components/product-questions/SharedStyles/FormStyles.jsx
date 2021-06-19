import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 0;
`

const TextBody = styled.textarea`
  margin: 8px auto;
  width: 90%;
  height: 100px;
  padding: 15px 22px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  border-radius: 4px;
  resize: none;
`

const TextInfo = styled.textarea`
  margin: 8px auto;
  width: 90%;
  height: 50px;
  padding: 15px 22px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  border-radius: 4px;
  resize: none;
`

export default {
  Container,
  TextBody,
  TextInfo,
}
