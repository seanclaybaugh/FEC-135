

const postHelperChars = (chars) => {
  let result = {}

  for(var key in chars) {
    result[key]= chars[key].id
  }
  return result;
}

export default postHelperChars;