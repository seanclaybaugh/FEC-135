import React, { useState, useEffect } from 'react';

function ReviewListItem ({ body, date, helpfulness, photos, rating, recommend, response, reviewer_id, reviewer_name, summary }) {
  return (
    <>
    <div>
      <div>
        {`Rated: ${rating}`}
      </div>
      <div>
        {reviewer_name}
      </div>
      <div>
        {date}
      </div>
    </div>
    <div>
      <div>
        <h4>{summary}</h4>
      </div>
      <span>
          {body}
      </span>
    </div>
    </>
  );
}

export default ReviewListItem;

/*
Review Object Properties
val.body = ''
val.date = ''
val.helpfulness= int
val.photos = []
val.rating = int
val.recommend = bool
val.response = ''
val.reviewer_id = int
val.reviewer_name = ''
val.summary = ''
*/
