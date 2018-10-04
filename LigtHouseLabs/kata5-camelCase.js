var camelCase = function(input) {
  const str = input.split(" ");
  for (let i = 0; i < str.length; i++) {
    let wordArray = str[i].split("");
    if (i !== 0) {
      wordArray[0] = wordArray[0].toUpperCase();
      str[i] = wordArray.join("");
    }
  }
  return str.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious
