import React from 'react';
import ReactDOM from 'react-dom';

const AddQuestionModal = ({isShowing, toggle}) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button"
          className="modal-close-button"
          data-dismiss="modal"
          aria-label="Close"
          onClick={toggle}>
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </>, document.body
) : null;


export default AddQuestionModal;

//Portal - this allows react components to render in another part of the DOM, outside of their parent component
//use a portal to mount this modal component to the end of document.body, rather than as a child of another component
//For better accessibility - portal allows us to append the modal componenet to the outside of inner elements
//createPortal takes 2 arguments: 1 - the component we want to render, 2 - the location of where we want to append the componenet - document.body
