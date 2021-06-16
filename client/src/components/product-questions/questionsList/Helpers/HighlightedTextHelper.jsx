import React from 'react';

// test()
//   render(<HighlightedText textBody=".." searchText="..." />)
//   expect() to be in the dom

// rendering the text body

function HighlightedText(props) {
  if (props.searchText.length < 3) {
    return <span>{props.textBody}</span>;
  }

  const splitString = props.textBody.split(new RegExp(`(${props.searchText})`, 'gi'));

  const elements = splitString.map((substring, index) => {
    if (substring.toLowerCase() !== props.searchText.toLowerCase()) {
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
