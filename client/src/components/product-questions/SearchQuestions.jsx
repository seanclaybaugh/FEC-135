import React, { useState } from 'react';

const SearchQuestions = props => {

  const [searchText, setSearchText] = useState('');

  const handleChange = event => {

    let inputValue = event.target.value;

    setSearchText(inputValue);

    props.handlSearchTextChanged(inputValue);
  }

  return (
    <div>
      <input
        type="text"
        className="searchQuestions"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  )
}

export default SearchQuestions;
