import React from 'react';
import QuestionListItem from './QuestionListItem';

class QuestionsList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>

      questions list
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