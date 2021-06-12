import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';

const SearchButton = styled.button`
width: 40px;
height: 36px;
border: 1px solid #00B4CC;
background: #00B4CC;
text-align: center;
color: #fff;
border-radius: 0 5px 5px 0;
cursor: pointer;
font-size: 20px;
`

const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  transform: translate(-50%, -50%);
`





const SearchQuestions = props => {

  const [searchText, setSearchText] = useState('');

  const handleChange = event => {

    let inputValue = event.target.value;

    setSearchText(inputValue);

    props.handlSearchTextChanged(inputValue);
  }

  return (

      <Search>
        <input
          type="text"
          className="searchQuestions"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          onChange={handleChange}
          value={searchText}
        />

        <SearchButton> search button </SearchButton>
        <i>search icon</i>
      </Search>

  )
}

export default SearchQuestions;

