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
    this.props.handleExpandQuestions();
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
    const visibleQuestions = this.state.expanded ? this.props.questions : this.props.questions.slice(0, 2);
    const enoughQuestionsToShowExpand = this.props.questions.length > 2;
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
