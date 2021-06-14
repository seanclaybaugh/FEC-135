import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';


const Starinput = styled.input`
display: none;
`
const Ratingdiv = styled.div`
font-family: Roboto, sans-serif;
font-size: 1.1em;
font-weight: 200;
margin: 0px 0px 0px 10px;
`
const StarRow = styled.div`
display:flex;

margin: 0px 0px 5px 0px`

function StarRating ({setRating, rating}) {
  const [hover, setHover] = useState(null);

  return (
  <StarRow>
    {[...Array(5)].map((star, i)=> {
      const ratingval = i + 1;

      return <label key={ratingval}>
        <Starinput
        type='radio'
        value={ratingval}
        onClick={()=> {ratingval === rating ? setRating(null) : setRating(ratingval)}} />

        <FaStar size={17}
        color={ratingval <= (hover || rating) ? "#FFA701": "#e2e2e2" } value={ratingval}
        onMouseEnter={()=> {setHover(ratingval)}}
        onMouseLeave={()=> {setHover(null)}}/>
        </label>})}

        <Ratingdiv>
          {rating === 1 && <span>Poor</span>}
          {rating === 2 && <span>Fair</span>}
          {rating === 3 && <span>Average</span>}
          {rating === 4 && <span>Good</span>}
          {rating === 5 && <span>Great</span>}
       </Ratingdiv>
  </StarRow>
);

}

export default StarRating;
