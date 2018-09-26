// const merge = (arr1, arr2) => {
//   let arr = [];
//   const newLength = arr1.length + arr2.length;
//   let i = 0;
//   let j = 0;

//   while (arr.length <= newLength) {
//     if (arr1[i] < arr2[j]) {
//       arr.push(arr1[i]);
//       i++;
//     } else {
//       arr.push(arr2[j]);
//       j++;
//     }
//   }
//   return arr;
// };

// Merge function from earlier

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
