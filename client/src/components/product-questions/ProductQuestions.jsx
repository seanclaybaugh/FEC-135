import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions/SearchQuestions';
import getQuestionHelpful from './ProductQuestionHelpers/getQuestionHelpful.js';
import getAnswerReport from './ProductQuestionHelpers/getAnswerReport.js'

const Container = styled.div`
  width: 700px;
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
      const results = questionList.filter((question) => {
        if (question.question_body.toLowerCase().indexOf(searchTextLowerCase) !== -1) {
          return true;
        }

        const { answers } = question;

        for (const key in answers) {
          if (answers[key].body.toLowerCase().indexOf(searchTextLowerCase) !== -1) {
            return true;
          }
        }
      });
      setFilteredQuestions(results);
    } else {
      setFilteredQuestions(questionList);
    }
  };

  const handleAddedQuestion = () => {
    fetchAllQuestions();
  };

  const handleAddedAnswer = (questionId, newAnswers) => {
    const newList = questionList.map((question) => {
      if (question.question_id === questionId) {
        question.answers = newAnswers;
      }
      return question;
    });

    setQuestionList(newList);
  };

  const handleAnswerHelpful = (answerId, questionId) => {
    const newList = questionList.map((question) => {
      if (question.question_id === questionId) {
        question.answers[answerId].helpfulness++;
      }
      return question;
    });

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

      <QuestionsList
        questions={filteredQuestions}
        handleExpandQuestions={handleExpandQuestions}
        productId={productId}
        questionsPerPage={questionsPerPage}
        handleAddedQuestion={handleAddedQuestion}
        handleAddedAnswer={handleAddedAnswer}
        handleAnswerHelpful={handleAnswerHelpful}
        handleAnswerReport={handleAnswerReport}
        handleQuestionHelpful={handleQuestionHelpful}
        searchText={searchText}
        isQuestionList={isQuestionList}
      />
    </Container>
  );
}

export default ProductQuestions;
