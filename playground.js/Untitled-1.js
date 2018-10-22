const nextedArray = [[[[[[["Hi there"]]]]]]];

const myArray = arr => (Array.isArray(arr) ? myArray(arr[0]) : arr);
console.log(myArray(nextedArray));
