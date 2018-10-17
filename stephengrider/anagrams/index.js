// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let str1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  let str2 = stringB.replace(/[^\w]/g, "").toLowerCase();
  console.log(str1, str2);
  if (str1.length !== str2.length) {
    return false;
  }
  let mapStr1 = {};
  let mapStr2 = {};

  for (let char of str1) {
    console.log(char);
    mapStr1[char] = (mapStr1[char] || 0) + 1;
  }
  for (let char of str2) {
    mapStr2[char] = (mapStr2[char] || 0) + 1;
  }

  if (Object.keys(mapStr1).length !== Object.keys(mapStr2).length) {
    return false;
  }
  for (let char in mapStr1) {
    if (mapStr1[char] !== mapStr2[char]) {
      return false;
    }
  }
  console.log(mapStr1, mapStr2);
  return true;
}

//method 2

const anagrams2 = (str1, str2) => {
  let sorted1 = str1
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  let sorted2 = str2
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  console.log(sorted1, sorted2);
  return sorted1 === sorted2;
};

module.exports = anagrams;
console.log(anagrams(" tree, a life, a bench", "A tree, a fence, a yard"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
