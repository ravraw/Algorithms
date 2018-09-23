//find max sum of 3 numbers in na array

const maxSumOf = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - num];

    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

console.log(maxSumOf([5, 6, 1, 2, 11, 3, 4], 3));
