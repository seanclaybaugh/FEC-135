import React from 'react';
import axios from 'axios';
import SharedStyles from './SharedStyles';
class AddQuestionForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      body: '',
      name: '',
      email: '',
    }

    this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  async handleSubmitQuestion(event) {
    event.preventDefault();

    const question = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      product_id: parseInt(this.props.productId)
    }

    console.log('QUESTION')
    console.log(question)

    try {

      const result = await axios.post('/api/qa/questions', question)
      console.log('results from post question')
      console.log(result)

      // this.props.handleAddedQuestion();
    } catch (error) {
      console.log(error)
    }
    this.setState({
      body: '',
      name: '',
      email: '',
    })

  }

  handleFormChange(event) {
    this.setState({[event.target.name]: event.target.value});

  }

  render() {
    return (
      <>
      <SharedStyles.ModalBackground>
        <SharedStyles.ModalContent>
          <SharedStyles.CloseButton onClick={this.props.handleDismissAddQuestion}>X</SharedStyles.CloseButton>
            <form onSubmit={this.handleSubmitQuestion}>
              <label>Your Question:</label>
              <input name="body" value={this.state.body} placeholder="" onChange={this.handleFormChange}/>
              <br/>

              <label>What is your nickname:</label>
              <input name="name" value={this.state.name} placeholder="Example: jackson11!" onChange={this.handleFormChange}/>
              <br/>

              <label>Your Email:</label>
              <input name="email" value={this.state.email} placeholder="Why did you like the product or not?" onChange={this.handleFormChange}/>
              <p>For authentication reasons, you will not be emailed</p>
              <br/>

              <button type="submit">Submit Question</button>
            </form>
            </SharedStyles.ModalContent>
        </SharedStyles.ModalBackground>
      </>
    )
  }
}


export default AddQuestionForm;
