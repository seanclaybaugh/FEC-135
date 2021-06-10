import React from 'react';
import QuestionListItem from './QuestionListItem';
class QuestionsList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleExpand() {
    // if we have 3 or less questions, then do this
    this.props.handleExpandQuestions();
    // otherwise, no need! we've already got all the questions, and we can just set expanded=true
    this.setState({
      expanded: true
    })
  }

  handleCollapse() {
    this.setState({
      expanded: false
    })
  }


  render() {

    const visibleQuestions = this.state.expanded ? this.props.questions : this.props.questions.slice(0, this.props.questionsPerPage - 1);
    const enoughQuestionsToShowExpand = this.props.questions.length > this.props.questionsPerPage - 1;
    const buttonText = this.state.expanded ? "Collapse Questions" : "Show More Questions";
    const toggleFunction = this.state.expanded ? this.handleCollapse : this.handleExpand;

    return (
      <>
      <ul>
      {visibleQuestions.map((question, index) =>

       <QuestionListItem
        key={index}
        question={question}
        toggleAnswerModal={this.props.toggleAnswerModal}
        isAnswerModalShowing={this.props.isAnswerModalShowing}
        />
      )}
      </ul>
      {enoughQuestionsToShowExpand && <button onClick={toggleFunction}>{buttonText}</button>}
      </>
    )
  }
}

export default QuestionsList;
