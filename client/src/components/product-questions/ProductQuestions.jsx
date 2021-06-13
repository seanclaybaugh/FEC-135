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
  // const [fetchedExpandedQuestions, setFetchedExpandedQuestions] = useState(false);
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


  const fetchAllQuestions = async () => {

    // if (fetchedExpandedQuestions) {
    //   return;
    // }

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

    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    // fetchQuestions();
    fetchInitialQuestions();
  }, []);

  const handleExpandQuestions = () => {
    fetchAllQuestions();
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
    //area for optimization - dont always need to fetch new question

    //goal: fetch the new question that was just created - maybe???
    //expanded state - always fetch
    //
    //not expanded:
      //less than 4 questions total (expanded button not shown) - fetch initialData
      //expanded button is shown but not clicked - dont need to fetch

      //looks like i have to do a fetch for all the questions b/c:
      //im not getting a question id back when question is added
      //there doesnt seem to be a deterministic order for questions that have the same helpfulness

    fetchAllQuestions();
  }


  const handleAddedAnswer = () => {
    //need to ask why api does not return an id back for the created answer

    //when new answer is added: fetch the anwsers for that question
    //get the question with the new answers

    //overwrite that question's answers
    //set the question list


    //get the index of the question from the question list where questionID matches
    //retrive the question from questionList at that index
    //replace the answer property from that question
    //reset question list at that index to this new question

    // console.log(questionList)
    // let index;
    // for (let i = 0; i < questionList.length; i++) {
    //   if (questionList[i].question_id === questionId) {
    //     index = i;
    //   }
    // }

    // console.log('index')
    // console.log(index)

    // let questionToUpdate = questionList[index];

    // console.log('questionToUpdate')
    // console.log(questionToUpdate)

    // questionToUpdate.answers = newAnswers;

    // questionList[index] = questionToUpdate;
    // console.log('UGH')
    // console.log(questionList[index]);
    // console.log(questionList)

    // setQuestionList(questionList);


    fetchAllQuestions();

    // console.log(questionId)
    // let index;
    // let question;

    // for (let i = 0; i < questionList.length; i++) {
    //   if (questionList[i].question_id = questionId) {
    //     question = questionList[i].question_id;
    //     console.log('question')
    //     console.log(question)
    //     index = i;
    //   }
    // }
    // console.log('indexxxx')
    // console.log(index)


    // console.log('question')
    // console.log(question)

    // console.log('new answers?')
    // questionList[index][question].answers = newAnswers;
    // console.log(questionList[index][question].answers)

    // questionList[index] = question;

    // setQuestionList(questionList);



  }


  const handleAnswerHelpful = () => {

  }

  const handleAnswerReport = () => {

  }

  const handleQuestionHelpful = () => {

  }

  // console.log('q list')


// questionList.question_id[questionId];
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
        handleAddedQuestion={handleAddedQuestion}
        handleAddedAnswer={handleAddedAnswer}
      />
      </Container>

  )
}

export default ProductQuestions;
