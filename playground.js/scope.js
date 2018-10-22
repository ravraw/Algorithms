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

const countRows = () => {
  return GRID.length;
};

const countColumns = () => {
  return GRID[0].length;
};

const gridSize = () => {
  const height = countRows();
  const width = countColumns();
  return `${width} x ${height}`;
};

const totalCells = () => {
  return countRows() * countColumns();
};

const convertColumn = cell => {
  return cell.charCodeAt(0) - 65;
};

const lightCell = cell => {
  let col = convertColumn(cell);
  let row = +cell[1] - 1;
  if (cell.length === 2 && (col >= 0 && col <= 9) && (row >= 0 && row <= 9)) {
    return GRID[row][col];
  }
  return false;
};

const isRock = cell => {
  return lightCell(cell) === "^";
};

const isCurrent = cell => {
  return lightCell(cell) === "~";
};

const isShip = cell => {
  return lightCell(cell) === "v";
};

const lightRow = row => {
  return GRID[row - 1];
};
const lightColumn = col => {
  let column = convertColumn(col);
  return GRID.map(row => row[column]);
};

// Helper function converts coordinates to cell Name
const convertToCellName = (row, col) => {
  let colChar = String.fromCharCode(col + 65);
  let rowChar = row + 1;
  let cellName = `${colChar}${rowChar}`;
  return cellName;
};

// Helper function return cell Names for a given condition
const conditionTracker = condition => {
  let conditionArray = [];
  let row = 0;
  let col = 0;
  while (row < GRID.length) {
    let cell = GRID[row][col];
    if (cell === condition) {
      let cellName = convertToCellName(row, col);
      conditionArray.push(cellName);
    }
    if (col < GRID[0].length - 1) {
      col++;
    } else {
      col = 0;
      row++;
    }
  }
  return conditionArray;
};

const allRocks = () => {
  return conditionTracker("^");
};
const allCurrents = () => {
  return conditionTracker("~");
};
const allShips = () => {
  return conditionTracker("v");
};

const firstRock = () => {
  return allRocks()[0];
};
const firstCurrent = () => {
  return allCurrents()[0];
};

const shipReport = () => {
  let sortedShips = allShips().sort();
  let leftShip = sortedShips[0];
  let rightShip = sortedShips[sortedShips.length - 1];
  return [leftShip, rightShip];
};

const howDangerous = cell => {
  return isRock(cell) ? 100 : isCurrent(cell) ? 50 : 0;
};

//Helper to calculate % of given condition
const percentageOf = cb => {
  let condition = cb().length;
  let gridSize = countRows() * countColumns();
  return ((condition / gridSize) * 100).toFixed(2);
};

const percentageReport = () => {
  return [percentageOf(allRocks), percentageOf(allCurrents)];
};

const safetyReport = () => {
  let percentageGRID = GRID.map(row => [...row]);
  let row = 0;
  let col = 0;
  while (row < percentageGRID.length) {
    let cellValue = percentageGRID[row][col];
    if (cellValue === "^") {
      percentageGRID[row][col] = 100;
    } else if (cellValue === "~") {
      percentageGRID[row][col] = 50;
    } else {
      percentageGRID[row][col] = 0;
    }
    if (col < percentageGRID[0].length - 1) {
      col++;
    } else {
      col = 0;
      row++;
    }
  }

  return percentageGRID;
};
// //helper function to convert cell to position number
// const convertCellToNumber = cell => {
//   let row = +cell.slice(1);
//   let col = convertColumn(cell);
//   //console.log(row, col);
//   return (row - 1) * GRID.length + col + 1;
// };

// const calcDistance = (cell1, cell2) => {
//   let position1 = convertCellToNumber(cell1);
//   let position2 = convertCellToNumber(cell2);
//   //console.log(position1, position2);
//   return Math.abs(position1 - position2);
// };
// console.log(calcDistance("A1", "J10"));

const calcDistance = (cell1, cell2) => {
  let rowCell1 = +cell1.slice(1);
  let colCell1 = convertColumn(cell1) + 1;
  let rowCell2 = +cell2.slice(1);
  let colCell2 = convertColumn(cell2) + 1;
  //console.log(rowCell1, colCell1, rowCell2, colCell2);
  return Math.sqrt(
    (colCell2 - colCell1) ** 2 + (rowCell2 - rowCell1) ** 2
  ).toFixed(2);
};
console.log(calcDistance("A1", "J10"));
console.log(calcDistance("A1", "J10"));
