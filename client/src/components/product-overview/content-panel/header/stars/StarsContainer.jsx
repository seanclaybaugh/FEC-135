import React from 'react';
import styled from 'styled-components';
import getStars from './helpers/getStars';
import StarItem from './StarItem';

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
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

function StarsContainer({ rating, reviewCount }) {
  const stars = getStars(rating);

  return (
    <StyledStarsContainer>
      {stars.map((star, index) => (
        <StarItem key={index} value={star} />
      ))}
      <StyledSpan onClick={() => window.location.replace("/#reviews")}>
        {reviewCount > 0 ? `Read all ${reviewCount} reviews` : 'Be the first to review!'}
      </StyledSpan>
    </StyledStarsContainer>
  );
}

export default StarsContainer;
