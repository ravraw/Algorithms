// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let arr = Array(2 * n + 1).fill(" ");
//   let middleIndex = n - 1; // index are zero based
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       arr[middleIndex] = "#";
//     } else {
//       arr[middleIndex - i] = "#";
//       arr[middleIndex + i] = "#";
//     }
//     console.log(arr.join(""));
//   }
// }

// //Method 2
// const pyramid2 = n => {
//   for (let i = 0; i <= n; i++) {
//     console.log(
//       `${"_".repeat(n - i)} ${"#".repeat(2 * i + 1)} ${"_".repeat(n - i)}`
//     );
//   }
// };

//Method 3 recursive

const pyramid3 = (n, i = 0) => {
  if (n === 0) return;
  console.log(
    `${" ".repeat(n - 1)}${"#".repeat(i * 2 + 1)}${" ".repeat(n - 1)}`
  );
  return pyramid3(n - 1, ++i);
};

module.exports = pyramid3;

console.log(pyramid3(3));
