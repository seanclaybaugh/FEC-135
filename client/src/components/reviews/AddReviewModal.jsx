import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StarRating from './StarRating';
import ReviewChars from './ReviewChars';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`
const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.50rem auto;
  border-radius: 3px;
  width: 400px;
  padding: 3rem;
`
const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`
const ModalForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-family: Roboto, sans-serif;
font-weight: 200;
font-size: .8em;
`
const FormSubtext = styled.span`
font-weight: 100;
font-size: .5em;
`
const AddReviewModal = ({isShowing, toggle, username, setUsername, reviewSummary, setReviewSummary, product, reviewBody, setReviewBody, email, setEmail, setPhotos, fileUploadHandler, thumbs, rating, setRating, recommend, setRecommend, reviewSubmit, setFitNum, setComNum , setLenNum, setQualNum, characteristics, setSizeNum, setWidthNum }) => isShowing ? ReactDOM.createPortal(

  <>
    <Overlay/>
      <Wrapper >
        <Modal>
          <ModalHeader>
            <button type="button"
              onClick={toggle}>
              <span>x</span>
            </button>
          </ModalHeader>
        <h3>Write your review</h3>
        <h5>about {product}</h5>
        <form onSubmit={(e)=>{
          toggle()
          reviewSubmit(e)}}>
        <ModalForm>
            <StarRating rating={rating} setRating={setRating} />
          <label>Username*:
            <input  type="text" value={username} placeholder="Example: jackson11!" maxLength="60" style={{ width:"200px"}} onChange={(e)=> setUsername(e.target.value)}></input>
          </label>
          <FormSubtext>For privacy reasons, do not use your full name or email address</FormSubtext>
          <label>Review Title*:
            <input type="text" value={reviewSummary} placeholder="Example: Best purchase ever!" maxLength="60" style={{ width:"200px"}} onChange={(e)=> setReviewSummary(e.target.value)}></input>
          </label>
          <label>Review*:
            <textarea type="text" value={reviewBody} placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" rows="3" cols="37" onChange={(e)=> setReviewBody(e.target.value)}></textarea>
          </label>
          {reviewBody.length < 50 ? <FormSubtext>{`Minimum required characters left:${50 - reviewBody.length}`}</FormSubtext> : <FormSubtext>Minimum reached - Max 1000 characters</FormSubtext>}
          <label>Email*:
            <input type="text" value={email} placeholder="Example: jackson11@email.com" style={{ width:"200px"}} onChange={(e)=> setEmail(e.target.value)}></input>
          </label>
          <FormSubtext>For authentication reasons, you will not be emailed</FormSubtext>

          <ReviewChars setFitNum={setFitNum} setComNum={setComNum} setLenNum={setLenNum} setQualNum={setQualNum} characteristics={characteristics} setSizeNum={setSizeNum} setWidthNum={setWidthNum} />

          <label> Recommend this product?
          <input type="radio" name="recommend" value={true} onChange={()=> setRecommend(true)}/>Yes
          <input type="radio" name="recommend" value={false} onChange={()=> setRecommend(false)} />No
          </label>
          <label> {`Add Photos: `}
            <input type="file" onChange={(e)=> setPhotos(e.target.files)}></input>
            <button onClick={()=>fileUploadHandler()}>Upload</button>
          </label>
          </ModalForm>
          <button onClick={(e)=>{
            
            reviewSubmit(e)
            toggle()}} >Submit Review</button>
        </form>

      </Modal>
    </Wrapper>
  </>, document.body
) : null;

export default AddReviewModal;
