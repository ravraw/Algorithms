// Code needs refactoring
// Flow to be streamlined .

const multiplicationTable = function(maxValue) {
  let border = "";
  let content = "";
  let result = "";
  let counter = 1;

  // Number of dashes in border-- squared the maxvalue to know the maximum digit in the grid
  const dashesInBorder = (maxValue ** 2).toString().length + 2;

  // create border units --  a  string of dashes
  let borderDashes = "";
  for (let i = 0; i < dashesInBorder; i++) {
    borderDashes = borderDashes + "-";
  }

  let border1 = `+${borderDashes}+`; // border of 1st position
  let border2 = `${borderDashes}+`; // border for any other position

  // Create 1 row of border
  const createBorder = maxValue => {
    for (let i = 1; i <= maxValue; i++) {
      if (i === 1) {
        border = border + border1;
      } else {
        border = border + border2;
      }
    }
  };

  // create content units

  let insideContent = (num, step) => {
    let leftContent = "";
    let rightContent = "";
    let dashCount = dashesInBorder - (num * step).toString().length;
    let leftDash = Math.floor(dashCount / 2);
    let rightDash = Math.ceil(dashCount / 2);
    for (let i = 0; i < leftDash; i++) {
      leftContent = leftContent + " ";
    }
    for (let i = 0; i < rightDash; i++) {
      rightContent = rightContent + " ";
    }
    return `${leftContent}${num * step}${rightContent}`;
  };

  const createContent = (maxValue, step) => {
    for (let i = 1; i <= maxValue; i++) {
      let content1 = `|${insideContent(i, step)}|`;
      let content2 = `${insideContent(i, step)}|`;
      if (i === 1) {
        content = content + content1;
      } else {
        content = content + content2;
      }
    }
  };
  createBorder(maxValue);
  while (counter <= maxValue) {
    content = "";
    createContent(maxValue, counter);
    result = result + `\n${border}\n${content}`;
    counter++;
  }

  result = result + `\n${border}`;
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
