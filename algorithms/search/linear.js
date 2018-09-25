// const search = (arr, val) => {
//   let index = 0;

//   for (let i of arr) {
//     if (i === val) return index;
//     index++;
//   }
//   return -1;
// };

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1));

const search2 = (arr, val) => {
  const len = Math.ceil(arr.length / 2);

  for (let i = 0; i > len; i++) {
    if (arr[i] === val) {
      console.log("func1 :", arr[i]);
      return arr[i];
    }
  }

  // for (let i = arr.length - 1; i < len; i--) {
  //   if (arr[i] === val) {
  //     console.log("func1 :", arr[i]);
  //     return arr[i];
  //   }
  // }
  return -1;
};

console.log(search2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5));
