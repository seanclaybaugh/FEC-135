import React, { useState, useContext } from 'react';
import axios from 'axios';
import ModalStyles from '../../SharedStyles/ModalStyles';
import { ProductIdContext } from '../../contexts';

const AddQuestionForm = (props) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {id, addQuestionContext} = useContext(ProductIdContext);
  const productId = id;
  const handleAddedQuestion = addQuestionContext;

  const addQuestion = async (event) => {
    event.preventDefault();

    if (body.length === 0) {
      alert('Please enter an question!');
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

    const question = {
      body,
      name,
      email,
      product_id: parseInt(productId),
    };

    try {
      const result = await axios.post('/api/qa/questions', question);

      handleAddedQuestion();
    } catch (error) {
      console.log(error);
    }
    setBody('');
    setName('');
    setEmail('');

    props.handleDismissAddQuestion();
  };

  return (
    <>
      <ModalStyles.ModalBackground>
        <ModalStyles.ModalContent>
            <ModalStyles.CloseButton onClick={props.handleDismissAddQuestion}>
              X
            </ModalStyles.CloseButton>

          <form onSubmit={addQuestion}>
            <label>Your Question: </label>
            <input name="body" value={body} placeholder="" onChange={(e) => setBody(e.target.value)} />
            <br />

            <label>What is your nickname: </label>
            <input name="name" value={name} placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)} />
            <br />

            <label>Your Email: </label>
            <input name="email" value={email} placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)} />
            <p>For authentication reasons, you will not be emailed</p>
            <br />

            <ModalStyles.ModalSubmitBtn type="submit">Submit Question</ModalStyles.ModalSubmitBtn>
          </form>
        </ModalStyles.ModalContent>
      </ModalStyles.ModalBackground>
    </>
  );
};

export default AddQuestionForm;
