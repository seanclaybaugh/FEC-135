import React, { useState, useEffect } from 'react';
import DistBar from './RatingDistBar';

function SumRatingDistItem({ id, percent }) {
  return (
    <div>
      <span>
        {`${id} Stars - `}
      </span>
      <DistBar value={percent} />
    </div>
  );
}

export default SumRatingDistItem;
