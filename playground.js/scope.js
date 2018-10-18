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

const convertColumn = col => {
  return col.charCodeAt(0) - 65;
};

const lightCell = cell => {
  let col = convertColumn(cell);
  let row = +cell[1] - 1;
  if (cell.length === 2 && (col >= 65 && col <= 73) && (row >= 0 && row <= 9)) {
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
    if (col < GRID[0].length) {
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

console.log(shipReport());
