import React, { useState, useEffect } from 'react';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions/SearchQuestions';
import styled from 'styled-components';
import axios from 'axios';


const Container = styled.div`
  width: 700px;
  // background-color: orange;
`
//25178
//25177
//25183
function ProductQuestions() {

  const props = {
    productId: 25167
  }

  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isQuestionList, setIsQuestionList] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const questionsPerPage = 5;

  const fetchInitialQuestions = async () => {

    try {
      const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&count=${questionsPerPage}`);
      const newQuestionList = questionList.concat(res.data.results)
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList);
      if (newQuestionList.length > 0) {
        setIsQuestionList(true);
      }

    } catch(error) {
      setIsError(true)
    }
  };


  const fetchAllQuestions = async () => {

    let fetchingData = true;
    let newQuestions = [];
    let count = 25;
    let page = 1;

    try {
      while (fetchingData) {

        const url = `/api/qa/questions?product_id=${props.productId}&page=${page}&count=${count}`;

        console.log(url)

        const res = await axios.get(url);

        // Collect this page of questions
        newQuestions = newQuestions.concat(res.data.results);
        //want to keep fetching if this page is full
        fetchingData = res.data.results.length === count;
        page++;
      }

      setQuestionList(newQuestions);
      setFilteredQuestions(newQuestions);
      console.log('new question list:')
      console.log(newQuestions);
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
  }

  // two kinds of functions
  // 1) no side effects
  //    input / output
  //    easy to test - give it some input, expect some output
  // 2) side effects
  //    input
  //    hard to test - give it some input, expect something to have changed

  // test:
  // it('should set the filtered questions to the entire question list when the searchText length is < 3', () => {
    // render(<ProductQuestions />)
    // component.handleSearchTextChanged('ab');
    // expect(all questions) to be in the document
  // });
  // it('should set the filtered questions to matching questions when the searchText length is >= 3', () => {
    // render(<ProductQuestions />)
    // component.handleSearchTextChanged('abcd');
    // expect(only some subset of questions) to be in the document
  // });
  // const handleSearchTextChangedUnitTestFriendly = (text) => {
  //   const newQuestionList = functionalHardWorkGetFilteredQuestions(questionList, text);
  //   setFilteredQuestions(newQuestionList);
  // };

  // const functionalHardWorkGetFilteredQuestions = (questionList, searchText) => {
  //   // does all the hard work
  //   // returns the new question list
  // }

  // const testQuestionlist = [q1, q2, q3]
  // const result = functionalHardWork...(testQuestionList, 'abc')
  // expect(result).to.deep.equal([q1])

  // testing this - you need
  // a component (gets its questions from the server...wtf), that has questions
  // run this function
  // then somehow check the state
  const handleSearchTextChanged = (text) => {
    setSearchText(text);
    if (text.length > 3) {
      const searchTextLowerCase = text.toLowerCase();
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

    fetchAllQuestions();
  }

  const handleAddedAnswer = (questionId, newAnswers) => {

    const newList = questionList.map((question) => {
      if (question.question_id === questionId) {
        question.answers = newAnswers;
      }
      return question;
    });

    setQuestionList(newList);

  }

  const handleAnswerHelpful = (answerId, questionId) => {

    const newList = questionList.map((question) => {

      if (question.question_id === questionId) {
        question.answers[answerId].helpfulness++;
      }
      //we need to find the answer in this question that matches the answerID
      return question;

    });

    setQuestionList(newList);

  }

  const handleAnswerReport = (answerId, questionId) => {

    const newList = questionList.map((question) => {
      if (question.question_id === questionId) {
        delete question.answers[answerId];
      }
      return question;
    });

    setQuestionList(newList);

  }

  const handleQuestionHelpful = (questionId) => {

    const newList = questionList.map((question) => {
      if (question.question_id === questionId) {
        question.question_helpfulness++;
      }
      return question;
    })

    setQuestionList(newList);
  }

  return (

    <Container>

      {isError && <div>Error with get data...</div>}

      <SearchQuestions
        handleSearchTextChanged={handleSearchTextChanged}
      />

      <QuestionsList
        questions={filteredQuestions}
        handleExpandQuestions={handleExpandQuestions}
        productId={props.productId}
        questionsPerPage={questionsPerPage}
        handleAddedQuestion={handleAddedQuestion}
        handleAddedAnswer={handleAddedAnswer}
        handleAnswerHelpful={ handleAnswerHelpful}
        handleAnswerReport={handleAnswerReport}
        handleQuestionHelpful={handleQuestionHelpful}
        searchText={searchText}
        isQuestionList={isQuestionList}
      />

    </Container>
  )
}

export default ProductQuestions;
