import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CharTitle = styled.div`
  margin: .5em 0em .5em 0em;
  `
const CharBarContainer = styled.div`
  display: flex;
  height: .5em;
  background-color: #e2e2e2;
  width: 10em;
  `
const CharBarFill = styled.div`
  display: flex;
  height: .5em;
  background-color: #e2e2e2;
  flex-basis: ${props => `${props.per}`}%;
  justify-content: flex-end;
  `
  
const CharMin = styled.div`
  height: .5em;
  display: flex;
  justify-content: flex-start;
  flex-basis: 60%;
  font-size: .7em;
  `

const CharMax = styled.div`
  height: .5em;
  display: flex;
  justify-content: flex-end;
  font-size: .7em;
  `

const MinMaxContainer = styled.div`
  height: .5em;
  width: 12em;
  display: flex;

  `


function CharacteristicItem({ char, per }) {
  return (
    <CharTitle>
      <span>{char}</span>
      <CharBarContainer><CharBarFill per={per}>^</CharBarFill> </CharBarContainer>
      <MinMaxContainer>

        { (char[0] === 'Fit') && <><CharMin>Runs Tight</CharMin><CharMax>Runs Long</CharMax> </>}
        { (char[0] === 'Comfort') && <><CharMin>Uncomfortable</CharMin><CharMax>Very Comfy</CharMax> </>}
        { (char[0] === 'Size') && <><CharMin>A size too small</CharMin><CharMax>A size too large</CharMax> </> }
        { (char[0] === 'Width') && <><CharMin>Too Narrow</CharMin><CharMax>Too Wide</CharMax> </>}
        { (char[0] === 'Length') && <><CharMin>Runs Short</CharMin><CharMax>Runs Long</CharMax> </>}
        { (char[0] === 'Quality') && <><CharMin>Poor</CharMin><CharMax>Perfect</CharMax> </> }

        </MinMaxContainer>
    </CharTitle>
  );
}

export default CharacteristicItem;

//container for bar full width
//