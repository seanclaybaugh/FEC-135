import {useState} from 'react';

const useModal = () => {

  //instantiate new isShowing and setIsShowing state values to store current view state of the modal
  const [isModalShowing, setIsModalShowing] = useState(false);

  //declare a function called toggle to change the value of isShowing to be the opposite of what it is currently
  function toggleModal() {
    setIsModalShowing(!isModalShowing);
  }

  //return the value of isShowing and toggle from this custom hook so components can have access to them
  return {
    isModalShowing,
    toggleModal,
  }
}

export default useModal;
