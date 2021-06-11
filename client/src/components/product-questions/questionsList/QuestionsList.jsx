import React from 'react';
import QuestionListItem from './QuestionListItem';
import styled from 'styled-components';
import AddQuestionForm from './AddQuestionForm';
import SharedStyles from '../SharedStyles';

const Container = styled.div`
  overflow-y: scroll;
  height: 500px;
  width: 700px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
`



class QuestionsList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      addQuestionClicked: false
    }

    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleAddQuestionClicked = this.handleAddQuestionClicked.bind(this);
    this.handleDismissAddQuestion = this.handleDismissAddQuestion.bind(this);
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

  handleAddQuestionClicked() {
    this.setState({
      addQuestionClicked: !this.state.addQuestionClicked
    })
  }

  handleDismissAddQuestion() {
    this.setState({
      addQuestionClicked: false
    })
  }


  render() {

    console.log(this.props.questions)
    const visibleQuestions = this.state.expanded ? this.props.questions : this.props.questions.slice(0, this.props.questionsPerPage - 1);
    const enoughQuestionsToShowExpand = this.props.questions.length > this.props.questionsPerPage - 1;
    const buttonText = this.state.expanded ? "Collapse Questions" : "Show More Questions";
    const toggleFunction = this.state.expanded ? this.handleCollapse : this.handleExpand;

    return (
      <>
      <Container>
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
      </Container>

      <div>
        {enoughQuestionsToShowExpand && <SharedStyles.Button onClick={toggleFunction}>{buttonText}</SharedStyles.Button>}

        <SharedStyles.Button onClick={this.handleAddQuestionClicked}>Add Question</SharedStyles.Button>
        {this.state.addQuestionClicked && <AddQuestionForm
        handleDismissAddQuestion={this.handleDismissAddQuestion}
        productId={this.props.productId}
        />}
      </div>

      </>

    )
  }
}

export default QuestionsList;
