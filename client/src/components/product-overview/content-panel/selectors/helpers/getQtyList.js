const getQtyList = (qty) => {
  let options = [];
  let count = 1;
  let max = qty < 15 ? qty : 15;

  while (max >= count) {
    options.push(count);
    count += 1;
  }

  return options;
}

export default getQtyList;