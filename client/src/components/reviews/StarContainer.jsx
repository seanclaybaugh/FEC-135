import React from 'react';
import styled from 'styled-components';
import StarItem from './StarItem';
import starHelper from './helpers/StarHelper';

const StyledStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20px;
`;
const StyledSpan = styled.span`
  font-size: 12px;
  vertical-align: baseline;
  margin-left: 10px;
`;
function StarsContainer({ rating }) {
  const stars = starHelper(rating);
  return (
    <StyledStarsContainer>
      {stars.map((star, index) => (
        <StarItem key={index} value={star} />
      ))}
    </StyledStarsContainer>
  );
}
export default StarsContainer;