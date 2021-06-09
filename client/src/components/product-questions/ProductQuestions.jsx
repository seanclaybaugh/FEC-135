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

  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);


  const [questionId, setQuestionId] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isError, setIsError] = useState(false);
  //use custom hook here for modal window
  const {isShowing, toggle} = useModal();

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsError(false);

      try {
        const res = await axios.get('/api/qa/questions?product_id=25171');
        console.log(res.data.results);
        setQuestionList(res.data.results);
        setFilteredQuestions(res.data.results);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchQuestions();
  }, []);

  const handlSearchTextChanged = (searchText) => {
    console.log('search text changed: ' + searchText);
    // if searchText has fewer than 3 characters
      // then: list should return to the state where it is not filtered
        // detail: set _ to _
        //set filteredQuestions to the allQuestions
    // else
      // more than 3 char - filter to those containing matching text
      // for a given question: include in results (WITH ALL ANSWERS) if searchText appears in question or any of its answers
        // detail: questionList, filteredQuestions
        // inputs: searchText, questionList
        // output: filteredQuestions
        // filteredQuestions = <some code that uses searchText and questionList>

    if (searchText.length > 3) {
      const results = questionList.filter((question) => {
        if (question.question_body.indexOf(searchText) !== -1) {
          return true;
        }

        // does any answer include searchText?
        let answers = question.answers;
        console.log('answers')
        console.log(answers)

        for (let key in answers) {
          console.log('in')
          console.log(answers[key].body)
          if (answers[key].body.indexOf(searchText) !== -1) {
            console.log('yay')
            return true;
          }
        }
        })

        setFilteredQuestions(results);
  } else {
    setFilteredQuestions(questionList)
  }
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
      />

      <div>LOAD MORE QUESTIONS</div>

      <Container>
     {!isShowing && <Button onClick={toggle}>Add a Question</Button>}
      <AddQuestionModal
      isShowing={isShowing}
      toggle={toggle}
      />
      </Container>
    </>
  )
}

export default ProductQuestions;


// class QuestionsAnswers extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       questions: [],
//       answers: [],
//       productId: ''
//     }

//     this.getData = this.getData.bind(this);
//   }

//   getData() {
//     axios.get('/api/qa/questions?product_id=25171')
//     .then((res) => {
//       console.log(res.data)

//       const questionsList = res.data.results;
//       const id = res.data.product_id;

//       this.setState({
//         questions: questionsList,
//         productId: id
//       })
//     })
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   render() {
//     return (
//       <>
//       <b>hello from questions and answers</b>
//       <br/>
//       <br/>
//       <br/>
//       <QuestionsList
//       questions={this.state.questions}
//       />
//       </>
//     )
//   }

// }
