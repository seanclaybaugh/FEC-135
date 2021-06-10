import React from 'react';
import QuestionListItem from './QuestionListItem';
class QuestionsList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      expandQuestions: false
    }

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

    toggleExpanded() {
      this.setState({
        expandQuestions: !this.state.expandQuestions
      })

      if (this.state.expandQuestions) {
        this.props.handleCollapseQuestion();
      } else {
        this.props.handleExpandQuestions();
      }
    }


  render() {

    const buttonText = this.state.expandQuestions ? "Collapse Questions" : "Show More Questions";

    return (
      <>
      <ul>
      {this.props.questions.map((question, index) =>

       <QuestionListItem
        key={index}
        question={question}
        toggleModal={this.props.toggleModal}
        isModalShowing={this.props.isModalShowing}
        />
      )}
      </ul>
      {!this.props.loadMoreQuestions && <button onClick={this.toggleExpanded}>{buttonText}</button>}
      {/* <button onClick={this.props.handleExpandQuestions}>Load More Questions</button>
      <button onClick={this.props.handleCollapseQuestion}>Collapse Questions</button> */}
      </>
    )
  }
}

export default QuestionsList;
