function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let count = 1;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i = j;
      count++;
    }
  }
  return count;
}
