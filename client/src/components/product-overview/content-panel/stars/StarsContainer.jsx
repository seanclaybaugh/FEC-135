import React from 'react';
import styled from 'styled-components';
import getStars from './helpers/getStars';
import StarItem from './StarItem';

const StyledStarsContainer = styled.div`
  margin-right: 20px;
`;

function StarsContainer({ rating }) {
  const stars = getStars(rating);

  return (
    <StyledStarsContainer>
      {stars.map((star, index) => {
        return <StarItem key={index}
                    value={star} />
      })}
    </StyledStarsContainer>
  )

};

export default StarsContainer;
