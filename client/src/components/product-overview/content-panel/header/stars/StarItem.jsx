import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  --star-size: 20px;
  --star-color: #E9EAEC;
  --star-background: #000;
`;

const StyledStar = styled.div`
  --percent: calc(${(props) => props.width * 100}%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;

  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function StarItem({ value }) {
  return (
    <StarContainer>
      <StyledStar width={value}>★</StyledStar>
    </StarContainer>
  );
}

export default StarItem;
