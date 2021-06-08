import React, { useState, useEffect } from 'react';
import QuestionsList from './questionsList/QuestionsList';
import axios from 'axios';

function QuestionsAnswers() {

  const [questionList, setQuestionList] = useState({questions: []});
  const [questionId, setQuestionId] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsError(false);

      try {
        const res = await axios.get('/api/qa/questions?product_id=25171');
        console.log(res.data);
        setQuestionList({questions: res.data.results});
      } catch (error) {
        setIsError(true);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
    {isError && <div>Error with get data...</div>}

    <QuestionsList
      questions={questionList.questions}
    />
    </>
  )
}




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


export default QuestionsAnswers;
