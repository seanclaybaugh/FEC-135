const getReviewCount = (ratings) => {
  let count = 0;

  for (const star in ratings) {
    count += Number(ratings[star]);
  }

  return count;
};

export default getReviewCount;
