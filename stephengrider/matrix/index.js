// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // build array
  let arr = Array(n)
    .fill([])
    .map(subArr => (subArr = Array(n).fill("a")));

  let lap = 1; // tracks laps completed
  let maxIndex = n - lap; // tracks max col/row index allowed in a lap
  let row = 0; // tracks current row
  let col = 0; // tracks current column

  for (let i = 0; i < n * n; i++) {
    arr[row][col] = i + 1; // assign the value to cell

    if (col < maxIndex) col++;
    else if (row < maxIndex) row++;
    else if (col > lap - 1) {
      col--;
      maxIndex--;
    } else if (row > lap) row--;
    else {
      col += 1;
      lap++;
      maxIndex = n - lap;
    }
  }
  return arr;
}

console.log(matrix(6));
module.exports = matrix;
