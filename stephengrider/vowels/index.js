// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      count++;
    }
  }
  return count;
}

//Method2
function vowels2(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(char => vowels.includes(char)).length;
}

//Method3
function vowels3(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

//Method4
function vowels4(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

console.log(vowels4("Why do you ask?"));
