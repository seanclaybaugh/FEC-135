import React, { useState } from 'react';
import axios from 'axios';
import ModalStyles from '../../SharedStyles/ModalStyles';
import FormStyles from '../../SharedStyles/FormStyles';

const AddAnswerForm = (props) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmitAnswer = async (event) => {
    event.preventDefault();

    if (body.length === 0) {
      alert('Please enter an answer!');
      return;
    }

    if (name.length === 0) {
      alert('Please enter an name!');
      return;
    }

    if (email.length === 0 || email.indexOf('@') === -1) {
      alert('Please enter an valid email');
      return;
    }

    const answer = {
      body,
      name,
      email,
      photos,
    };

    const questionId = parseInt(props.questionId);

    try {
      const result = await axios.post(`/api/qa/questions/${questionId}/answers`, answer);
    } catch (error) {
      console.log(error);
    }
    setBody('');
    setName('');
    setEmail('');
    setPhotos([]);

    props.addAnswer();
    props.dismissAnswerForm();
  };

  return (
    <ModalStyles.ModalBackground>
      <ModalStyles.ModalContent>
        <ModalStyles.CloseButton onClick={props.dismissAnswerForm}>X</ModalStyles.CloseButton>
          <FormStyles.Container>
            <div>Submit Your Answer for: </div>
            <br />
            <div>{props.question}</div>
            <br />

            <form onSubmit={handleSubmitAnswer}>
              <label>Your Answer: </label>
              <FormStyles.TextBody name="body" value={body} placeholder="" onChange={(e) => setBody(e.target.value)} />
              <br />

              <label>What is your nickname: </label>
              <FormStyles.TextInfo name="name" value={name} placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)} />
              <br />

              <label>Your Email: </label>
              <FormStyles.TextInfo name="email" value={email} placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)} />
              <p>(For authentication reasons, you will not be emailed)</p>


              <label>Upload Your Photos: </label>
              <FormStyles.TextInfo name="photos" value={photos} placeholder="Submit Photo" onChange={(e) => setPhotos(e.target.value)} />
              <br />
              <br />
            <ModalStyles.ModalSubmitBtn type="submit">Submit Answer</ModalStyles.ModalSubmitBtn>
          </form>
        </FormStyles.Container>
      </ModalStyles.ModalContent>
    </ModalStyles.ModalBackground>

  );
};

export default AddAnswerForm;
