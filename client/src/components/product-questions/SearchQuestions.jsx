import React, { useState, useEffect } from 'react';

class SearchQuestions extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newSearchText = event.target.value;
    this.setState({
      searchText: newSearchText
    });

    this.props.handlSearchTextChanged(newSearchText);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="searchQuestions"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          onChange={this.handleChange}
          value={this.state.searchText}
        />
      </div>
    );
  }
}

export default SearchQuestions;
