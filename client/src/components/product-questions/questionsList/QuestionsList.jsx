import React from 'react';
import QuestionListItem from './QuestionListItem';

class QuestionsList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      questions: this.props.questions.slice(0, 2),
      clickMoreQuestions: false,
    }
  }

  render() {
    return (
      <>
      <ul>
      {this.props.questions.map((question, index) =>

       <QuestionListItem
        key={index}
        question={question}
        />
      )}
      </ul>
      </>
    )
  }
}


export default QuestionsList;