// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

// module.exports = fib;

// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }

// faster solution
let fib = function(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

function memoize(fn) {
  const memoize = {};
  return function(arg) {
    if (!memoize[arg]) {
      memoize[arg] = fn(arg);
    }
    return memoize[arg];
  };
}

fib = memoize(fib);
console.log("fast:", fib(100));

const fib5 = n => {
  if (n < 2) return n;
  return fib5(n - 1) + fib5(n - 2);
};
console.log("SLOW:", fib5(45));

//Method 4
// function fib(n, cache = []) {
//   if (n < 2) {
//     return n;
//   }
//   if (cache[n]) {
//     return cache[n];
//   } else {
//     cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
//   }
//   return cache[n];
// }
