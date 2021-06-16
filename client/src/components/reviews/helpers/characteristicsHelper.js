function characteristicsHelper(obj) {
  let result = [];
  for( var key in obj) {
    result.push([[key], obj[key].id, Math.round(((obj[key].value/5)*100))]);
  }
  return result;
};

export default characteristicsHelper;
