import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CharsContainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: Roboto, sans-serif;
  margin: 5px;
  `
const CharsTitle = styled.span`
  font-weight: 400;
  font-size: 1.1em;
  `
const Char = styled.div`
  font-weight: 300;
  font-size: .9em;
  margin-top: 12px;
  margin-bottom: 7px;
  border-top: solid #e2e2e2 1px
  `

const CharDescription = styled.label`
  font-weight: 100;
  font-size: .8em;
  `


function ReviewChars ({setFitNum, setComNum , setLenNum, setQualNum, characteristics, setSizeNum, setWidthNum }) {
  const [comfort, setComfort] = useState('None selected');
  const [fit, setFit] = useState('None Selected');
  const [Length, setLength] = useState('None Selected');
  const [quality, setQuality] = useState('None Selected');
  const [size, setSize] = useState('None Selected');
  const [width, setWidth] = useState('None Selected');

return(
    <CharsContainer>
      <CharsTitle>Characteristics*:</CharsTitle>

    { characteristics.Comfort &&
      <>
      <Char>{`Comfort: ${comfort}`}</Char>
      <CharDescription> Uncomfortable
        <input type="radio" value="Uncomfortable" name="comfort" onChange={(e)=> {
          setComfort(e.target.value)
          setComNum(1)
        }}></input>
      </CharDescription>
        <input type="radio" value="Slightly Uncomfortable" name="comfort" onChange={(e)=> {
          setComfort(e.target.value)
          setComNum(2)
        }}></input>
        <input type="radio" value="Ok" name="comfort" onChange={(e)=> {
          setComfort(e.target.value)
          setComNum(3)
        }}></input>
        <input type="radio" value="Comfy" name="comfort" onChange={(e)=> {
          setComfort(e.target.value)
          setComNum(4)
        }}></input>
        <CharDescription>
        <input type="radio" value="Perfect" name="comfort" onChange={(e)=> {
          setComfort(e.target.value)
          setComNum(5)
        }
        }></input>
        Perfect
        </CharDescription>
        </>
    }

    { characteristics.Fit &&
    <>
        <Char>{`Fit: ${fit}`}</Char>
      <CharDescription> Runs Tight
        <input type="radio" value="Runs Tight" name="fit" onChange={(e)=> {
          setFit(e.target.value)
          setFitNum(1)
        }}></input>
      </CharDescription>
        <input type="radio" value="Runs slightly tight" name="fit" onChange={(e)=> {
          setFit(e.target.value)
          setFitNum(2)
        }}></input>
        <input type="radio" value="Perfect" name="fit" onChange={(e)=> {
          setFit(e.target.value)
          setFitNum(3)
        }}></input>
        <input type="radio" value="Runs slightly large" name="fit" onChange={(e)=> {
          setFit(e.target.value)
          setFitNum(4)
        }}></input>
        <CharDescription>
        <input type="radio" value="Runs large" name="fit" onChange={(e)=> {
          setFit(e.target.value)
          setFitNum(5)
        }}></input>
        Runs Large
        </CharDescription>
    </>
    }

    { characteristics.Length &&
    <>
        <Char>{`Length: ${Length}`}</Char>
      <CharDescription> Runs Short
        <input type="radio" value="Runs Short" name="length" onChange={(e)=> {
          setLength(e.target.value)
          setLenNum(1)
        }}></input>
      </CharDescription>
      <input type="radio" value="Runs Slightly Short" name="length" onChange={(e)=> {
          setLength(e.target.value)
          setLenNum(2)
        }}></input>
      <input type="radio" value="Perfect" name="length" onChange={(e)=> {
          setLength(e.target.value)
          setLenNum(3)
        }}></input>
      <input type="radio" value="Runs Slightly Long" name="length" onChange={(e)=> {
          setLength(e.target.value)
          setLenNum(4)
        }}></input>
      <CharDescription>
        <input type="radio" value="Runs Long" name="length" onChange={(e)=> {
          setLength(e.target.value)
          setLenNum(5)
        }}></input>
        Runs Long
      </CharDescription>
      </>
    }
    {characteristics.Quality &&
    <>
      <Char>{`Quality: ${quality}`}</Char>
      <CharDescription> Poor
        <input type="radio" value="Poor" name="quality" onChange={(e)=> {
          setQuality(e.target.value)
          setQualNum(1)
        }}></input>
      </CharDescription>
      <input type="radio" value="Below Average" name="quality" onChange={(e)=> {
          setQuality(e.target.value)
          setQualNum(2)
        }}></input>
      <input type="radio" value="What I expected" name="quality" onChange={(e)=> {
          setQuality(e.target.value)
          setQualNum(3)
        }}></input>
      <input type="radio" value="Pretty great" name="quality" onChange={(e)=> {
          setQuality(e.target.value)
          setQualNum(4)
        }}></input>
      <CharDescription>
        <input type="radio" value="Perfect" name="quality" onChange={(e)=> {
          setQuality(e.target.value)
          setQualNum(5)
        }}></input>
        Perfect
      </CharDescription>
      </>
    }
    { characteristics.Width &&
    <>
    <Char>{`Width: ${width}`}</Char>
      <CharDescription> Too narrow
        <input type="radio" value="Too narrow" name="width" onChange={(e)=> {
          setWidth(e.target.value)
          setWidthNum(1)
        }}></input>
      </CharDescription>
      <input type="radio" value="Slightly narrow" name="width" onChange={(e)=> {
          setWidth(e.target.value)
          setWidthNum(2)
        }}></input>
      <input type="radio" value="Perfect" name="width" onChange={(e)=> {
          setWidth(e.target.value)
          setWidthNum(3)
        }}></input>
      <input type="radio" value="Slighty Wide" name="width" onChange={(e)=> {
          setWidth(e.target.value)
          setWidthNum(4)
        }}></input>
      <CharDescription>
        <input type="radio" value="Too Wide" name="width" onChange={(e)=> {
          setWidth(e.target.value)
          setWidthNum(5)
        }}></input>
        Perfect
      </CharDescription>
    </>
    }
    {characteristics.Size &&
    <>
    <Char>{`Size: ${size}`}</Char>
      <CharDescription> A size too small
        <input type="radio" value="A size too small" name="size" onChange={(e)=> {
          setSize(e.target.value)
          setSizeNum(1)
        }}></input>
      </CharDescription>
      <input type="radio" value="half a size too small" name="size" onChange={(e)=> {
          setSize(e.target.value)
          setSizeNum(2)
        }}></input>
      <input type="radio" value="Perfect" name="size" onChange={(e)=> {
          setSize(e.target.value)
          setSizeNum(3)
        }}></input>
      <input type="radio" value="half a size too big" name="size" onChange={(e)=> {
          setSize(e.target.value)
          setSizeNum(4)
        }}></input>
      <CharDescription>
        <input type="radio" value="A size too wide" name="size" onChange={(e)=> {
          setSize(e.target.value)
          setSizeNum(5)
        }}></input>
        A size too wide
      </CharDescription>
    </>
    }


    </CharsContainer>


  )
}

export default ReviewChars;