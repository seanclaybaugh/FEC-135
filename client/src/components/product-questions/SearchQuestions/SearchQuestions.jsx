import React, { useState } from 'react';
import styled from 'styled-components';
import SearchStyle from './SearchStyle';
// import { IoMdSearch } from 'react-icons/io';

const SearchQuestions = props => {

  const [searchText, setSearchText] = useState('');

  const handleChange = event => {

    let inputValue = event.target.value;
    setSearchText(inputValue);
    props.handlSearchTextChanged(inputValue);
  }

  return (

    <SearchStyle.SearchContainer>
      <SearchStyle.Search
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        onChange={handleChange}
        value={searchText}
      />
    </SearchStyle.SearchContainer>

  )
}

export default SearchQuestions;
