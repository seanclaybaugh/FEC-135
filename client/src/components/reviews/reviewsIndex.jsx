import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Rlist from './RList';
import Summary from './Summary';
import styled from 'styled-components';
import AddReviewModal from './AddReviewModal';
import useModals from './useModals';
import reviewSortDrop from './reviewSortDrop';

const MainContainer = styled.div`
display: flex;
font-family: 'Roboto', sans-serif;
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

function reviewsIndex(props) {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dropdown, setDropdown] = useState('relevant');
  const {isShowing, toggle} = useModals();
  const [username, setUsername] = useState('')
  const [reviewSummary, setReviewSummary] = useState('');
  const [product, setProduct] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);


  

  function reviewSortDrop(target) {

    const getReviews = async () => {
      const result = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=20&sort=${target}`);
      console.log(result.data.results);
      setReviews(result.data.results);
      setIsLoading(false);
    };
    getReviews();
    setDropdown(target);
  }

  useEffect(() => {
    const getMeta = async () => {
      const result = await axios.get(`/api/reviews/meta?product_id=${props.productId}`);
      setMetaData(result.data);
    };
    getMeta();
  }, []);

  useEffect(()=>{
    const getProduct = async () => {
      const result = await axios.get(`/api/products/${props.productId}`);
      setProduct(result.data.name);
    };
    getProduct();
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
            <div>
              {`${reviews.length} reviews, sorted by:`}
              <select value={dropdown} onChange={(event) => {console.log(event.target.value); reviewSortDrop(event.target.value)}}>
                <option value='relevant'>relevant</option>
                <option value='newest'>newest</option>
                <option value='helpful'>helpful</option>
              </select>
            </div>
            <MainContainer>
              <Summary metaData={metaData} />
              <Rlist reviews={reviews} />
            </MainContainer>

          </>
        )}
        <div>
              {!isShowing && <Button1 onClick={toggle}>Add Review</Button1>}
              <AddReviewModal isShowing={isShowing} toggle={toggle} setUsername={setUsername} username={username} reviewSummary={reviewSummary} setReviewSummary={setReviewSummary} product={product} reviewBody={reviewBody} setReviewBody={setReviewBody} />
        </div>
    </>

  );
}

export default reviewsIndex;
