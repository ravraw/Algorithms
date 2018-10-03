// Looping a triangle

const loopTriangle = (num, item) => {
  let count = 0;
  let string = "";
  while (count < num) {
    count++;
    string += ` ${item}`;
    console.log(string);
  }
};

console.log(loopTriangle(10, 1));
