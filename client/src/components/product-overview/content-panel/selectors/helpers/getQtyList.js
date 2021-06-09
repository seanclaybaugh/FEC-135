const getQtyList = (qty) => {
  let options = [];
  let int = 1;
  let max = qty < 15 ? qty : 15;

  while (max >= int) {
    options.push(int);
    int += 1;
  }

  return options;
}

export default getQtyList;