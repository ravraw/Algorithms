// find all  pairs of numbers whoes sum is eqal to a given number.
// in a sorted array with negative and positive values

const findAllPairs = (arr, sum) => {
  const pairList = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === sum) {
      pairList.push([arr[left], arr[right]]);
      // minus 1 from either left or right to keep the loop working
      left++;
    } else if (arr[left] + arr[right] < sum) {
      left++;
    } else {
      right--;
    }
  }
  return pairList;
};

// console.log(
//   findAllPairs([-10, -5, -3, -2, -1, 0, 1, 2, 3, 5, 8, 10, 14, 15], 5)
// );
// console.log(findAllPairs([-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0));
// console.log(findAllPairs([-3, -2, -1, 0, 1, 2, 3], 1));
// console.log(findAllPairs([-1, 0, 1], 0));

///  average pair

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
function averagePair(arr, num) {
  let pairs = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === num) {
      pairs.push([arr[left], arr[right]]);
      left++;
    } else if (average < num) left++;
    else right--;
  }

  return pairs;
}

console.log(
  averagePair([-11, -10, -5, -3, -2, -1, 0, 1, 2, 3, 5, 8, 10, 14, 15], 2)
);
// console.log(findAllPairs([-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 0));
// console.log(findAllPairs([-3, -2, -1, 0, 1, 2, 3], 1));
// console.log(findAllPairs([-1, 0, 1], 0));
