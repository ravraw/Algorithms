// Time o(n^2);
//Space o(n + m)
// Need refactoring to reduce time complexity;
var repeatNumbers = function(data) {
  let result = "";

  const addToString = arr => {
    let string = "";
    for (let i = 0; i < arr[1]; i++) {
      string = string + arr[0];
    }
    return string;
  };

  for (let i = 0; i < data.length; i++) {
    result = result + addToString(data[i]);
    if (i !== data.length - 1 && data.length !== 1) {
      result = result + ",";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //10101010, 343434343434, 9292
