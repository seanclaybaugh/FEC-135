import React, { useState, useEffect } from 'react';

function SumRatingDistItem({ id, percent }) {
  return (
    <div>
      <span>
        {`${id} Stars - ${percent}%`}
      </span>
    </div>
  );
}

export default SumRatingDistItem;
