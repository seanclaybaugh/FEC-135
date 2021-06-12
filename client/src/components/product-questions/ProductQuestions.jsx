import React, { useState, useEffect } from 'react';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions';
import styled from 'styled-components';
import axios from 'axios';


const Container = styled.div`
  width: 700px;
  // background-color: orange;
`


function ProductQuestions() {

  const props = {
    productId: 25167
  }

  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isError, setIsError] = useState(false);
  const [fetchedExpandedQuestions, setFetchedExpandedQuestions] = useState(false);
  const questionsPerPage = 5;

  const fetchInitialQuestions = async () => {

    try {
      const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&count=${questionsPerPage}`);
      const newQuestionList = questionList.concat(res.data.results)
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList);

    } catch(error) {
      setIsError(true)
    }
  };


  const fetchExpandedQuestions = async () => {

    if (fetchedExpandedQuestions) {
      return;
    }

    let fetchingData = true;
    let expandedQuestions = [];
    let page = 2;

    try {
      while (fetchingData) {

        const url = `/api/qa/questions?product_id=${props.productId}&page=${page}&count=${questionsPerPage}`;
        const res = await axios.get(url);

        // Collect this page of questions
        expandedQuestions = expandedQuestions.concat(res.data.results);
        fetchingData = res.data.results.length !== 0;
        page++;
      }

      const newQuestionList = questionList.concat(expandedQuestions);
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList);
      setFetchedExpandedQuestions(true);

    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    // fetchQuestions();
    fetchInitialQuestions();
  }, []);

  const handleExpandQuestions = () => {
    fetchExpandedQuestions();
  }

  const handlSearchTextChanged = (searchText) => {

    if (searchText.length > 3) {
      const searchTextLowerCase = searchText.toLowerCase();
      const results = questionList.filter((question) => {
        if (question.question_body.toLowerCase().indexOf(searchTextLowerCase) !== -1) {
          return true;
        }

        let answers = question.answers;

        for (let key in answers) {
          if (answers[key].body.toLowerCase().indexOf(searchTextLowerCase) !== -1) {
            return true;
          }
        }
      })
      setFilteredQuestions(results);
    } else {
      setFilteredQuestions(questionList);
    }
  }

  const handleAddedQuestion = () => {
//need to ask why api does not return an id back for the created question
  }


  const handleAddedAnswer = () => {
    //need to ask why api does not return an id back for the created answer
  }


  const handleAnswerHelpful = () => {

  }

  const handleAnswerReport = () => {

  }

  const handleQuestionHelpful = () => {

  }



  return (
    <Container>

      {isError && <div>Error with get data...</div>}


      <SearchQuestions
        handlSearchTextChanged={handlSearchTextChanged}
      />


      <QuestionsList
        questions={filteredQuestions}
        handleExpandQuestions={handleExpandQuestions}
        productId={props.productId}
        questionsPerPage={questionsPerPage}
      />
      </Container>

  )
}

export default ProductQuestions;
