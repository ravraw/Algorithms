// recursively
function printNumbers1(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  printNumbers1(num);
}

// Iteratively
function printNumbers2(num) {
  while (num >= 0) {
    if (num === 0) {
      console.log("All Done");
      return;
    }
    console.log(num);
    num--;
  }
}
console.log(printNumbers1(10));
console.log(printNumbers2(10));
