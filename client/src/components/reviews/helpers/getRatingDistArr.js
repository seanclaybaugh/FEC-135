function getRatingDistArr(obj) {
  let result = [];
  let total = 0;
  let model = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  for (var key in obj) {
    model[key] = Number(obj[key]);
    total += Number(obj[key]);
  }
  for (var key in model) {
    result.push(
      [Math.round((model[key] / total) * 100), Number([key])]);
  }
  return result;
}

export default getRatingDistArr;
