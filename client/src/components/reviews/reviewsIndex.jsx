import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rlist from './RList';
import Summary from './Summary';

function reviewsIndex(props) {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('relevant');

  useEffect(() => {
    const getMeta = async () => {
      const result = await axios.get(`/api/reviews/meta?product_id=${25167}`);
      setMetaData(result.data);
    };
    getMeta();
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      const result = await axios.get(`/api/reviews?product_id=${25167}&page=1&count=20&sort=${filter}`);
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
              <Summary metaData={metaData} />
              <Rlist reviews={reviews} />
            </div>
          </>
        )}
    </>

  );
}

export default reviewsIndex;