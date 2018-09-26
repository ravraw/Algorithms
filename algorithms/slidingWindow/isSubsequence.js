// find if Subsequence exists ;

// const isSubsequence = (str1, str2) => {
//   // if str2 < str1
//   if (str2.length < str1.length) {
//     return false;
//   }

//   // create a map of valid charaters
//   const mapStr1 = {};
//   for (let char of str1) {
//     mapStr1[char] = (mapStr1[char] || 0) + 1;
//   }

//   // sanitise the str2 of unwanted characters
//   const mapStr2 = [];
//   for (let char of str2) {
//     if (mapStr1[char]) {
//       mapStr2.push(char);
//     }
//   }
//   const saniStr2 = mapStr2.join("");
//   console.log(saniStr2);
//   // Create sample set from sanitized array
//   const sampleSet = [];
//   for (let i = 0; i < str1.length; i++) {
//     sampleSet.push(saniStr2[i]);
//   }
//   console.log(sampleSet);

//   //// match the strings

//   for (let i = 0; i < saniStr2.length; i++) {
//     console.log(i);
//     if (str1 === saniStr2.slice(i, i + str1.length)) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isSubsequence("ab", "xygblmnoopa"));
// console.log(isSubsequence("abc", "alalabcd"));

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("ab", "xaygalmnoopb"));
