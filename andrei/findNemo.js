const list = ['memo', 'nemo', 'temo'];

// find
const findNemo = arr => {
  return arr.find(el => el === 'nemo');
};
console.log(findNemo(list));

// findIndex
const findIndex = (arr, name) => {
  return arr.findIndex(el => el === name);
};
console.log(findIndex(list, 'nemo'));
