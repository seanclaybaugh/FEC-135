/*

Assemble:

Summary
Review List
AddReview

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function reviewsIndex(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=20&sort=relevant`);
      setReviews(result.data);
    };
    getReviews();
  }, []);

  return (
    <>
      <h3>Reviews</h3>
    </>
  );
}

export default reviewsIndex;
