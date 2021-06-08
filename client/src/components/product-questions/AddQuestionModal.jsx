import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const AddQuestionModal = ({isShowing, toggle}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;


export default AddQuestionModal;


// function AddQuestionModal(props) {

//   const {showModal, closeModal} = props;

//   return (
//     <>

//       <div className={showModal ? "modal" : "hide"}>
//         <button onClick={closeModal}>X</button>
//         <h2>Modal heading</h2>
//         <p>modal content</p>
//       </div>

//     </>
//   )

// }