const sameFrequency = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const arr1Map = {};
  const arr2Map = {};

  for (let val of arr1) {
    arr1Map[val ** 2] = (arr1Map[val ** 2] || 0) + 1;
  }
  for (let val of arr2) {
    arr2Map[val] = (arr2Map[val] || 0) + 1;
  }
  console.log(arr1Map, arr2Map);

  for (let key in arr1Map) {
    if (arr1Map[key] !== arr2Map[key]) return false;
  }
  return true;
};

console.log(sameFrequency([2, 3, 4], [4, 9, 16]));
console.log(sameFrequency([2, 3, 4, 4], [4, 9, 16, 8]));
console.log(sameFrequency([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
