// ChessBoard

const chessBoard = (char, height, width) => {
  let row1 = "";
  let row2 = "";

  for (let i = 0; i < width; i++) {
    row1 += ` ${char}`;
    row2 += `${char} `;
  }

  for (let i = 0; i < height; i++) {
    i % 2 === 0 ? console.log(row1) : console.log(row2);
  }
};

chessBoard("#", 8, 4);
