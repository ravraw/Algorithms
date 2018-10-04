// need refactoring
// improve programe flow

const makeCase = (...restArgs) => {
  let str = restArgs[0].split(" ");
  let charCase = Array.isArray(restArgs[1]) ? restArgs[1][0] : undefined;
  if (charCase) charCase[0] = charCase[0].toUpperCase();
  let style = Array.isArray(restArgs[1]) ? restArgs[1][1] : restArgs[1];

  const modifyWord = (str, style) => {
    for (let i = 0; i < str.length; i++) {
      let wordArray = str[i].split("");
      //switch
      switch (style) {
        case "camel":
          if (i !== 0) {
            wordArray[0] = wordArray[0].toUpperCase();
            str[i] = wordArray.join("");
          }
          break;
        case "pascal":
        case "title":
          wordArray[0] = wordArray[0].toUpperCase();
          str[i] = wordArray.join("");
          break;
        case "snake":
        case "kebab":
          str[i] = wordArray.join("").toLowerCase();
          break;
        case "vowel":
          for (let j = 0; j < wordArray.length; j++) {
            wordArray[j] = wordArray[j].toLowerCase();
            if (
              wordArray[j] === "a" ||
              wordArray[j] === "e" ||
              wordArray[j] === "i" ||
              wordArray[j] === "o" ||
              wordArray[j] === "u"
            ) {
              wordArray[j] = wordArray[j].toUpperCase();
            }
          }
          str[i] = wordArray.join("");
          break;
        case "consonant":
          for (let j = 0; j < wordArray.length; j++) {
            wordArray[j] = wordArray[j].toUpperCase();
            if (
              wordArray[j] === "A" ||
              wordArray[j] === "E" ||
              wordArray[j] === "I" ||
              wordArray[j] === "O" ||
              wordArray[j] === "U"
            ) {
              wordArray[j] = wordArray[j].toLowerCase();
            }
          }
          str[i] = wordArray.join("");
          break;

        default:
          break;
      }
    }
  };

  const addFiller = (str, style) => {
    for (let i = 0; i < str.length; i++) {
      let word = str[i];
      //switch
      switch (style) {
        case "title":
        case "vowel":
        case "consonant":
          if (i !== 0) {
            str[i] = " " + str[i];
          }
          break;
        case "snake":
          if (i !== 0) {
            str[i] = "_" + str[i];
          }
          break;
        case "kebab":
          if (i !== 0) {
            str[i] = "-" + str[i];
          }
          break;
        default:
          break;
      }
    }
  };
  modifyWord(str, style);
  addFiller(str, style);
  console.log(style, " : ", str.join(""));

  if (charCase && charCase === "upper") return str.join("").toUpperCase();
  if (charCase && charCase === "lower") return str.join("").toLowerCase();
  else return str.join("");
};

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(
  makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING"
);
