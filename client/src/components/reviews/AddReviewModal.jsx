import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Spinner from '../product-overview/spinner/LoadingSpinner.jsx';


const StarRating = lazy(() => import('./StarRating'));
const ReviewChars = lazy(()=> import('./ReviewChars'));


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
  transition: all 2s;
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
  margin-bottom: 7px;
  `
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 800;
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
   margin-top: 1em;
   &:hover {
     cursor: pointer;
     background-color: white;
     color: black;
     border-color: white;
   }
  `

const Button2 = styled.button`
  display:inline-block;
  padding:0.1em .2em;
  border:0.16em solid black;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  background-color: black;
  color: white;
  text-align: center;
  transition: all 0.15s;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border-color: white;
  }
 `
 const LabelWSpace = styled.label`
  margin-bottom: .5em;
 `

const AddReviewModal = ({isShowing, toggle, username, setUsername, reviewSummary, setReviewSummary, product, reviewBody, setReviewBody, email, setEmail, setPhotos, fileUploadHandler, thumbs, rating, setRating, recommend, setRecommend, reviewSubmit, setFitNum, setComNum , setLenNum, setQualNum, characteristics, setSizeNum, setWidthNum }) => isShowing ? ReactDOM.createPortal(
  <Suspense fallback={<Spinner/>}>
  <>
    <Overlay/>
      <Wrapper >
        <Modal>

          <ModalHeader>
            <Button2 type="button" onClick={toggle}>x</Button2>
          </ModalHeader>

        <TitleDiv>Write your review</TitleDiv>

        <TitleDiv><h5>about {product}</h5></TitleDiv>

        <form onSubmit={(e)=>{
          toggle()
          reviewSubmit(e)}}>

        <ModalForm>

            <StarRating rating={rating} setRating={setRating} />

            <LabelWSpace>Username*:
              <input  type="text" value={username} placeholder="Example: jackson11!" maxLength="60" style={{ width:"200px"}} onChange={(e)=> setUsername(e.target.value)}></input>
            </LabelWSpace>
            <FormSubtext>For privacy reasons, do not use your full name or email address</FormSubtext>


            <LabelWSpace>Review Title*:
              <input type="text" value={reviewSummary} placeholder="Example: Best purchase ever!" maxLength="60" style={{ width:"200px"}} onChange={(e)=> setReviewSummary(e.target.value)}></input>
            </LabelWSpace>


            <LabelWSpace>Review*:
              <textarea type="text" value={reviewBody} placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" rows="3" cols="37" onChange={(e)=> setReviewBody(e.target.value)}></textarea>
            </LabelWSpace>
            {reviewBody.length < 50 ? <FormSubtext>{`Minimum required characters left:${50 - reviewBody.length}`}</FormSubtext> : <FormSubtext>Minimum reached - Max 1000 characters</FormSubtext>}


            <LabelWSpace>Email*:
              <input type="text" value={email} placeholder="Example: jackson11@email.com" style={{ width:"200px"}} onChange={(e)=> setEmail(e.target.value)}></input>
            </LabelWSpace>
            <FormSubtext>For authentication reasons, you will not be emailed</FormSubtext>


            <ReviewChars setFitNum={setFitNum} setComNum={setComNum} setLenNum={setLenNum} setQualNum={setQualNum} characteristics={characteristics} setSizeNum={setSizeNum} setWidthNum={setWidthNum} />


            <LabelWSpace> Recommend this product?
              <input type="radio" name="recommend" value={true} onChange={()=> setRecommend(true)}/>Yes
              <input type="radio" name="recommend" value={false} onChange={()=> setRecommend(false)} />No
              </LabelWSpace>


            <label> {`Add Photos: `}
              <input type="file" onChange={(e)=> setPhotos(e.target.files)}></input>
              <button onClick={()=>fileUploadHandler()}>Upload</button>
            </label>

        </ModalForm>


          <Button1 onClick={(e)=>{
            reviewSubmit(e)
            toggle()}}>Submit Review</Button1>
        </form>

      </Modal>
    </Wrapper>
  </>
  </Suspense>


  , document.body
) : null;

export default AddReviewModal;
