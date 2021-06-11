import React from 'react';
import QuestionListItem from './QuestionListItem';
import styled from 'styled-components';

const Container = styled.div`
  overflow-y: scroll;
  height: 500px;
  width: 700px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
`
const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid teal;
  color: teal;
  margin: 0.5em 1em;
 padding: 1rem 2rem;
`

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
      {enoughQuestionsToShowExpand && <Button onClick={toggleFunction}>{buttonText}</Button>}
      </div>

      </>

    )
  }
}

export default QuestionsList;
