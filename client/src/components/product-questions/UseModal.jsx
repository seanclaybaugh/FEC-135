import {useState} from 'react';

const useModal = () => {

  //instantiate new isShowing and setIsShowing state values to store current view state of the modal
  const [isShowing, setIsShowing] = useState(false);

  //declare a function called toggle to change the value of isShowing to be the opposite of what it is currently
  function toggle() {
    setIsShowing(!isShowing);
  }

  //return the value of isShowing and toggle from this custom hook so components can have access to them
  return {
    isShowing,
    toggle,
  }
}

export default useModal;
