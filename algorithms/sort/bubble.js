// Naive
const bubble1 = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log("changed...");
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("swaped...");
      }
    }
  }
  return arr;
};

// console.log(bubble1([3, 2, 5, 9, 1, 7, 4, 8, 10]));

// unOPTIMIZED VERSION OF BUBBLE SORT

const bubble2 = arr => {
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    console.log("........changed...");
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("....swaped...");
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// console.log(bubble2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//console.log(bubble2([7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(bubble2([9, 8, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ES2015 Version
function bubble3(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// console.log(bubble3([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
