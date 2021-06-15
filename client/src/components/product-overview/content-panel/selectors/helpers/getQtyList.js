const getQtyList = (qty) => {
  const options = [];
  let int = 1;
  const max = qty < 15 ? qty : 15;

  while (max >= int) {
    options.push(int);
    int += 1;
  }

  return options;
};

export default getQtyList;
