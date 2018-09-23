// find the value in a sorted array

const findMaxNumber = (arr, num) => {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let currentElement = arr[middleIndex];

    if (currentElement < num) {
      minIndex = middleIndex + 1;
    } else if (currentElement > num) {
      maxIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
};

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8], 8));
