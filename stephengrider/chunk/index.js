// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let newArray = [];
//     let arr = [];
//   for(let i of array){
//     if (arr.length < size){
//       arr.push(i)
//     }else if (arr.length === size || array.length === 0){
//       newArray.push(arr);
//       arr = [];
//       arr.push(i)
//     }

//   }
//   return newArray;
// }

const chunk = (arr, size) => {
  let result = [];
  let loopsRequired = Math.ceil(arr.length / size);
  let startIndex = 0;

  while (startIndex < arr.length) {
    let chunk = arr.slice(startIndex, startIndex + size);
    result.push(chunk);
    startIndex += size;
  }
  return result;
};

module.exports = chunk;
