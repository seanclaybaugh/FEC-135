import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Rlist from './RList';
import Summary from './Summary';

import styled from 'styled-components';
import AddReviewModal from './AddReviewModal';
import useModals from './useModals';
import config from '../../../../config.js'
import postHelperChars from './helpers/postHelperChars'

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
   margin-left: 20px;
   &:hover {
     cursor: pointer;
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
  const [thumbs, setThumbs] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [fitNum, setFitNum] = useState(null);
  const [comNum, setComNum] = useState(null);
  const [lenNum, setLenNum] = useState(null);
  const [qualNum, setQualNum] = useState(null);
  const [widthNum, setWidthNum] = useState(null);
  const [sizeNum, setSizeNum] = useState(null);
  const [characteristics, setCharacteristics] = useState({})

  function reviewSubmit () {

      const charObjHelper = (characteristics) => {
          let result = {}
          for (var key in characteristics) {
            let val;
            key == 'Fit' ? val = fitNum
            : key == 'Size' ? val = sizeNum
            : key == 'Quality' ? val = qualNum
            : key == 'Width' ? val = widthNum
            : key == 'Length' ? val = lenNum
            : val = comNum
            result[characteristics[key]] = val
          }
          return result;
        };
    const charsobj = charObjHelper(characteristics);

    const body = {
      product_id: props.productId,
      rating: rating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: recommend,
      name: username,
      email: email,
      photos: photoUrls,
      characteristics: charsobj,
    }

    const postReview = async () => {
      const result = await axios.post(`/api/reviews`, body);

      console.log(result);

      const reviews = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=30&sort=relevant`);
      setReviews(reviews.data.results);
      setReviewBody('');
      setReviewSummary('');
      setRating(null);
      setUsername('');
      setRecommend(null);
      setFitNum(null);
      setComNum(null);
      setLenNum(null);
      setQualNum(null);
      setWidthNum(null);
      setEmail('');
    }

    postReview();

  }


/*
uploads image files to imgBB and returns thumb/image urls
TODO:
debug upload button/form submit issue
handle multiple image uploads at once
limit to 5 images- conditional render based on photos.length => 5
display thumbnails in modal
figure out upload button to not close modal or reset review data
*/
  function fileUploadHandler () {
    const fd = new FormData();
    fd.append('image', photos[0], photos[0].name);
    const getUrls = async (form) =>{
      const result = await axios.post(`https://api.imgbb.com/1/upload?key=${config.imgtoken}`, form)
      let x = thumbs;
      let y = photoUrls;
      x.push(result.data.data.thumb.url);
      y.push(result.data.data.image.url);
      setPhotoUrls(y);
      setThumbs(x);
    }
      getUrls(fd);
  }




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
      setCharacteristics(postHelperChars(result.data.characteristics));
    };
    getMeta();
    setCharacteristics();
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

    const result = await axios.get(`/api/reviews?product_id=${props.productId}&page=1&count=30&sort=relevant`);

      setReviews(result.data.results);
      setIsLoading(false);
    };
    getReviews();
  }, []);


  return (
    <>
      {(isLoading || reviews.length === 0) ? <div>No Reviews</div>
        : (
          <>
            <div id={'reviews'}>
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
              <AddReviewModal
              isShowing={isShowing}
              toggle={toggle}
              setUsername={setUsername}
              username={username}
              reviewSummary={reviewSummary}
              setReviewSummary={setReviewSummary}
              product={product}
              reviewBody={reviewBody}
              setReviewBody={setReviewBody}
              setPhotos={setPhotos}
              fileUploadHandler={fileUploadHandler}
              thumbs={thumbs}
              rating={rating}
              setRating={setRating}
              recommend={recommend}
              setRecommend={setRecommend}
              email={email}
              setEmail={setEmail}
              reviewSubmit={reviewSubmit}
              setFitNum={setFitNum}
              setComNum={setComNum}
              setLenNum={setLenNum}
              setQualNum={setQualNum}
              setSizeNum={setSizeNum}
              setWidthNum={setWidthNum}
              characteristics={characteristics} />
        </div>

    </>

  );
}

export default reviewsIndex;