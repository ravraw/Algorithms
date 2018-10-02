// Check if the provided string is an anagram

const isAnagram = (str1, str2) => {
  // return false if both strings are not of sme lenght
  if (str1.length !== str2.length) {
    return false;
  }

  // Map both strings into objects
  const mapStr1 = {};
  const mapStr2 = {};
  for (let el of str1) {
    mapStr1[el] = (mapStr1[el] || 0) + 1;
  }
  for (let el of str2) {
    mapStr2[el] = (mapStr2[el] || 0) + 1;
  }

  console.log(mapStr1, mapStr2);

  for (let key in mapStr1) {
    if (mapStr1[key] !== mapStr2[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("abc1233", "abc12345"));
console.log(isAnagram("", ""));
