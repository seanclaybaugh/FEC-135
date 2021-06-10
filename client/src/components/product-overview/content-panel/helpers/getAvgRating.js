const getAvgRating = (ratings) => {
  let result = 0;
  let sum = 0;
  let count = 0;

  for (const star in ratings) {
    sum += (Number(star) * Number(ratings[star]));
    count += Number(ratings[star]);
  }
  result = parseFloat(sum / count).toFixed(1);

  return result;
}

export default getAvgRating;
