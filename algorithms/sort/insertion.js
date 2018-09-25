// const insertionSort = arr => {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 1; i < arr.length; i++) {
//     let currElement = i;
//     for (let j = i - 1; j >= 0; j--) {
//       console.log("i:", i, "j:", j, "curr:", currElement);
//       if (arr[currElement] < arr[j]) {
//         console.log(arr);
//         swap(arr, j, currElement);
//         console.log(arr);
//         if (currElement > 0) currElement--;
//       } else {
//         console.log("breaking.......", arr);
//         break;
//       }
//     }
//   }
//   return arr;
// };

// refactored with swapping elements
const insertionSort = arr => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let currIndex = i;
    for (let j = i - 1; j >= 0 && arr[currIndex] < arr[j]; j--) {
      count++;
      [arr[currIndex], arr[j]] = [arr[j], arr[currIndex]];
      currIndex--;
    }
  }
  console.log(count);
  return arr;
};

// refactored with swapping when correct index is found elements
const insertionSort3 = arr => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      count++;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }
  console.log(count);
  return arr;
};

function insertionSort10(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      if (i > 1) {
        for (let j = 0; j < i; j++) {
          if (arr[i] < arr[j]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      }
    }
  }
  return arr;
}

// another approach not the best approach
function insertionSort10(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      if (i > 1) {
        for (let j = i + 1; j <= 0; j--) {
          count++;
          if (arr[i] < arr[j]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
          }
          console.log("current array :", arr);
        }
      }
    }
  }
  console.log("Count:", count);
  return arr;
}

console.log(insertionSort10([9, 1, 2, 3, 7, 6, 5, 4]));
