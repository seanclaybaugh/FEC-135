import React from 'react';
import QuestionListItem from './QuestionListItem';
class QuestionsList extends React.Component {

  constructor(props) {
    super(props)

    // this.state = {
    //   expanded: false,
    // }

    // this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  // toggleExpanded() {
  //   this.setState({
  //     expanded: !this.state.expanded
  //   })
  // }

  render() {
    // const buttonTitle = this.state.expanded ? "Show Fewer Questions" : "Show More Questions"
    // const questions = this.state.expanded ? this.props.questions : this.props.questions.slice(0, 2);


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
      <button onClick={this.props.handleLoadMore}>Load More Questions</button>
      <button onClick={this.props.handleCollapseQuestion}>Collapse Questions</button>
      </>
    )
  }
}


export default QuestionsList;