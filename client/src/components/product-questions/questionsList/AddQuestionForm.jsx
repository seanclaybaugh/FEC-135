import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SharedStyles from '../SharedStyles';


const AddQuestionForm = props => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [inputValue, setInputValue] = useState('');

  // const onChangeHandler = event => {
  //   setInputValue(event.target.value);
  // }

  const handleSubmitQuestion = async (event) => {

    event.preventDefault();

    let question = {
      body: body,
      name: name,
      email: email,
      product_id: parseInt(props.productId)
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
    setBody('');
    setName('');
    setEmail('');
    // setInputValue('');

  }

  // const handleFormChange = (event) => {
  //   setBody([event.target.name].value);
  //   setName(event.target.value);
  //   setEmail(event.target.value);
  // }

  return (

      <>
      <SharedStyles.ModalBackground>
        <SharedStyles.ModalContent>
          <SharedStyles.CloseButton onClick={props.handleDismissAddQuestion}>X</SharedStyles.CloseButton>
            <form onSubmit={handleSubmitQuestion}>
              <label>Your Question:</label>
              <input name="body" value={body} placeholder="" onChange={e => setBody(e.target.value)}/>
              <br/>

              <label>What is your nickname:</label>
              <input name="name" value={name} placeholder="Example: jackson11!" onChange={e => setName(e.target.value)}/>
              <br/>

              <label>Your Email:</label>
              <input name="email" value={email} placeholder="Why did you like the product or not?" onChange={e => setEmail(e.target.value)}/>
              <p>For authentication reasons, you will not be emailed</p>
              <br/>

              <button type="submit">Submit Question</button>
            </form>
            </SharedStyles.ModalContent>
        </SharedStyles.ModalBackground>
      </>

  )
}

export default AddQuestionForm;
