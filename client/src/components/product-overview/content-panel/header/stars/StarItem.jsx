import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
`;

const StarBar = styled.div`
  display: inline-block;
  position: relative;
  height: 20px;
  width: ${(props) => props.width * 20}px;
  background-color: #000;
`;

const StyledStar = styled.img`
  height: 20px;
  width: 20px;
`;

function StarItem({ value }) {
  return (
    <StarContainer>
      <StarBar width={value}>
        <StyledStar src="http://localhost:3000/assets/star.png" />
      </StarBar>
    </StarContainer>
  );
}

export default StarItem;
