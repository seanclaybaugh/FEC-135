import React, { useState, useEffect } from 'react';
import QuestionsList from './questionsList/QuestionsList';
import SearchQuestions from './SearchQuestions';
import AddQuestionModal from './AddQuestionModal';
import UseModal from './UseModal';
import axios from 'axios';

function ProductQuestions() {

  const [questionList, setQuestionList] = useState([]);
  const [questionId, setQuestionId] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  // const [isAnswerModalOpen, setisAnswerModalOpen] = useState(false);

  // const openModal = () => setIsQuestionModalOpen(true);
  // const closeModal = () => setIsQuestionModalOpen(false);

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

      <div>Add a Question</div>
     {!isShowing && <button className="button-default" onClick={toggle}>Show Modal</button>}
      <AddQuestionModal
      isShowing={isShowing}
      toggle={toggle}
      />


      {/* {!isQuestionModalOpen && <button onClick={openModal}>Show question Modal</button>}
      <AddQuestionModal
      closeModal={closeModal}
      showModal={isQuestionModalOpen}
      /> */}
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
