import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions/SearchQuestions';
import { ProductIdContext, AnswerHelpfulContext, AnswerReportContext, QuestionHelpfulContext, SearchTextContext, AddAnswerContext, AddQuestionContext } from './ProductQuestionContexts';
import { getAnswerHelpful, getQuestionHelpful, getAnswerReport, getNewAnswer, getSearchText } from './ProductQuestionHelpers';

const Container = styled.div`
  width: 1200px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 180px;
  justify-content: center;
`;

function ProductQuestions({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isQuestionList, setIsQuestionList] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const questionsPerPage = 5;

  const fetchInitialQuestions = async () => {
    try {
      const res = await axios.get(`/api/qa/questions?product_id=${productId}&count=${questionsPerPage}`);
      const newQuestionList = questionList.concat(res.data.results);
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList);
      if (newQuestionList.length > 0) {
        setIsQuestionList(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const fetchAllQuestions = async () => {
    let fetchingData = true;
    let newQuestions = [];
    const count = 25;
    let page = 1;

    try {
      while (fetchingData) {
        const url = `/api/qa/questions?product_id=${productId}&page=${page}&count=${count}`;
        const res = await axios.get(url);
        newQuestions = newQuestions.concat(res.data.results);
        fetchingData = res.data.results.length === count;
        page++;
      }
      setQuestionList(newQuestions);
      setFilteredQuestions(newQuestions);
      if (newQuestions.length > 0) {
        setIsQuestionList(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchInitialQuestions();
  }, []);

  const handleExpandQuestions = () => {
    fetchAllQuestions();
  };

  const handleSearchTextChanged = (text) => {
    setSearchText(text);

    if (text.length > 3) {
      const searchTextLowerCase = text.toLowerCase();
      const results = getSearchText(questionList, searchTextLowerCase);
      setFilteredQuestions(results);
    } else {
      setFilteredQuestions(questionList);
    }
  };

  const handleAddedQuestion = () => {
    fetchAllQuestions();
  };

  const handleAddedAnswer = (questionId, newAnswers) => {
    const newList = getNewAnswer(questionList, questionId, newAnswers);
    setQuestionList(newList);
  };

  const handleAnswerHelpful = (answerId, questionId) => {
    const newList = getAnswerHelpful(questionList, answerId, questionId);
    setQuestionList(newList);
  };

  const handleAnswerReport = (answerId, questionId) => {
    const newList = getAnswerReport(questionList, answerId, questionId);
    setQuestionList(newList);
  };

  const handleQuestionHelpful = (questionId) => {
    const newList = getQuestionHelpful(questionList, questionId);
    setQuestionList(newList);
  };

  return (

    <Container>
      {isError && <div>Error with get data...</div>}

      <SearchQuestions
        handleSearchTextChanged={handleSearchTextChanged}
      />
      <br />

      <ProductIdContext.Provider value={productId}>
        <AnswerReportContext.Provider value={handleAnswerReport}>
          <AnswerHelpfulContext.Provider value={handleAnswerHelpful}>
            <QuestionHelpfulContext.Provider value={handleQuestionHelpful}>
              <SearchTextContext.Provider value={searchText}>
                <AddAnswerContext.Provider value={handleAddedAnswer}>
                  <AddQuestionContext.Provider value={handleAddedQuestion}>
                    <QuestionsList
                      questions={filteredQuestions}
                      handleExpandQuestions={handleExpandQuestions}
                      // productId={productId}
                      questionsPerPage={questionsPerPage}
                      // handleAddedQuestion={handleAddedQuestion}
                      // handleAddedAnswer={handleAddedAnswer}
                      // handleAnswerHelpful={handleAnswerHelpful}
                      // handleAnswerReport={handleAnswerReport}
                      // handleQuestionHelpful={handleQuestionHelpful}
                      // searchText={searchText}
                      isQuestionList={isQuestionList}
                    />
                  </AddQuestionContext.Provider>
                </AddAnswerContext.Provider>
              </SearchTextContext.Provider>
            </QuestionHelpfulContext.Provider>
          </AnswerHelpfulContext.Provider>
        </AnswerReportContext.Provider>
      </ProductIdContext.Provider>
    </Container>
  );
}

export default ProductQuestions;
