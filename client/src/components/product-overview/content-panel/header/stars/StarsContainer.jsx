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
`;

function StarsContainer({ rating, reviewCount }) {
  const stars = getStars(rating);

  return (
    <StyledStarsContainer>
      {stars.map((star, index) => (
        <StarItem key={index} value={star} />
      ))}
      {reviewCount > 0 ? <StyledSpan>{`Read all ${reviewCount} reviews`}</StyledSpan> : <StyledSpan>{'Be the first to review!'}</StyledSpan>}
    </StyledStarsContainer>
  );
}

export default StarsContainer;
