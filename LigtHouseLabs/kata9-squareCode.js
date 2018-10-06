const squareCode = (str, columns) => {
  const trimmedString = str
    .split(" ")
    .join("")
    .toLowerCase();
  let counter = 0; // to keep count of substrings
  let currentIndex = 0; // to keep track of index being added to final string;
  let finalString = "";
  for (let i = 0; i < trimmedString.length; i++) {
    if (trimmedString[currentIndex]) {
      // console.log(i, counter, currentIndex, trimmedString[currentIndex]);
      finalString += trimmedString[currentIndex];
      currentIndex += columns;
    } else {
      counter += 1;
      currentIndex = counter;
      //  console.log(i, counter, currentIndex, trimmedString[currentIndex]);
      finalString = finalString + " " + trimmedString[currentIndex];
      currentIndex += columns;
    }
  }
  console.log(finalString);
};

squareCode(
  "If man was meant to stay on the ground god would have given us roots",
  8
);
