const getStars = (rating) => {
  rating = rating || 0;

  let stars = [];

  while (stars.length < 5) {
    if (rating > 1) { // push full stars until you get to the last filled star
      stars.push(1)
    } else if (rating > 0) { // on the last filled star, round down to the nearest quarter
      const empty = Math.abs(0 - rating);
      const fourth = Math.abs(0.25 - rating);
      const half = Math.abs(0.5 - rating);
      const three = Math.abs(0.75 - rating);
      const full = Math.abs(1 - rating);
      const nearest = Math.min(empty, fourth, half, three, full);
      switch (nearest) {
        case (empty):
          stars.push(0);
          break;
        case (fourth):
          stars.push(0.25);
          break;
        case (half):
          stars.push(0.5);
          break;
        case (three):
          stars.push(0.75);
          break;
        case (full):
          stars.push(1);
          break;
        default:
          stars.push(0);
          break;
      }
    } else {
      stars.push(0)
    }
    rating -= 1
  }

  return stars;
}

export default getStars;
