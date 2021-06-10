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

  // we click expand - this will trigger the fetch epxanded questions to get the rest of hte questions
  //click collpase, this slices this.props.questions WHEN RENDERING
  //but our question list and this.props.qustions will now have the master list of all questions
  //so if we click expand again, no need to axios call
  //just dont call this.props.handleExpandQuestions
  //check if this.props.questions

  handleCollapse() {
    this.setState({
      expanded: false
    })
  }


  render() {
    // todo: don't hardcode 2, let's get pageSize as a prop and use pageSize-1
    const visibleQuestions = this.state.expanded ? this.props.questions : this.props.questions.slice(0, this.props.questionsPerPage - 1);
    const enoughQuestionsToShowExpand = this.props.questions.length > this.props.questionsPerPage - 1;
    const buttonText = this.state.expanded ? "Collapse Questions" : "Show More Questions";

    const toggleFunction = this.state.expanded ? this.handleCollapse : this.handleExpand

    return (
      <>
      <ul>
      {visibleQuestions.map((question, index) =>

       <QuestionListItem
        key={index}
        question={question}
        toggleModal={this.props.toggleModal}
        isModalShowing={this.props.isModalShowing}
        />
      )}
      </ul>
      {enoughQuestionsToShowExpand && <button onClick={toggleFunction}>{buttonText}</button>}
      </>
    )
  }
}

export default QuestionsList;
