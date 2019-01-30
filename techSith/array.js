const a = [1, 2, 5, 7, 8];
const b = [1, 2, 4, 5, 7, 8];
console.log(a.concat(b));

const c = [...a, ...b].sort();
console.log(c);
//console.log(a.concat(b).sort((a, b) => b > a));
