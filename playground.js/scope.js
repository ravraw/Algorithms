// console.log(varOne);

// let varOne = "varOne";

// if (true) {
//   if (true) {
//     if (true) {
//       console.log(varOne);
//       if (true) {
//         console.log(varOne);
//         if (true) {
//           console.log(varOne);
//           if (true) {
//             console.log(varOne);
//           }
//         }
//       }
//     }
//   }
// }
// if (true) {
// }

const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""]
];

const gridSize = () => {
  const height = countRows();
  const width = countColumns();
  return `${width} x ${height}`;
};

const totalCells = () => {
  return countRows() * countColumns();
};

const convertColumn = col => {
  return col.charCodeAt(0) - 65;
};

const lightCell = cell => {
  let col = convertColumn(cell);
  let row = +cell[1] - 1;
  return GRID[row][col];
};
// convertColumn("C2");
console.log(lightCell("C2"));
