var conditionalSum = function(values, condition) {
  let result = 0;

  const matchesCondition = (number, condition) => {
    if (condition === "even") {
      return number % 2 === 0;
    } else if (condition === "odd") {
      return number % 2 !== 0;
    }
  };

  for (let num of values) {
    if (matchesCondition(num, condition)) {
      result = result + num;
    }
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0
