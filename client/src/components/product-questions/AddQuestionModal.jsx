import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import AddQuestionForm from './AddQuestionForm';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.50rem auto;
  border-radius: 3px;
  width: 300px;
  padding: 3rem;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

const AddQuestionModal = ({isShowing, toggle, handleAddedQuestion, productId}) => isShowing ? ReactDOM.createPortal(
  <>
    <Overlay/>
      <Wrapper >
        <Modal>
          <ModalHeader>
            <button type="button"
              onClick={toggle}>
              <span>x</span>
            </button>
            </ModalHeader>

              <AddQuestionForm
              handleAddedQuestion={handleAddedQuestion}
              productId={productId}
              />

            </Modal>
        </Wrapper>
  </>, document.body
) : null;


export default AddQuestionModal;

//Portal - this allows react components to render in another part of the DOM, outside of their parent component
//use a portal to mount this modal component to the end of document.body, rather than as a child of another component
//For better accessibility - portal allows us to append the modal componenet to the outside of inner elements
//createPortal takes 2 arguments: 1 - the component we want to render, 2 - the location of where we want to append the componenet - document.body
