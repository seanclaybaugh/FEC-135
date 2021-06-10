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
  // const [loadMoreQuestions, setLoadMoreQuestions] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [nextPage, setNextPage] = useState(1);
  //use custom hook here for modal window
  const {isModalShowing, toggleModal} = useModal();

  let questionsPerPage = 3;

  const fetchInitialQuestions = async () => {

    try {
      const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&count=${questionsPerPage}`);
      const newQuestionList = questionList.concat(res.data.results);
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList);

    } catch(error) {
      setIsError(true)
    }
  };


  const fetchExpandedQuestions = async () => {

    let fetchingData = true;
    const page = 2;

    try {
      while (fetchingData) {
        const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&page=${page}&count=${questionsPerPage}`);
        const newQuestionList = questionList.concat(res.data.results);
        setQuestionList(newQuestionList);
        setFilteredQuestions(newQuestionList);


        fetchingData = res.data.results.length !== 0;
        page++;
      }
    } catch (error) {
      setIsError(true);
    }

  };



  // const fetchQuestions = async (page) => {
  //   setIsError(false);

  //   try {
  //     // console.log('Getting questions for page ' + nextPage);
  //     const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&count=${questionsPerPage}`);
  //     console.log('axios get happens')
  //     console.log(res.data);
  //     const newQuestionList = questionList.concat(res.data.results);
  //     setQuestionList(newQuestionList);
  //     setFilteredQuestions(newQuestionList.slice(0, 2));
  //     // setNextPage(nextPage + 1);

  //     console.log('length')
  //     console.log(newQuestionList.length)

  //     if (newQuestionList.length > 2) {
  //       console.log(loadMoreQuestions)
  //       setLoadMoreQuestions(true)
  //     };
  //   } catch (error) {
  //     setIsError(true);
  //   }
  // };

  useEffect(() => {
    // fetchQuestions();
    fetchInitialQuestions();
  }, []);

  const handleExpandQuestions = () => {
    // fetchQuestions();
    // setFilteredQuestions(questionList);

    // only do this if we haven't yet
    fetchExpandedQuestions();
  }

  // const handleCollapseQuestion = () => {
  //   const newQuestionList = questionList.slice(0, 3);
  //   // setQuestionList(newQuestionList);
  //   setFilteredQuestions(newQuestionList);
  // }

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
//    fetchInitialQuestions();
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
        // handleCollapseQuestion={handleCollapseQuestion}
        // loadMoreQuestions={loadMoreQuestions}
        toggleModal={toggleModal}
        isModalShowing={isModalShowing}
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



// const [fetchData, setFetchData] = useState(false);

// let fetchingData = true;
// let pageNumber =

// try {
//   while (fetchingData) {
//     const res = await axios.get(`/api/qa/questions?product_id=${props.productId}&count=${questionsPerPage}`);
//     fetchingData = res.data.results.length !== 0;
//     pageNumber++;
//   }
// } catch (error) {
//   setIsError(true);
// }

// load 100
// if you get back more than 2, expand is visible
// click expand: show the rest (up to 100)
// click collapse: hide everything but 2

// load 2
// show expand
// click expand: loop to load the rest (up to infinite)
// click collapse: drop everything but 2
// problem: what if there are only 2 questions?

// pageSize (2)
// load count=pageSize+1 (3) GET(count=3,page=1)
// show 2 (questions(count3),state(expanded/collapsed), question list will slice to 2, showing expand if count > 2)
// if count(total) is > 2 (3)
// show expand
// expand behavior: load 3 at a time, starting at 4 (pSize+2), until you get empty

// 1 button
  // expand state
  // collapse state


// GET(count 3, page 1)
// questions(a,b,c)
// QuestionListComponent
  // state: expanded=false
  // props: questions(a,b,c)
  // render:
    // expanded? render all questions, show collapse button
    // not expanded? render 2 questions, show expand button
  // handleExpand
    // state.expanded = true (this will immediately start rendering question 3)
    // AND tell parent to go get all remaining questions