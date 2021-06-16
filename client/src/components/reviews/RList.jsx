import React, { useState, useEffect } from 'react';
import ReviewListItem from './RListItem';
import styled from 'styled-components';

const RListContainer = styled.div`
  display: flex-column;
  justify-content: space-between;
  margin-left: 1em;
  margin-top: 1em;
  `
const Button1 = styled.button`
   display:inline-block;
   padding:0.5em 3em;
   border:0.16em solid black;
   margin:0 0.3em 0.3em 0;
   box-sizing: border-box;
   text-decoration:none;
   text-transform:uppercase;
   font-family:'Roboto',sans-serif;
   font-weight:400;
   background-color: black;
   color: white;
   text-align:center;
   transition: all 0.15s;
   &:hover {
     background-color: white;
     color: black;
     border-color: white;
   }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  `

function Rlist({ reviews }) {
  const [nToDisplay, setNToDisplay] = useState(2);
  let reviewArr = reviews.slice(0, nToDisplay);

  return (
    <div>
      <RListContainer>{reviewArr.map(({ body, date, helpfulness, photos, rating, recommend, response, reviewer_id, reviewer_name, summary }) => { return <ReviewListItem
    body={body} date={date} helpfulness={helpfulness} photos={photos} rating={rating}
    recommend={recommend} response={response} reviewer_id={reviewer_id}
    reviewer_name={reviewer_name} summary={summary} key={reviewer_name} />
  }) }
      </RListContainer>
      <ButtonContainer>
      {(reviews.length > nToDisplay - 1) &&

      <Button1 onClick={()=> {setNToDisplay(nToDisplay + 2)}}>See More...</Button1>}
      {(nToDisplay > 2) && <Button1 onClick= {() => setNToDisplay(2)}>See Less</Button1>}
      </ButtonContainer>
    </div>
  );
}

export default Rlist;



