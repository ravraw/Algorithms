// const countUniqueValues = arr => {

// };

// console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3, 3, 3]));

function countUniqueValues(arr) {
  let left, right, counter;
  left = 0;
  right = 1;
  counter = 0;

  while (left < arr.length) {
    if (arr[left] != arr[right]) counter++;
    left++;
    right++;
  }

  return counter;
}

console.log(countUniqueValues([1, 2, 3]));
