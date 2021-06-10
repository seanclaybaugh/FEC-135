import {useState} from 'react';

const useAnswerModal = () => {

  //instantiate new isShowing and setIsShowing state values to store current view state of the modal
  const [isAnswerModalShowing, setIsAnswerModalShowing] = useState(false);

  //declare a function called toggle to change the value of isShowing to be the opposite of what it is currently
  function toggleAnswerModal() {
    setIsAnswerModalShowing(!isAnswerModalShowing);
  }

  //return the value of isShowing and toggle from this custom hook so components can have access to them
  return {
    isAnswerModalShowing,
    toggleAnswerModal,
  }
}

export default useAnswerModal;
