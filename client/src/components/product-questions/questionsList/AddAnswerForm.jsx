import React, { useState } from 'react';
import axios from 'axios';
import SharedStyles from '../SharedStyles';

const AddAnswerForm = props => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmitAnswer = async (event) => {

    event.preventDefault();

    const answer = {
      body: body,
      name: name,
      email: email,
      photos: photos
    }

    const question_id = parseInt(props.questionId);
    console.log('question id?')
    console.log(question_id)

    try {

      const result = await axios.post(`/api/qa/questions/${question_id}/answers`, answer)
      console.log('results from add answer')
      console.log(result)
    }  catch (error) {
      console.log(error)
    }
    setBody('');
    setName('');
    setEmail('');
    setPhotos([]);

    props.dismissAnswerForm();
  }

  return (
    <SharedStyles.ModalBackground>
      <SharedStyles.ModalContent>
        <SharedStyles.CloseButton onClick={props.dismissAnswerForm}>X</SharedStyles.CloseButton>
        <div>Submit Your Answer</div>
        <form onSubmit={handleSubmitAnswer}>
          <label>Your Answer:</label>
          <input name="body" value={body} placeholder="" onChange={e => setBody(e.target.value)}/>
          <br/>

          <label>What is your nickname:</label>
          <input name="name" value={name} placeholder="Example: jackson11!" onChange={e => setName(e.target.value)}/>
          <br/>

          <label>Your Email:</label>
          <input name="email" value={email} placeholder="Example: jack@email.com" onChange={e => setEmail(e.target.value)}/>
          <p>For authentication reasons, you will not be emailed</p>
          <br/>

          <label>Upload Your Photos:</label>
          <input name="photos" value={photos} placeholder="Submit Photo" onChange={e => setPhotos(e.target.value)}/>
          <br/>
          <button type="submit">Submit Answer</button>
        </form>
      </SharedStyles.ModalContent>
    </SharedStyles.ModalBackground>

  )
}

export default AddAnswerForm;
