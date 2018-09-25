// const stringSearch = (smString, lgString) => {
//   if (lgString.length < smString.length) return -1;

//   let smIndex = 0;
//   let count = 0;

//   for (let i = 0; i < lgString.length; i++) {
//     if (smString[smIndex] === lgString[i]) {
//       smIndex++;
//       if (smIndex === smString.length) {
//         count = count + 1;
//         smIndex = 0;
//       }
//     } else {
//       smIndex = 0;
//     }
//   }
//   console.log(smIndex, count);
//   return count;
// };

// console.log(stringSearch("ab", "abbbbbcabab"));
const stringSearch = (lgString, smString) => {
  if (lgString.length < smString.length) return -1;

  let smIndex = 0;
  let count = 0;

  for (let i = 0; i < lgString.length; i++) {
    if (smString[smIndex] === lgString[i]) {
      smIndex++;
      if (smIndex === smString.length) {
        count = count + 1;
        smIndex = 0;
      }
    } else {
      if (lgString[i] === smString[0]) {
        smIndex = 1;
      } else {
        smIndex = 0;
      }
    }
  }
  return count;
};

// console.log(stringSearch("abcdef", "abcabcdefabcabcdefabcabcdef"));

console.log(stringSearch("", ""));
console.log(stringSearch("a", ""));
console.log(stringSearch("a", "a"));
console.log(stringSearch("abcbcglx", "abca"));
console.log(stringSearch("abcbcglx", "bcgl"));
console.log(stringSearch("abcxabcdabxabcdabcdabcy", "abcdabcy"));
console.log(stringSearch("abcxabcdabxabcdabcdabcy", "abcdabca"));
console.log(stringSearch("abcxabcdabxaabcdabcabcdabcdabcy", "abcdabca"));
console.log(stringSearch("abcxabcdabxaabaabaaaabcdabcdabcy", "aabaabaaa"));
