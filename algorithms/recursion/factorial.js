// recursively
const factorial1 = num => {
  if (num === 0) return 1;
  return num * factorial1(num - 1);
};

// iteratively
const factorial2 = num => {
  let product = 1;
  while (num > 0) {
    product *= num;
    num--;
  }
  return product;
};

console.log(factorial1(5));
console.log(factorial2(5));
