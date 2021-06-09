function ratingHelper(rating) {
  let count = 0;
  let sum = 0;
  const keys = Object.keys(rating);
  const vals = Object.values(rating);
  for (let i = 0; i < keys.length; i++) {
    sum += Number(keys[i]) * Number(vals[i]);
    count += Number(vals[i]);
  }
  return sum / count;
}

export default ratingHelper;
