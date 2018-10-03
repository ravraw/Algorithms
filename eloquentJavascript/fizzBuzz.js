// FizzBuzz

const fizzBuzz = (str1, str2, count) => {
  let counter = 1;
  while (counter <= count) {
    if (counter % 3 === 0 && counter % 5 === 0) console.log(`${str1}${str2}`);
    else if (counter % 3 === 0) console.log(str1);
    else if (counter % 5 === 0) console.log(str2);
    else console.log(counter);
    counter++;
  }
};

fizzBuzz("Fizz", "Buzz", 100);
