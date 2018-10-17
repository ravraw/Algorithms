// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
module.exports = reverse;

// method 1 : str.split('').reverse().join('');

// Method 2 :

// let reversedString = '';
//   for(let i = 0; i < str.length; i++) {
//     reversedString = str[i] + reversedString ;
//   }
//   return reversedString ;

// Method 3 :
// let reversedString = '';
//   for(character of str) {         // uses es6 for loop
//     reversedString = character + reversedString ;
//   }
//   return reversedString ;

// method: 4
// function reverse(str) {
//   return str.split("").reduce((rev, char) =>  char + rev ,"")
// }
// module.exports = reverse;
