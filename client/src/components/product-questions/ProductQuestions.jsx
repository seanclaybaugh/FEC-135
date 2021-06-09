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
  const [answers, setAnswers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  //use custom hook here for modal window
  const {isShowing, toggle} = useModal();

  const pageSize = 2;
  // thought:
  // we've defined pageSize here.. we could pass it as a prop to our child (like QuestionList)
  // questionList could decide whether to show collapseButton by checking if questions.count > pageSize (only collapse if this is true)

  // as for load more, the problem now is that loadMore stays on the page even after you've loaded everything!
  // this one is trickier, but you do know that you're done when your GET/ request is successful but empty
  // you could capture that in state and supply it to your child (QuestionList) as a prop
  // (don't show loadMore if you're done loading)

  // one caveat - if you post a new question, maybe that isDone state needs to be reset...
  // ALSO, handle added question probably needs to be re-done
  // the way we understood it previously, we thought we needed to reload to get the question to show up
  // but now, it's fair that you have to click "load more" for the question you just posted to show up

  const fetchQuestions = async (page) => {
    setIsError(false);

    try {
      console.log('Getting questions for page ' + nextPage);
      const res = await axios.get('/api/qa/questions?product_id=' + props.productId + '&page=' + nextPage + '&count=' + pageSize);
      console.log('axios get happens')
      console.log(res.data);
      const newQuestionList = questionList.concat(res.data.results);
      setQuestionList(newQuestionList);
      setFilteredQuestions(newQuestionList);
      setNextPage(nextPage + 1);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleLoadMore = () => {
    fetchQuestions();
  }

  const handleCollapseQuestion = () => {
    const newQuestionList = questionList.slice(0, pageSize);
    setQuestionList(newQuestionList);
    setFilteredQuestions(newQuestionList);
    setNextPage(2);
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
      handleLoadMore={handleLoadMore}
      handleCollapseQuestion={handleCollapseQuestion}
      />

      <Container>
     {!isShowing && <Button onClick={toggle}>Add a Question</Button>}
      <AddQuestionModal
      isShowing={isShowing}
      toggle={toggle}
      handleAddedQuestion={handleAddedQuestion}
      productId={props.productId}
      />
      </Container>
    </>
  )
}

export default ProductQuestions;
