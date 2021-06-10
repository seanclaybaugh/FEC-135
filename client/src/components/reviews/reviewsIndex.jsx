import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rlist from './RList';
import Summary from './Summary';

function reviewsIndex(props) {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  function reviewSortDrop(target) {

    const getReviews = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=20&sort=${target}`);
      console.log(result.data.results);
      setReviews(result.data.results);
      setIsLoading(false);
    };
    getReviews();
  }

  useEffect(() => {
    const getMeta = async () => {
      const result = await axios.get(`/api/reviews/meta?product_id=${props.productId}`);
      setMetaData(result.data);
    };
    getMeta();
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=20&sort=relevant`);
      setReviews(result.data.results);
      setIsLoading(false);
    };
    getReviews();
  }, []);

  // *** add -Add Review- button with conditional render (appear once is loading is false), separate from main conditional render
  return (
    <>
      {(isLoading || reviews.length === 0) ? <div>No Reviews</div>
        : (
          <>
            <h2>Reviews Main Container</h2>
            <div>
              {`${reviews.length} reviews sorted by:`}
              <select value={''} onChange={(event) => {console.log(event.target.value); reviewSortDrop(event.target.value)}}>
                <option value='relevant'>relevant</option>
                <option value='newest'>newest</option>
                <option value='helpful'>helpful</option>
              </select>
            </div>
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
