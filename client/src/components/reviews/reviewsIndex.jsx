/*

Assemble:

Summary
Review List
AddReview

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rlist from './RList';
import Summary from './Summary';

function reviewsIndex(props) {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [numRate, setNumRate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('relevant');

  useEffect(() => {
    const getMeta = async () => {
      const result = await axios.get(`/api/reviews/meta?product_id=${props.productId}`);
      setMetaData(result.data);
    };
    getMeta();
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=20&sort=${filter}`);
      setReviews(result.data.results);
      setIsLoading(false);
    };
    getReviews();
  }, []);

  return (
    <>
      {(isLoading) ? <div>Loading</div>
        : (
          <>
            <h2>Reviews</h2>
            <div>{`${reviews.length} reviews sorted by: DROPDOWN`}</div>
            <div>
              <Summary metaData={metaData} numRate={numRate} />
              <Rlist reviews={reviews} />
            </div>
          </>
        )}
    </>

  );
}

export default reviewsIndex;
