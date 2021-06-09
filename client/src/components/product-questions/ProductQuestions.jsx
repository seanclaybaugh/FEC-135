import React, { useState, useEffect } from 'react';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions';
import AddQuestionModal from './AddQuestionModal';
import UseModal from './UseModal';
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
  const [questionId, setQuestionId] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isError, setIsError] = useState(false);
  //use custom hook here for modal window
  const {isShowing, toggle} = UseModal();

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsError(false);

      try {
        const res = await axios.get('/api/qa/questions?product_id=25171');
        console.log(res.data);
        setQuestionList(res.data.results);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      {isError && <div>Error with get data...</div>}

      <div>Search for Questions</div>
      <SearchQuestions />

      <QuestionsList
      questions={questionList}
      />

      <div>MORE ANSWERED QUESTIONS</div>

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
