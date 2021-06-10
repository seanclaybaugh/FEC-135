import React, { useState, useEffect } from 'react';
import ReviewListItem from './RListItem';
// Map through reviews populating list

function Rlist({ reviews }) {
  const [nToDisplay, setNToDisplay] = useState(2);
  let reviewArr = reviews.slice(0, nToDisplay);

  return (
    <div>
      <h3> Review List</h3>
      <div>{reviewArr.map(({ body, date, helpfulness, photos, rating, recommend, response, reviewer_id, reviewer_name, summary }) => { return <ReviewListItem
    body={body} date={date} helpfulness={helpfulness} photos={photos} rating={rating}
    recommend={recommend} response={response} reviewer_id={reviewer_id}
    reviewer_name={reviewer_name} summary={summary} key={reviewer_name} />
  }) }
      </div>
      {(reviews.length > nToDisplay - 1) &&
      <button onClick={()=> {setNToDisplay(nToDisplay + 2)}}>See More...</button>}
      <button>Add Review</button>
    </div>
  );
}

export default Rlist;

//display 2 reviews
//if there are more than 2 reviews, display More reviews button
//onClick, display 2 more reviews

