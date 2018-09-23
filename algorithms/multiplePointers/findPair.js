// find the first  pair of numbers whoes sum is eqal to a given number.
// in a sorted array with negative and positive values

const findPair = (arr, sum) => {
  let left = 0;
  let right = arr.length - 1;
  for (let i of arr) {
    if (arr[left] + arr[right] === sum) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] < sum) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(findPair([-5, -3, -2, -1, 0, 1, 2, 3, 8, 10], 5));
