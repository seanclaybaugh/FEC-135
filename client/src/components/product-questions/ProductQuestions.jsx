import React, { useState, useEffect } from 'react';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions';
import AddQuestionModal from './AddQuestionModal';
import useModal from './UseModal';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid teal;
  color: teal;
  margin: 0.5em 1em;
 padding: 1rem 2rem;
`
const Container = styled.div`
text-align: center;
`

function ProductQuestions() {

  const props = {
    productId: 25167
  }

  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [loadMoreQuestions, setLoadMoreQuestions] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [nextPage, setNextPage] = useState(1);
  //use custom hook here for modal window
  const {isModalShowing, toggleModal} = useModal();

  const questionsPerPage = 200;


  const fetchQuestions = async (page) => {
    setIsError(false);

    try {
      // console.log('Getting questions for page ' + nextPage);
      const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&count=${questionsPerPage}`);
      console.log('axios get happens')
      console.log(res.data);
      const newQuestionList = questionList.concat(res.data.results);
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList.slice(0, 2));
      // setNextPage(nextPage + 1);

      if (questionList.length > 2) {
        setLoadMoreQuestions(true)
      };
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleExpandQuestions = () => {
    // fetchQuestions();
    setFilteredQuestions(questionList);
  }

  const handleCollapseQuestion = () => {
    const newQuestionList = questionList.slice(0, 2);
    // setQuestionList(newQuestionList);
    setFilteredQuestions(newQuestionList);
    // setNextPage(2);
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
    fetchQuestions();
  }

  return (
    <>
      {isError && <div>Error with get data...</div>}

      <div>Search for Questions</div>
      <SearchQuestions
        handlSearchTextChanged={handlSearchTextChanged}
      />

      <QuestionsList
        questions={filteredQuestions}
        handleExpandQuestions={handleExpandQuestions}
        handleCollapseQuestion={handleCollapseQuestion}
        loadMoreQuestions={loadMoreQuestions}
      />

      <Container>
     {!isModalShowing && <Button onClick={toggleModal}>Add a Question</Button>}
      <AddQuestionModal
        isModalShowing={isModalShowing}
        toggleModal={toggleModal}
        handleAddedQuestion={handleAddedQuestion}
        productId={props.productId}
      />
      </Container>
    </>
  )
}

export default ProductQuestions;
