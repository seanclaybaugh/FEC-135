import React from 'react';
import QuestionsList from './QuestionsList';
import axios from 'axios';


class QuestionsAnswers extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      answers: [],
      productId: ''
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('/api/qa/questions?product_id=25171')
    .then((res) => {
      console.log(res.data)

      const questionsList = res.data.results;
      const id = res.data.product_id;

      this.setState({
        questions: questionsList,
        productId: id
      })
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
      <b>hello from questions and answers</b>
      <br/>
      <br/>
      <br/>
      <QuestionsList
      questions={this.state.questions}
      />
      </>
    )
  }

}


export default QuestionsAnswers;
