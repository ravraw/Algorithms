const generateBoard = (whiteQueen, blackQueen, boardSize) => {
  let board = [];
  let row = [];

  // Populate a single row
  for (let i = 0; i < boardSize; i++) {
    row.push(0);
  }

  // insert white and black queen positions conditionaly;
  for (let i = 0; i < boardSize; i++) {
    let newRow = [...row];
    if (i === whiteQueen[0]) {
      newRow[whiteQueen[1]] = 1;
    }

    if (i === blackQueen[0]) {
      newRow[blackQueen[1]] = 1;
    }

    board.push(newRow);
  }
  console.log(board);
  return board;
};

const queenThreat = board => {
  let threatStatus = {
    rowThreat: false,
    colThreat: false,
    diagThreat: false
  };

  // In same row
  for (let i = 0; i < board.length; i++) {
    let sum = board[i].reduce((acc, cur) => acc + cur);
    if (sum === 2) {
      threatStatus.rowThreat = true;
      break;
    }
  }
  // same column
  let currentColumn = 0;
  let currentRow = 0;
  let sum = 0;
  for (let i = 0; i < board.length ** 2; i++) {
    sum = sum + board[currentRow][currentColumn];
    if (sum === 2) {
      threatStatus.colThreat = true;
      break;
    }
    if (currentRow !== board.length - 1) {
      currentRow++;
    } else {
      currentRow = 0;
      currentColumn++;
      sum = 0;
    }
  }

  // diagonaly

  for (let i = 0; i < board.length * 2; i++) {
    arrCol.push(i);
    arrRow.push(i);
  }

  //
  return (
    threatStatus.colThreat || threatStatus.rowThreat || threatStatus.diagThreat
  );
};

const whiteQueen = [0, 3];
const blackQueen = [3, 0];

const board = generateBoard(whiteQueen, blackQueen, 8);
console.log(queenThreat(board));

0;
1, 0;
2, 1, 0;
3, 2, 1, 0;
4, 3, 2, 1, 0;
5, 4, 3, 2, 1, 0;
[0,1,]
                  [0][0]                            a 0  b 0
               [0][1] [1][0]                     a 1  b = a
           [0][2] [1][1] [2][0]                  a 2  b= a
        [0][3] [1][2] [2][1] [3][0]              a 3 
     [0][4] [1][3] [2][2] [3][1] [4][0]
  [0][5] [1][4][2][3] [3][2] [4][1][5][0]


 