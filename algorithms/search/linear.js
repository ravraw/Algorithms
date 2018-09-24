const search = (arr, val) => {
  let index = 0;

  for (let i of arr) {
    if (i === val) return index;
    index++;
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 5));
