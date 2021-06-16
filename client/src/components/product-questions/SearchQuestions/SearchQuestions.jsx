import React, { useState } from 'react';
import SearchStyle from './SearchStyle';

const SearchQuestions = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchText(inputValue);
    props.handleSearchTextChanged(inputValue);
  };

  return (

    <SearchStyle.SearchContainer>
      <SearchStyle.Search
        searchId="search-button"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        onChange={handleChange}
        value={searchText}
      />
    </SearchStyle.SearchContainer>

  );
};

export default SearchQuestions;
