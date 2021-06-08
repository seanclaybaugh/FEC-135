import React, { useState, useEffect } from 'react';

class SearchQuestions extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (

      <div>
        <input type="text" className="searchQuestions" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS" />
        <button type="submit" className="searchButton">Search here</button>
      </div>

    )
  }

}

export default SearchQuestions;
