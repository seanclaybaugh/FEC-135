import React, { useContext } from 'react';
import { SearchTextContext } from '../../contexts';

function HighlightedText(props) {

  const searchText = useContext(SearchTextContext);

  if (searchText.length < 3) {
    return <span>{props.textBody}</span>;
  }

  const splitString = props.textBody.split(new RegExp(`(${searchText})`, 'gi'));

  const elements = splitString.map((substring, index) => {
    if (substring.toLowerCase() !== searchText.toLowerCase()) {
      return <span key={index}>{substring}</span>;
    }
    return <mark key={index}>{substring}</mark>;
  });

  return (
    <>
      {elements}
    </>
  );
}

export default HighlightedText;
