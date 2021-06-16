import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getAvgRating from './helpers/getAvgRating';
import getReviewCount from './helpers/getReviewCount';
import Breadcrumb from './Breadcrumb';
import Title from './Title';
import Price from './Price';
import Description from './Description';
import StarsContainer from './stars/StarsContainer';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 2px solid #e2e2e2;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

function Header({ product, metaData }) {
  const [rating, setRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    if (metaData.ratings) {
      const result = getAvgRating(metaData.ratings);
      setRating(result);
      const count = getReviewCount(metaData.ratings);
      setReviewCount(count);
    }
  }, [metaData]);

  return (
    <HeaderContainer>
      <Breadcrumb category={product.category} />
      <StyledTitleContainer>
        <Title name={product.name} />
        <Price price={product.price} />
      </StyledTitleContainer>
      {rating && <StarsContainer rating={rating} reviewCount={reviewCount} />}
      <Description description={product.description} />
    </HeaderContainer>
  );
}

export default Header;
